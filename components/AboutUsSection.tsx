import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutUsSection() {
  const highlights = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every interaction is guided by empathy and understanding",
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We work with families as partners in the journey",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Qualified professionals with years of experience",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fadeInUp">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl font-poppins mb-6">
              About Enable Us
            </h2>
            <div className="space-y-4 text-gray-600 font-inter leading-relaxed">
              <p className="text-lg">
                At Enable Us, we believe that every person deserves the support they need to thrive—at the very start
                stage of life. We provide tailored NDIS services that support participants from early childhood, with a
                strong focus on personalised care, community inclusion, and long-term independence.
              </p>
              <p>
                Whether it's early intervention for your child, finding meaningful employment, or building confidence
                through social and community activities, our experienced team is here to walk with you every step of the
                way.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-lg bg-gradient-to-br from-teal-50 to-orange-50 hover:from-teal-100 hover:to-orange-100 transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-colors duration-300">
                      <highlight.icon className="h-4 w-4 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" />
                    </div>
                    <h4 className="font-semibold text-teal-800 text-sm font-poppins">{highlight.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 font-inter">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Link href="/about" className="flex items-center space-x-2">
                  <span>Learn More About Our Story</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: "300ms" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/about-us-inclusive-classroom.jpg"
                alt="Young child with Down syndrome joyfully playing guitar in an inclusive classroom setting with other children and supportive teachers in the background"
                width={600}
                height={500}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent group-hover:from-teal-900/30 transition-all duration-500"></div>

              {/* Floating elements */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-3 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-teal-800 text-sm font-poppins">Inclusive</p>
                    <p className="text-xs text-gray-600 font-inter">Environment</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg transform transition-all duration-500 hover:scale-110 hover:-rotate-3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-teal-800 text-sm font-poppins">Expert</p>
                    <p className="text-xs text-gray-600 font-inter">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
