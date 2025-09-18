import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { LoginRequest } from "@/types/user";
import { signJwt } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body: LoginRequest = await req.json();

    const { email, password } = body;

    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );

    if (!user.verified) {
      return NextResponse.json(
        { error: "Email not verified" },
        { status: 403 }
      );
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    const token = signJwt({ id: user._id, role: user.role }, "1d"); // Token expires in 1 day

    const response = NextResponse.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    }, { status: 200 });

    response.cookies.set("krishi-mitra-auth-token", token, {
      httpOnly: true, // prevents JS access
      secure: process.env.NODE_ENV === "production", // HTTPS only in prod
      sameSite: "strict", // CSRF protection
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/", // available across site
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
