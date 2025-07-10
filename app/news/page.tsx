import type { Metadata } from "next"
import NewsHero from "@/components/news/NewsHero"
import NewsList from "@/components/news/NewsList"
import NewsletterSignup from "@/components/news/NewsletterSignup"

export const metadata: Metadata = {
  title: "News & Insights - Enable Early Intervention",
  description:
    "Stay updated with the latest news, insights, and resources about NDIS services, early childhood intervention, and disability support.",
}

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <NewsHero />
      <NewsList />
      <NewsletterSignup />
    </main>
  )
}
