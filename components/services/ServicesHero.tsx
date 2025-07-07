import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-orange-50 py-20 sm:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-teal-800 sm:text-5xl md:text-6xl">
            Our
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg sm:text-xl text-gray-600 leading-relaxed font-inter">
            Comprehensive NDIS services designed to empower individuals and families at every stage of life. From early
            childhood intervention to employment support and community participation.
          </p>

          <div className="mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
