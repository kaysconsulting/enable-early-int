import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServiceDetail from "@/components/services/ServiceDetail"

const services = {
  "early-childhood-intervention": {
    title: "Early Childhood Intervention",
    description:
      "Holistic, family-focused support for children with developmental delays or disabilities—delivered early to make a lasting impact.",
    icon: "MessageCircle",
    color: "orange",
  },
  "support-coordination": {
    title: "Support Coordination",
    description:
      "We simplify the NDIS, helping you connect with the right providers, manage your plan, and achieve your goals.",
    icon: "Users",
    color: "teal",
  },
  "specialised-supported-employment": {
    title: "Specialised Supported Employment",
    description: "Meaningful employment pathways tailored to your strengths and ambitions, with on-the-job support.",
    icon: "Briefcase",
    color: "orange",
  },
  "community-participation": {
    title: "Community Participation",
    description:
      "Encouraging social engagement, skill-building, and confidence through tailored activities in your local area.",
    icon: "MapPin",
    color: "teal",
  },
  "group-centre-activities": {
    title: "Group & Centre-Based Activities",
    description: "Safe, fun, and engaging group programs that foster friendships, creativity, and life skills.",
    icon: "UsersIcon",
    color: "orange",
  },
  "access-maintain-employment": {
    title: "Access and Maintain Employment",
    description:
      "Practical support to gain, keep, or return to work—including job-readiness training and workplace access assistance.",
    icon: "Building",
    color: "teal",
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    return {
      title: "Service Not Found - Enable Us",
    }
  }

  return {
    title: `${service.title} - Enable Us`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <ServiceDetail service={service} slug={params.slug} />
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}
