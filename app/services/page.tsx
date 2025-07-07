import type { Metadata } from "next"
import ServicesHero from "@/components/services/ServicesHero"
import ServicesList from "@/components/services/ServicesList"
import ServicesCTA from "@/components/services/ServicesCTA"

export const metadata: Metadata = {
  title: "Our Services - Enable Us",
  description:
    "Comprehensive NDIS services including early childhood intervention, support coordination, employment services, and community participation programs.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </main>
  )
}
