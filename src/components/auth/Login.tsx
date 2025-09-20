"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
import { ArrowLeft, X } from "lucide-react";

const loginSchema = z.object({
  emailOrPhone: z.string().min(1, "Email or Phone is required"),
  password: z.string().min(6, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter()

   const onSubmit = (data: LoginFormValues) => {
    console.log("Login form submitted", data);
    router.push(`/krishi`)
    // In a real app, this would handle login logic
  };

  return (
    <Card className="container max-w-md mx-auto space-y-6 animate-in fade-in zoom-in-90 duration-300 relative">
          <button onClick={() => router.back()} className="bg-border hover:bg-border/70 p-2 rounded-full absolute -top-2 -translate-y-full left-0 z-10 cursor-pointer">
            <ArrowLeft className="h-5 w-5" />
          </button>
       
      <CardHeader>
        <div className=" w-20 h-20 bg-border rounded-full mx-auto mt-2"></div>
        <CardTitle className="text-center font-semibold text-lg">Login to Krishi Mitra</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center">
          <div className="input-field space-y-2">
            <Label htmlFor="email-phone-login">Email / Phone</Label>
            <Input
              id="email-phone-login"
              type="text"
              placeholder="Email or Phone number"
              {...register("emailOrPhone")}
              className="bg-background placeholder:text-border"
            />
            {errors.emailOrPhone && (
              <p className="text-red-500 text-sm">{errors.emailOrPhone.message}</p>
            )}
          </div>
          <div className="input-field space-y-2">
            <Label htmlFor="password-login">Password</Label>
            <Input
              id="password-login"
              type="password"
              placeholder="********"
              {...register("password")}
              className="bg-background placeholder:text-border"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <Button type="submit">Log In</Button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
