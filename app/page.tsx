import Hero from "@/components/Hero"
import AboutUsSection from "@/components/AboutUsSection"
import CoreServices from "@/components/CoreServices"
import StatisticsBanner from "@/components/StatisticsBanner"
import Testimonials from "@/components/Testimonials"
import LatestNews from "@/components/LatestNews"
import ContactBanner from "@/components/ContactBanner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUsSection />
      <CoreServices />
      <StatisticsBanner />
      <Testimonials />
      <LatestNews />
      <ContactBanner />
    </main>
  )
}
