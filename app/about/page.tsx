import type { Metadata } from "next"
import AboutHero from "@/components/about/AboutHero"
import AboutContent from "@/components/about/AboutContent"
import OurVision from "@/components/about/OurVision"
import WhyChooseUs from "@/components/about/WhyChooseUs"

export const metadata: Metadata = {
  title: "About Enable Early Intervention - Our Mission & Vision",
  description:
    "Learn about Enable Early Intervention - empowering individuals and families through every stage of life with tailored, compassionate, and expert support.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutContent />
      <OurVision />
      <WhyChooseUs />
    </main>
  )
}
