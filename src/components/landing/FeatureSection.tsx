"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Mic, Zap, Bell } from "lucide-react"

export function FeaturesSection() {
  const t = useTranslations("landing.features")

  const features = [
    {
      icon: Globe,
      title: t("multilingualSupport.title"),
      description: t("multilingualSupport.description"),
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Mic,
      title: t("voiceQueries.title"),
      description: t("voiceQueries.description"),
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Zap,
      title: t("instantAnswers.title"),
      description: t("instantAnswers.description"),
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Bell,
      title: t("personalizedAlerts.title"),
      description: t("personalizedAlerts.description"),
      gradient: "from-primary/20 to-primary/5",
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className=" mx-auto px-4 sm:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
