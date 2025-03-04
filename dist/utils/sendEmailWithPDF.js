import nodemailer from 'nodemailer';
// Function to send an email with the PDF attachment
export async function sendEmailWithPDF(email, pdfPath) {
    const transporter = nodemailer.createTransport({
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
    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${email}`);
}
