import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResourcesCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-teal-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-teal-800 mb-4 font-poppins">Need More Information?</h3>
          <p className="text-gray-600 mb-6 font-inter">
            Can't find what you're looking for? Our team is here to help you access the resources and support you need.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
          >
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
