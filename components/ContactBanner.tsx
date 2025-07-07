import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-teal-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-4 font-poppins">
          Ready to Start Your Child's Journey with Support That Matters?
        </h2>
        <p className="text-lg text-gray-600 mb-8 font-inter max-w-2xl mx-auto">
          Get in touch today to speak with our friendly team and discover how early intervention can make a lifelong
          difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold bg-transparent"
          >
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
