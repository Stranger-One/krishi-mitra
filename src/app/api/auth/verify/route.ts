import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { VerifyOtpRequest } from "@/types/user";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body: VerifyOtpRequest = await req.json();

    const { email, otp } = body;

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (user.verified) {
      return NextResponse.json({ message: "Already verified" }, { status: 200 });
    }

    if (user.otp !== otp || user.otpExpires < new Date()) {
      return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
    }

    user.verified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    return NextResponse.json({ message: "User verified successfully" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
