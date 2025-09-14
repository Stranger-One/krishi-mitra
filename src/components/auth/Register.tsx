"use client";

import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";


const registerSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function Register({ locale }: { locale: string }) {
  console.log(locale)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const router = useRouter();


  const onSubmit = (data: RegisterFormValues) => {
    console.log("Register form submitted", data);
    router.push(`/auth/verify/${encodeURIComponent(data.email)}`);
    // In a real app, send this to your API
  };

  return (
    <Card className="container max-w-md mx-auto space-y-2 animate-in fade-in zoom-in-90 duration-300 relative">
      <button onClick={() => router.back()} className="bg-border hover:bg-border/70 p-2 rounded-full absolute -top-2 -translate-y-full left-0 z-10 cursor-pointer">
            <ArrowLeft className="h-5 w-5" />
          </button>
      <CardHeader>
        <div className=" w-20 h-20 bg-border rounded-full mx-auto mt-2"></div>
        <CardTitle className="text-center font-semibold text-lg">Register for Krishi Mitra</CardTitle>
       
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center">
          <div className="input-field space-y-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              id="fullname"
              type="text"
              placeholder="John Doe"
              {...register("fullname")}
              className="bg-background placeholder:text-border"
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">
                {errors.fullname.message}
              </p>
            )}
          </div>

          <div className="input-field space-y-2">
            <Label htmlFor="email-register">Email</Label>
            <Input
              id="email-register"
              type="text"
              placeholder="john.doe@example.com"
              {...register("email")}
              className="bg-background placeholder:text-border"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="input-field space-y-2">
            <Label htmlFor="phone-register">Phone</Label>
            <Input
              id="phone-register"
              type="tel"
              placeholder="+91 9876543210"
              {...register("phone")}
              className="bg-background placeholder:text-border"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="input-field space-y-2">
            <Label htmlFor="password-register">Password</Label>
            <Input
              id="password-register"
              type="password"
              placeholder="********"
              {...register("password")}
              className="bg-background placeholder:text-border"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>
          

          <Button type="submit">Register</Button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
