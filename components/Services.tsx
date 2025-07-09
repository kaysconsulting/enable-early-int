import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Briefcase, MapPin, Users as UsersIcon, Building, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: MessageCircle,
      title: "Early Childhood Intervention",
      description:
        "Holistic, family-focused support for children with developmental delays or disabilities—delivered early to make a lasting impact.",
      features: [
        "Developmental assessments",
        "Therapy services",
        "Family coaching & support",
        "NDIS-approved services",
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
      slug: "early-childhood-intervention",
    },
    {
      icon: Users,
      title: "Support Coordination",
      description:
        "We simplify the NDIS, helping you connect with the right providers, manage your plan, and achieve your goals.",
      features: [
        "NDIS plan management",
        "Provider connections",
        "Goal setting and review",
        "Advocacy and support",
      ],
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      slug: "support-coordination",
    },
    {
      icon: Briefcase,
      title: "Specialised Supported Employment",
      description: "Meaningful employment pathways tailored to your strengths and ambitions, with on-the-job support.",
      features: [
        "Workplace readiness",
        "Tailored job matching",
        "On-the-job coaching",
        "Skills development",
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
      slug: "specialised-supported-employment",
    },
    {
      icon: MapPin,
      title: "Community Participation",
      description:
        "Encouraging social engagement, skill-building, and confidence through tailored activities in your local area.",
      features: [
        "Social & recreational outings",
        "Life skills development",
        "Group participation",
        "Cultural & creative exploration",
      ],
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      slug: "community-participation",
    },
    {
      icon: UsersIcon,
      title: "Group & Centre-Based Activities",
      description: "Safe, fun, and engaging group programs that foster friendships, creativity, and life skills.",
      features: [
        "Social connection",
        "Life skills development",
        "Creative expression",
        "Wellbeing & recreation",
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
      slug: "group-centre-activities",
    },
    {
      icon: Building,
      title: "Access and Maintain Employment",
      description:
        "Practical support to gain, keep, or return to work—including job-readiness training and workplace access assistance.",
      features: [
        "Job readiness training",
        "Workplace access support",
        "Employment pathway planning",
        "Transition support",
      ],
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      slug: "access-maintain-employment",
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
                      ? "text-azure-700 hover:text-azure-800 hover:bg-azure-50"
                      : "text-azure-700 hover:text-azure-800 hover:bg-azure-50"
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
