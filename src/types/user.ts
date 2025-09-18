export type UserRole = "farmer" | "officer" | "admin";

export interface RegisterRequest {
  name: string;
  email: string;
  phone?: string;
  password: string;
  role?: UserRole;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}
