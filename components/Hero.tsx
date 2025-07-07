import { Button } from "@/components/ui/button"
import { Heart, Award, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-orange-50 py-20 sm:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm border border-orange-100">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-orange-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-teal-800">Trusted by families across Australia</span>
            </div>

            <h1 className="font-poppins text-4xl font-bold tracking-tight text-teal-800 sm:text-5xl md:text-6xl">
              Guiding Brighter Futures.
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Strength for Every Step.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-gray-600 leading-relaxed font-inter">
              We guide families through the early childhood journey with expert support, personalised strategies, and
              compassionate care—so your child can thrive, and you never feel alone.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-sm hover:border-teal-700 transition-all duration-300"
              >
                <Link href="/services">See How We Help Families</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-children.jpg"
                alt="Happy diverse group of children in a circle looking down at camera, smiling joyfully - representing the positive outcomes of early childhood intervention"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent"></div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-teal-800 font-poppins">1000+</p>
                  <p className="text-sm text-gray-600 font-inter">Families Supported</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-teal-800 font-poppins">NDIS</p>
                  <p className="text-sm text-gray-600 font-inter">Approved Provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
