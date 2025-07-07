import type { Metadata } from "next"
import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"

export const metadata: Metadata = {
  title: "Contact Us - Enable Early Intervention",
  description:
    "Get in touch with Enable Early Intervention. Schedule a consultation, ask questions, or learn more about our pediatric therapy services.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="py-16 bg-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
