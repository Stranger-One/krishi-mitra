"use client";

import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  History,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Settings,
  X,
} from "lucide-react";
import LocalSwitcher from "../LocalSwitcher";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

const navigation = [
  {
    name: "dashboard",
    href: "/krishi",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    name: "askQuery",
    href: "/krishi/query",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    name: "history",
    href: "/krishi/history",
    icon: <History className="h-4 w-4" />,
  },
  {
    name: "alerts",
    href: "/krishi/alerts",
    icon: <AlertTriangle className="h-4 w-4" />,
  },
  {
    name: "resources",
    href: "/krishi/resources",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    name: "settings",
    href: "/krishi/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

export default function Topbar({ location }: { location: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const t = useTranslations("krishi.navigation");
  const pathname = usePathname();

  console.log("location", location)

  const router = useRouter();
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-x-4 border-b border-border bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex items-center gap-x-2">
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-card h-10 w-10 rounded-full flex items-center justify-center shrink-0 cursor-pointer hover:bg-muted transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 " />
        </button>
        <h1 className="text-xl font-bold tracking-tight">{t(location)}</h1>
      </div>

      <div className="flex items-center gap-x-4 self-stretch lg:gap-x-6">
        <div className="hidden lg:block">
          <LocalSwitcher />
        </div>
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex items-center justify-center p-2 lg:hidden"
        >
          <Menu className="h-6 w-6 " />
        </button>
      </div>
      
      {/* Mobile sidebar */}
      {
        <div
          className={cn(
            "fixed inset-0 z-50 lg:hidden",
            sidebarOpen ? "block" : "hidden"
          )}
        >
          <div className="fixed left-0 top-0 h-full w-full bg-card border-r border-border">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center space-x-2 h-16 w-full ">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                  <span className="text-primary-foreground font-bold text-sm">
                    KM
                  </span>
                </div>
                <span className="text-xl font-bold text-primary">
                  Krishi Mitra
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center justify-center p-2"
              >
                <X className="h-6 w-6 " />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              <LocalSwitcher />

              {navigation.map((item) => {
                const isActive = pathname === item.href;
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
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.icon}
                    {t(item.name)}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      }
    </div>
  );
}
