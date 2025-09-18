// src/app/api/auth/get-details/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJwt } from "@/lib/jwt";
import User from "@/models/User";
import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    // 1. Get JWT token from cookies
    const token = (await cookies()).get("krishi-mitra-auth-token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "No token provided" },
        { status: 401 }
      );
    }

    // 2. Verify JWT
    const decoded = verifyJwt<{ id: string }>(token);
    if (!decoded) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    // 3. Connect DB
    await connectDB();

    // 4. Find user
    const user = await User.findById(decoded.id).select(
      "-password -otp -otpExpires"
    );

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // 5. Return user details
    return NextResponse.json({ user });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
