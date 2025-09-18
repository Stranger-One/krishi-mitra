"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Users, CloudRain, Sprout, Shield, MapPin } from "lucide-react"

export function ServicesSection() {
  const t = useTranslations("landing.services")

  const services = [
    {
      icon: Camera,
      title: t("diseaseDetection.title"),
      description: t("diseaseDetection.description"),
      color: "text-primary",
    },
    {
      icon: Users,
      title: t("expertConsultation.title"),
      description: t("expertConsultation.description"),
      color: "text-secondary",
    },
    {
      icon: CloudRain,
      title: t("weatherAlerts.title"),
      description: t("weatherAlerts.description"),
      color: "text-accent",
    },
    {
      icon: Sprout,
      title: t("cropAdvisory.title"),
      description: t("cropAdvisory.description"),
      color: "text-primary",
    },
    {
      icon: Shield,
      title: t("pesticideGuidance.title"),
      description: t("pesticideGuidance.description"),
      color: "text-secondary",
    },
    {
      icon: MapPin,
      title: t("nearbyDealers.title"),
      description: t("nearbyDealers.description"),
      color: "text-accent",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className=" mx-auto px-4 sm:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-background border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
