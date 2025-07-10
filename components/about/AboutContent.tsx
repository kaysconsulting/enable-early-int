import Image from "next/image"
import { ArrowRight, Target, Heart, Users } from "lucide-react"

export default function AboutContent() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver person-centred, culturally respectful, and evidence-informed services that unlock potential.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Compassion, respect, excellence, and empowerment guide everything we do.",
    },
    {
      icon: Users,
      title: "Our Approach",
      description: "Collaborative partnerships with families, building on strengths and celebrating achievements.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fadeInUp">
            <div className="space-y-6 text-gray-600 font-inter leading-relaxed">
              <p className="text-lg">
                At Enable Early Intervention, we exist for one reason: to empower individuals and families through every stage of life
                with tailored, compassionate, and expert support.
              </p>
              <p>
                We specialise in Early Childhood Intervention and are deeply committed to walking alongside families
                from the very beginning—providing clarity, confidence, and continuity of care as children grow and
                develop.
              </p>
              <p>
                With a heart for early support and a proven track record in NDIS service delivery, we're here to help
                you navigate challenges and embrace every opportunity ahead.
              </p>
            </div>

            {/* Values Grid */}
            <div className="mt-8 space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-teal-50 to-orange-50 hover:from-teal-100 hover:to-orange-100 transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-all duration-300 group-hover:scale-110">
                    <value.icon className="h-5 w-5 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-800 mb-1 font-poppins group-hover:text-orange-600 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-inter">{value.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: "400ms" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/about-us-inclusive-classroom.jpg"
                alt="Happy diverse school kids - children in educational setting"
                width={600}
                height={500}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent group-hover:from-teal-900/30 transition-all duration-500"></div>

              {/* Interactive overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg animate-pulse">
                  <Heart className="h-8 w-8 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
