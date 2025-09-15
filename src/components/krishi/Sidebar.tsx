"use client"

import { cn } from "@/lib/utils";
import { AlertTriangle, BookOpen, History, LayoutDashboard, MessageSquare, Settings, Sprout, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";


const navigation = [
  { name: "Dashboard", href: "/krishi", icon: <LayoutDashboard className="h-4 w-4"/> },
  { name: "Ask Query", href: "/krishi/query", icon: <MessageSquare className="h-4 w-4"/> },
  { name: "History", href: "/krishi/history", icon: <History className="h-4 w-4"/> },
  { name: "Alerts", href: "/krishi/alerts", icon: <AlertTriangle className="h-4 w-4"/> },
  { name: "Resources", href: "/krishi/resources", icon: <BookOpen className="h-4 w-4"/> },
  { name: "Settings", href: "/krishi/settings", icon: <Settings className="h-4 w-4"/> },
]


export default function Sidebar() {
      const [sidebarOpen, setSidebarOpen] = useState(false)
      const pathname = usePathname()
  return (
    <>
      {/* Mobile sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          sidebarOpen ? "block" : "hidden"
        )}
      >
        <div
          className="fixed inset-0 bg-black/20"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Krishi</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:overflow-y-auto lg:bg-card lg:border-r lg:border-border">
        <div className="flex items-center gap-2 p-6 border-b border-border">
          <Sprout className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">Krishi</span>
        </div>
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
