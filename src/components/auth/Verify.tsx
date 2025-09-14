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
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const verifySchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().length(6, "OTP must be 6 characters long")
});

type VerifyFormValues = z.infer<typeof verifySchema>;

export default function Verify({email, locale}: {email: string, locale: string}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VerifyFormValues>({
    defaultValues: {
        email: email,
    },
    resolver: zodResolver(verifySchema),
  });

  const router = useRouter()

  const onVerify = (data: VerifyFormValues) => {
    console.log("Register form submitted", data);
    router.push(`/auth/login`);
    // In a real app, send this to your API
  };

  return (
    <Card className="container max-w-md mx-auto space-y-2 animate-in fade-in zoom-in-90 duration-300 relative">
      <button onClick={() => router.back()} className="bg-border hover:bg-border/70 p-2 rounded-full absolute -top-2 -translate-y-full left-0 z-10 cursor-pointer">
            <ArrowLeft className="h-5 w-5" />
          </button>
      <CardHeader>
        <div className=" w-20 h-20 bg-border rounded-full mx-auto mt-2"></div>
        <CardTitle className="text-center font-semibold text-lg">
          Verify Your Email To continue
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(onVerify)}
          className="space-y-4 flex flex-col justify-center"
        >
          

          <div className="input-field space-y-2">
            <Label htmlFor="email-verify">Email</Label>
            <Input
              id="email-verify"
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
            <Label htmlFor="otp-verify">OTP</Label>
            <Input
              id="otp-verify"
              type="text"
              placeholder="Enter OTP sent to your email"
              {...register("otp")}
              className="bg-background placeholder:text-border"
            />
            {errors.otp && (
              <p className="text-red-500 text-sm">{errors.otp.message}</p>
            )}
          </div>

          <Button type="submit">Verify</Button>
        </form>
      </CardContent>
    </Card>
  );
}
