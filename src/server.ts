import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import fs from 'fs';
import { generateWorkoutHTML } from './utils/generateWorkoutHTML';
import { generatePDF } from './utils/generatePDF';
import { sendEmailWithPDF } from './utils/sendEmailWithPDF';
import { createContent } from './utils/createContent';

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 3301;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize OpenAI SDK
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// POST route to receive form data and process AI workout plan
app.post('/ai/workout-plan', async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing request', error });
  }
});

// Start Server
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
