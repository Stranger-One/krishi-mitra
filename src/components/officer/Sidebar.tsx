"use client";

import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  BookOpen,
  History,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Sprout,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

const navigation = [
  {
    name: "dashboard",
    href: "/officer",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    name: "escalations",
    href: "/officer/escalations",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    name: "alerts",
    href: "/officer/alerts",
    icon: <History className="h-4 w-4" />,
  },
  {
    name: "resources",
    href: "/officer/resources",
    icon: <AlertTriangle className="h-4 w-4" />,
  },
  {
    name: "analytics",
    href: "/officer/analytics",
    icon: <BookOpen className="h-4 w-4" />,
  },
  // {
  //   name: "settings",
  //   href: "/officer/settings",
  //   icon: <Settings className="h-4 w-4" />,
  // },
];

export default function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations("officer.navigation");

  return (
    <>

      {/* Desktop sidebar */}
      <div className="hidden w-[250px] lg:block lg:w-64 lg:overflow-y-auto lg:bg-card lg:border-r lg:border-border">
        <div className="flex items-center space-x-2 h-16 w-full p-4">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center overflow-hidden">
            <span className="text-primary-foreground font-bold text-sm">
              KM
            </span>
          </div>
          <span className="text-xl font-bold text-primary">Krishi Mitra</span>
        </div>
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            // console.log(isActive)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.icon}
                {t(item.name)}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
