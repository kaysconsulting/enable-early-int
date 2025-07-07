import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Hand, Users, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: MessageCircle,
      title: "Speech Therapy",
      description:
        "Comprehensive speech and language therapy to help children communicate effectively and confidently.",
      features: [
        "Articulation and phonology",
        "Language development",
        "Social communication skills",
        "Feeding and swallowing support",
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Hand,
      title: "Occupational Therapy",
      description: "Supporting children to develop the skills needed for daily activities and participation in life.",
      features: [
        "Fine and gross motor skills",
        "Sensory processing",
        "Self-care activities",
        "School readiness skills",
      ],
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Support Coordination",
      description: "Helping families navigate services and supports to achieve their NDIS goals.",
      features: [
        "NDIS plan implementation",
        "Service provider connections",
        "Goal setting and review",
        "Advocacy and support",
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Calendar,
      title: "Early Intervention",
      description: "Specialized programs for infants and toddlers to promote optimal development.",
      features: ["Developmental assessments", "Family coaching", "Play-based interventions", "Transition planning"],
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-poppins text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 font-inter leading-relaxed">
            Comprehensive therapy services tailored to meet each child's unique needs and goals
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden"
            >
              <CardHeader className="relative pb-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${
                      service.color === "orange" ? "from-orange-100 to-orange-200" : "from-teal-100 to-teal-200"
                    } shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <service.icon
                      className={`h-8 w-8 ${service.color === "orange" ? "text-orange-500" : "text-teal-600"}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-teal-800 font-poppins font-bold">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-gray-600 mt-4 font-inter text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 font-inter">
                      <div
                        className={`h-2 w-2 rounded-full mr-4 ${
                          service.color === "orange" ? "bg-orange-500" : "bg-teal-500"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className={`group/btn w-full justify-between ${
                    service.color === "orange"
                      ? "text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                      : "text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                  } font-medium`}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-3xl p-8 shadow-lg">
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
              <Link href="#contact">Get Professional Assessment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
