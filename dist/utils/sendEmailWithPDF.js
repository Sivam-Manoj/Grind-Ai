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
exports.sendEmailWithPDF = sendEmailWithPDF;
const nodemailer_1 = __importDefault(require("nodemailer"));
// Function to send an email with the PDF attachment
function sendEmailWithPDF(email, pdfPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
        });
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Your Workout Plan',
            html: `
      <div style="font-family: Arial, sans-serif; color: #fff; background-color: #B22222; padding: 20px; border-radius: 8px;">
        <div style="text-align: center;">
          <h1 style="color: #fff; font-size: 36px; font-weight: bold;">🔥 Grind AI</h1>
          <p style="color: #ffeb3b; font-size: 18px; font-weight: bold;">AI-Powered Fitness & Nutrition Planner</p>
        </div>
        <div style="margin-top: 20px;">
          <h2 style="color: #ff6347;">Thank you for choosing us!</h2>
          <p style="font-size: 16px; color: #fff;">Please find your <strong>workout plan</strong> attached.</p>
          <p style="font-size: 16px; color: #fff;">We hope it helps you achieve your fitness goals! If you have any questions, feel free to reach out.</p>
        </div>
        <div style="margin-top: 20px; text-align: center;">
          <p style="color: #ff6347; font-weight: bold;">Best regards,</p>
          <p style="color: #fff;">The Grind AI Team</p>
        </div>
      </div>
    `,
            attachments: [
                {
                    filename: 'Workout_Plan.pdf',
                    path: pdfPath,
                    contentType: 'application/pdf',
                },
            ],
        };
        yield transporter.sendMail(mailOptions);
        console.log(`📧 Email sent to ${email}`);
    });
}
