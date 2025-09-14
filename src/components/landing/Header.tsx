"use client"

import { useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter, usePathname } from "next/navigation"
import LocalSwitcher from "@/components/LocalSwitcher"

export function Header() {
  const t = useTranslations("landing.navigation")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
    { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  ]

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">KM</span>
            </div>
            <span className="text-xl font-bold text-primary">Krishi Mitra</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("home")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("services")}
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("features")}
            </button>
            <button
              onClick={() => scrollToSection("how-to-use")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("howToUse")}
            </button>
            {/* <button
              onClick={() => scrollToSection("login")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("login")}
            </button> */}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LocalSwitcher/>
            <Button onClick={() => router.push("/auth/login")}>{t("getStarted")}</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={locale === lang.code ? "bg-accent" : ""}
                  >
                    {lang.nativeName}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu> */}
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("home")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("services")}
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("features")}
              </button>
              <button
                onClick={() => scrollToSection("how-to-use")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("howToUse")}
              </button>
              {/* <button
                onClick={() => router.push("/auth/login")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("login")}
              </button> */}
              <Button onClick={() => router.push("/auth/login")} className="w-full">
                {t("getStarted")}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
