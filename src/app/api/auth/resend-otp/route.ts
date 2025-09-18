import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { generateOtp } from "@/utils/generateOtp";
import { sendOtpEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (user.verified) {
      return NextResponse.json({ message: "User already verified" }, { status: 200 });
    }

    const otp = generateOtp();
    user.otp = otp;
    user.otpExpires = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    await sendOtpEmail(email, otp);

    return NextResponse.json({ message: "OTP resent" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
