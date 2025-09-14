"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, MessageSquare, Brain, TrendingUp, MoveRight, ChevronsRight } from "lucide-react"

export function HowToUseSection() {
  const t = useTranslations("landing.howToUse")

  const steps = [
    {
      icon: UserPlus,
      title: t("step1.title"),
      description: t("step1.description"),
      step: "01",
    },
    {
      icon: MessageSquare,
      title: t("step2.title"),
      description: t("step2.description"),
      step: "02",
    },
    {
      icon: Brain,
      title: t("step3.title"),
      description: t("step3.description"),
      step: "03",
    },
    {
      icon: TrendingUp,
      title: t("step4.title"),
      description: t("step4.description"),
      step: "04",
    },
  ]

  return (
    <section id="how-to-use" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
                </CardContent>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-0 translate-x-full w-8 h-0.5  items-center justify-center transform -translate-y-1/2" >
                    <ChevronsRight size={44} className="text-border" />
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
