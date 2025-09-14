"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, UserCheck, Settings } from "lucide-react"

export function LoginOptionsSection() {
  const t = useTranslations("landing.loginOptions")

  const loginOptions = [
    {
      icon: User,
      title: t("farmer.title"),
      description: t("farmer.description"),
      buttonText: t("farmer.button"),
      variant: "default" as const,
      href: "/farmer/login",
    },
    {
      icon: UserCheck,
      title: t("officer.title"),
      description: t("officer.description"),
      buttonText: t("officer.button"),
      variant: "secondary" as const,
      href: "/officer/login",
    },
    {
      icon: Settings,
      title: t("admin.title"),
      description: t("admin.description"),
      buttonText: t("admin.button"),
      variant: "outline" as const,
      href: "/admin/login",
    },
  ]

  return (
    <section id="login" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {loginOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-base leading-relaxed">{option.description}</CardDescription>
                  <Button
                    variant={option.variant}
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      // In a real app, this would navigate to the login page
                      console.log(`Navigate to ${option.href}`)
                    }}
                  >
                    {option.buttonText}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
