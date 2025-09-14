"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Play, Sprout, MessageCircle, CloudRain } from "lucide-react"

export function HeroSection() {
  const t = useTranslations("landing.hero")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                <span className="text-primary">{t("title")}</span>
                <br />
                <span className="text-foreground">{t("subtitle")}</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl">{t("description")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection("login")}>
                {t("cta")}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2 bg-transparent">
                <Play className="h-5 w-5" />
                {t("watchDemo")}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">AI</div>
                <div className="text-sm text-muted-foreground">Powered</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Feature Cards */}
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border shadow-sm">
                  <Sprout className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Disease Detection</h3>
                  <p className="text-sm text-muted-foreground">Upload crop photos for instant disease identification</p>
                </div>
                <div className="bg-card p-6 rounded-xl border shadow-sm">
                  <CloudRain className="h-8 w-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">Weather Alerts</h3>
                  <p className="text-sm text-muted-foreground">Get timely weather updates for your location</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-card p-6 rounded-xl border shadow-sm">
                  <MessageCircle className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">Expert Consultation</h3>
                  <p className="text-sm text-muted-foreground">Connect with agricultural officers instantly</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">🌾</div>
                    <p className="text-sm font-medium">Smart Farming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
