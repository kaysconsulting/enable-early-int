import type { Metadata } from "next"
import ResourcesHero from "@/components/resources/ResourcesHero"
import DownloadableResources from "@/components/resources/DownloadableResources"
import LocalServices from "@/components/resources/LocalServices"
import ResourcesCTA from "@/components/resources/ResourcesCTA"

export const metadata: Metadata = {
  title: "Resources & Support - Enable Early Intervention",
  description:
    "Access helpful resources, forms, and information to support your child's development journey. Download forms, checklists, and find local services.",
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <ResourcesHero />
      <DownloadableResources />
      <LocalServices />
      <ResourcesCTA />
    </main>
  )
}
