import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the MONGODB_URI in .env.local");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: process.env.DB_NAME || "krishi-mitra",
    });
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}
