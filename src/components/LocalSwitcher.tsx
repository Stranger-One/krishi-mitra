"use client";

import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing"; // you already have select component
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function LocalSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] || routing.defaultLocale;

  const handleChange = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale; // replace current locale in URL
    router.push(segments.join("/"));
  };

  return (
    <div className="w-32 ">
      <Select onValueChange={handleChange} defaultValue={currentLocale}>
        <SelectTrigger className="w-32 cursor-pointer border-border">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {routing.locales.map((locale) => (
            <SelectItem key={locale} value={locale}>
              {locale.toUpperCase() === "EN"
                ? "English"
                : locale.toUpperCase() === "HI"
                ? "हिंदी "
                : locale.toUpperCase() === "ML"
                ? "മലയാളം" 
                : locale.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
