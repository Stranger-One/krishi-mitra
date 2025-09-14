import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 gap-1">
        
        {children}
      </div>
    </section>
  );
}
