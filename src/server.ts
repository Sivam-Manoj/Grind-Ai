import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { generateWorkoutHTML } from './utils/generateWorkoutHTML.js';
import { generatePDF } from './utils/generatePDF.js';
import { sendEmailWithPDF } from './utils/sendEmailWithPDF.js';
import { createContent } from './utils/createContent.js';

dotenv.config();

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port: number = Number(process.env.PORT) || 3301;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize OpenAI SDK
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Serve static files from the dist/build folder
const distPath = path.join(__dirname, '../build');
app.use(express.static(distPath));

// Define POST route for handling AI workout plan request
app.post('/ai/workout-plan', async (req: Request, res: Response) => {
  try {
    const { email, gender, age, weight, workoutPlan, budgetStyle } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a world-class fitness trainer and nutritionist. Provide highly detailed, scientifically proven, and well-structured JSON fitness plans, including workout routines, meal plans, dietary restrictions, calorie deficit strategies, and budget-friendly meal options.`,
        },
        {
          role: 'user',
          content: createContent(age, gender, weight, workoutPlan, budgetStyle),
        },
      ],
      temperature: 0.7,
      max_tokens: 16000,
    });

    // Validate OpenAI Response
    if (!response.choices || response.choices.length === 0) {
      throw new Error('No response from OpenAI');
    }

    const workoutDataRaw =
      response.choices[0]?.message?.content?.trim() || '{}';

    let workoutData;
    try {
      workoutData = JSON.parse(workoutDataRaw);
    } catch (error) {
      console.error('Failed to parse OpenAI response:', workoutDataRaw);
    }

    // Convert AI response into HTML format
    const htmlContent = generateWorkoutHTML(workoutData);

    // Convert HTML to a PDF
    const pdfPath = await generatePDF(htmlContent);

    // Send Email with PDF
    await sendEmailWithPDF(email, pdfPath);

    res.status(200).json({ message: 'Workout plan sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing request', error });
  }
});

// Serve the frontend (static HTML files)
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start the server
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
