import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import { createContent } from './utils/createContent.js';
import { generateWorkoutHTML } from './utils/generateWorkoutHTML.js';
import { generatePDF } from './utils/generatePDF.js';
import { sendEmailWithPDF } from './utils/sendEmailWithPDF.js';
dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 3301;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Initialize OpenAI SDK
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// POST route to receive form data and process AI workout plan
app.post('/ai/workout-plan', async (req, res) => {
    try {
        const { email, gender, age, weight, workoutPlan, budgetStyle } = req.body;
        const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: `You are a world-class fitness trainer and nutritionist. Provide highly detailed, Scientificly proved and best and structured JSON fitness plans, including workout routines, meal plans, dietary restrictions, calorie deficit strategies, and budget-friendly meal options.`,
                },
                {
                    role: 'user',
                    content: createContent(age, gender, weight, workoutPlan, budgetStyle),
                },
            ],
            response_format: { type: 'json_object' },
            temperature: 0.7,
            max_tokens: 16000, // ✅ Increased max token limit for detailed response
        });
        // Validate OpenAI Response
        if (!response.choices || response.choices.length === 0) {
            throw new Error('No response from OpenAI');
        }
        const workoutDataRaw = response.choices[0]?.message?.content || '{}';
        console.log('OpenAI Response:', workoutDataRaw); // Debugging
        const workoutData = JSON.parse(workoutDataRaw || '{}');
        // Step 2: Convert AI response into HTML format
        const htmlContent = generateWorkoutHTML(workoutData);
        // Step 3: Convert HTML to a PDF
        const pdfPath = await generatePDF(htmlContent);
        // Step 4: Send Email with PDF
        await sendEmailWithPDF(email, pdfPath);
        res.status(200).json({ message: 'Workout plan sent successfully!' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error processing request', error });
    }
});
// Function to fix spacing issues
// Function to fix spacing issues
const fixSpacing = (text) => {
    return text
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Fix camelCase words
        .replace(/([a-zA-Z])([,.!?])/g, '$1 $2') // Ensure space before punctuation
        .replace(/(?<=\w)(?=[A-Z])/g, ' ') // Ensure space before capital letters
        .replace(/(?<=\w)(?=[.,!?])/g, ' ') // Ensure space before punctuation
        .replace(/\s+/g, ' ') // Normalize spaces
        .trim();
};
app.post('/ai/chat', async (req, res) => {
    try {
        const { message } = req.body;
        // Set up SSE headers
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders(); // Ensure headers are sent immediately
        // Create OpenAI streaming request
        const openaiResponse = await openai.chat.completions.create({
            model: 'gpt-4.5-preview',
            messages: [
                {
                    role: 'system',
                    content: `You are a fitness expert and certified personal trainer. You ONLY provide guidance related to fitness, workout routines, diet plans, weight loss strategies, strength training, and general health.`,
                },
                { role: 'user', content: message },
            ],
            temperature: 0.7,
            max_tokens: 500,
            stream: true, // Enable streaming
        });
        let tempBuffer = '';
        // Stream the response with spacing fixes
        for await (const chunk of openaiResponse) {
            let content = chunk?.choices?.[0]?.delta?.content;
            if (content) {
                tempBuffer += content;
                const words = tempBuffer.split(/\s+/);
                if (words.length > 1) {
                    const completeWords = words.slice(0, -1).join(' ');
                    res.write(`data: ${fixSpacing(completeWords)}\n\n`);
                    tempBuffer = words[words.length - 1];
                }
            }
        }
        // Send the last buffered word
        if (tempBuffer.trim()) {
            res.write(`data: ${fixSpacing(tempBuffer.trim())}\n\n`);
        }
        // Indicate that the stream is complete
        res.write('data: [DONE]\n\n');
        res.end();
    }
    catch (error) {
        console.error('Error communicating with OpenAI:', error);
        res
            .status(500)
            .json({ message: 'Error processing request', error: error.message });
    }
});
// Start Server
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
