import { FeaturesSection } from "@/components/landing/FeatureSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowToUseSection } from "@/components/landing/HowToUseSection";
import { LoginOptionsSection } from "@/components/landing/LoginOptionsSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <HowToUseSection />
      <UseCasesSection />
      {/* <LoginOptionsSection /> */}
      <Footer />
    </>
  );
}
