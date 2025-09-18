import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { generateOtp } from "@/utils/generateOtp";
import { RegisterRequest } from "@/types/user";
import { sendOtpEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body: RegisterRequest = await req.json();

    const { name, email, phone, password, role } = body;

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    const otp = generateOtp();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 min

    const user = new User({
      name,
      email,
      phone,
      password,
      role: role || "farmer",
      otp,
      otpExpires,
    });

    await user.save();
    await sendOtpEmail(email, otp);

    return NextResponse.json({ message: "User registered, OTP sent" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
