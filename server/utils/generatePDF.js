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
exports.generatePDF = generatePDF;
const puppeteer_1 = __importDefault(require("puppeteer"));
// Function to generate a PDF using Puppeteer
function generatePDF(htmlContent) {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer_1.default.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'], // Disable sandbox for environments like CI/CD or restricted OS
        });
        const page = yield browser.newPage();
        // Ensure the page is loaded with proper content and styles
        yield page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });
        // Optionally inject external CSS (if any)
        // await page.addStyleTag({ path: 'path/to/your/styles.css' });
        // Define PDF path
        const pdfPath = './Workout_Plan.pdf';
        // Use the PDF generation options, including background color
        yield page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true, // Make sure background images/colors are printed
            margin: {
                top: '10mm',
                right: '10mm',
                bottom: '10mm',
                left: '10mm',
            },
        });
        yield browser.close();
        return pdfPath;
    });
}
