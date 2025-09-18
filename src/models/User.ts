import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export type UserRole = "farmer" | "officer" | "admin";

export interface IUser extends Document {
  name: string;
  email: string;
  phone?: string;
  password: string;
  role: UserRole;
  profileImage?: string;
  otp?: string;
  otpExpires?: Date;
  verified: boolean;
  comparePassword(candidate: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String, required: false },
    password: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: ["farmer", "officer", "admin"],
      default: "farmer",
    },
    profileImage: { type: String, required: false },
    otp: { type: String, required: false, },
    otpExpires: { type: Date, required: false },
    verified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Hash password before save
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
UserSchema.methods.comparePassword = async function (candidate: string) {
  return await bcrypt.compare(candidate, this.password);
};

const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
