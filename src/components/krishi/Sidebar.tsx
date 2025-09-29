"use client";

import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  BookOpen,
  History,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

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

export default function Sidebar() {
  const pathname = usePathname();
  const nt = useTranslations("common.navigation");
  const ct = useTranslations("common");

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden w-[250px] lg:flex lg:w-64 lg:overflow-y-auto lg:bg-card lg:border-r lg:border-border flex-col relative">
        <div className="flex items-center space-x-2 h-16 w-full p-4">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center overflow-hidden">
            <span className="text-primary-foreground font-bold text-sm">
              KM
            </span>
          </div>
          <span className="text-xl font-bold text-primary">Krishi Mitra</span>
        </div>
        <div className="flex flex-col justify-between flex-1 ">
          <nav className="p-4 space-y-2">
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
                >
                  {item.icon}
                  {nt(item.name)}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 space-y-2">
            <Link
              href={"/"}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ",
                // isActive
                "bg-primary text-primary-foreground"
                // : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <LogOut className="h-4 w-4" />
              {ct("logout")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
