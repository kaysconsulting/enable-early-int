import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-teal-800 mb-4 font-poppins">
            Not sure which service is right for your child?
          </h3>
          <p className="text-gray-600 mb-6 font-inter max-w-2xl mx-auto">
            Our experienced team can help assess your child's needs and recommend the most appropriate services.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/contact">Get Professional Assessment</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
