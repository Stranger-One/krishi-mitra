"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, CloudRain, Shield } from "lucide-react"

export function UseCasesSection() {
  const t = useTranslations("landing.useCases")

  const useCases = [
    {
      icon: Search,
      title: t("case1.title"),
      description: t("case1.description"),
      image: "/images/crop-disease-identify.png",
    },
    {
      icon: CloudRain,
      title: t("case2.title"),
      description: t("case2.description"),
      image: "/images/weather-based-planing.png",
    },
    {
      icon: Shield,
      title: t("case3.title"),
      description: t("case3.description"),
      image: "/images/pesticide-safety.png",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden pt-0">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
