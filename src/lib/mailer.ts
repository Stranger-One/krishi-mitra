import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for port 465 (SSL)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ----------------------
// Generic Email Function
// ----------------------
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("❌ Email error:", error);
    return false;
  }
}

// ----------------------
// OTP Email Function
// ----------------------
export async function sendOtpEmail(email: string, otp: string) {
  const subject = "Your OTP Code - AI Farming Advisory";
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 10px;">
      <h2>🔐 Email Verification</h2>
      <p>Your OTP for verification is:</p>
      <h1 style="color: #2d89ef;">${otp}</h1>
      <p>This OTP will expire in <b>10 minutes</b>. Do not share it with anyone.</p>
    </div>
  `;

  return await sendEmail({ to: email, subject, html });
}
