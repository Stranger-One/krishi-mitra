"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const t = useTranslations("footer")
  const navT = useTranslations("navigation")

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">KM</span>
              </div>
              <span className="text-xl font-bold text-primary">Krishi Mitra</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{t("description")}</p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Button key={index} variant="ghost" size="sm" className="h-9 w-9 p-0" asChild>
                    <a href={social.href} aria-label={social.label}>
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t("quickLinks")}</h3>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
              >
                {navT("home")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
              >
                {navT("services")}
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
              >
                {navT("features")}
              </button>
              <button
                onClick={() => scrollToSection("how-to-use")}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
              >
                {navT("howToUse")}
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">{navT("services")}</h3>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Disease Detection
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Expert Consultation
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Weather Alerts
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Crop Advisory
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t("contact")}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@krishimitra.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
