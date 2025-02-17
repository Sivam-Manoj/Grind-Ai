import puppeteer from 'puppeteer';

// Function to generate a PDF using Puppeteer
export async function generatePDF(htmlContent: string): Promise<string> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'], // Disable sandbox for environments like CI/CD or restricted OS
  });

  const page = await browser.newPage();

  // Ensure the page is loaded with proper content and styles
  await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

  // Optionally inject external CSS (if any)
  // await page.addStyleTag({ path: 'path/to/your/styles.css' });

  // Define PDF path
  const pdfPath = './Workout_Plan.pdf';

  // Use the PDF generation options, including background color
  await page.pdf({
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

  await browser.close();
  return pdfPath;
}
