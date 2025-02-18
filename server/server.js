"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const openai_1 = require("openai");
const generateWorkoutHTML_1 = require("./utils/generateWorkoutHTML");
const generatePDF_1 = require("./utils/generatePDF");
const sendEmailWithPDF_1 = require("./utils/sendEmailWithPDF");
const createContent_1 = require("./utils/createContent");
const path_1 = __importDefault(require("path")); // ✅ Import path module
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3301;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Initialize OpenAI SDK
const openai = new openai_1.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const distPath = path_1.default.join(__dirname, '../dist'); // Adjust the path if needed
app.use(express_1.default.static(distPath));
// POST route to receive form data and process AI workout plan
app.post('/ai/workout-plan', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { email, gender, age, weight, workoutPlan, budgetStyle } = req.body;
        const response = yield openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: `You are a world-class fitness trainer and nutritionist. Provide highly detailed, Scientificly proved and best and structured JSON fitness plans, including workout routines, meal plans, dietary restrictions, calorie deficit strategies, and budget-friendly meal options.`,
                },
                {
                    role: 'user',
                    content: (0, createContent_1.createContent)(age, gender, weight, workoutPlan, budgetStyle),
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
        const workoutDataRaw = ((_b = (_a = response.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || '{}';
        console.log('OpenAI Response:', workoutDataRaw); // Debugging
        const workoutData = JSON.parse(workoutDataRaw || '{}');
        // Step 2: Convert AI response into HTML format
        const htmlContent = (0, generateWorkoutHTML_1.generateWorkoutHTML)(workoutData);
        // Step 3: Convert HTML to a PDF
        const pdfPath = yield (0, generatePDF_1.generatePDF)(htmlContent);
        // Step 4: Send Email with PDF
        yield (0, sendEmailWithPDF_1.sendEmailWithPDF)(email, pdfPath);
        res.status(200).json({ message: 'Workout plan sent successfully!' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error processing request', error });
    }
}));
// Root route for dist html static files
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(distPath, 'index.html'));
});
// Start Server
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
