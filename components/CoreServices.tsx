import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Briefcase, MapPin, UsersIcon, Building, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function CoreServices() {
  const services = [
    {
      icon: MessageCircle,
      title: "Early Childhood Intervention",
      slug: "early-childhood-intervention",
      description:
        "Holistic, family-focused support for children with developmental delays or disabilities—delivered early to make a lasting impact.",
      color: "orange",
      image: "/early-childhood-intervention.jpg",
      imageAlt:
        "Young child in specialized therapeutic chair engaging with colorful developmental toys while receiving support from therapist",
    },
    {
      icon: Users,
      title: "Support Coordination",
      slug: "support-coordination",
      description:
        "We simplify the NDIS, helping you connect with the right providers, manage your plan, and achieve your goals.",
      color: "teal",
      image: "/support-coordination.jpg",
      imageAlt:
        "Loving moment between mother and child in wheelchair, both smiling warmly, representing family-centered support",
    },
    {
      icon: Briefcase,
      title: "Specialised Supported Employment",
      slug: "specialised-supported-employment",
      description: "Meaningful employment pathways tailored to your strengths and ambitions, with on-the-job support.",
      color: "orange",
      image: "/employment-services.jpg",
      imageAlt: "Professional woman in wheelchair working confidently with colleagues in modern office environment",
    },
    {
      icon: MapPin,
      title: "Community Participation",
      slug: "community-participation",
      description:
        "Encouraging social engagement, skill-building, and confidence through tailored activities in your local area.",
      color: "teal",
      image: "/community-participation.jpg",
      imageAlt: "Diverse group including wheelchair users enjoying outdoor recreational activities in park setting",
    },
    {
      icon: UsersIcon,
      title: "Group & Centre-Based Activities",
      slug: "group-centre-activities",
      description: "Safe, fun, and engaging group programs that foster friendships, creativity, and life skills.",
      color: "orange",
      image: "/group-activities.jpg",
      imageAlt: "Group of people with intellectual disabilities participating in yoga session, all smiling and engaged",
    },
    {
      icon: Building,
      title: "Access and Maintain Employment",
      slug: "access-maintain-employment",
      description:
        "Practical support to gain, keep, or return to work—including job-readiness training and workplace access assistance.",
      color: "teal",
      image: "/access-employment.jpg",
      imageAlt:
        "Young woman with Down syndrome working confidently in grocery store, demonstrating successful employment inclusion",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl font-poppins animate-fadeInUp">
            Our Core Services
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 font-inter animate-fadeInUp">
            Comprehensive support services designed to empower individuals and families at every stage of life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <service.icon
                    className={`h-6 w-6 transition-colors duration-300 ${
                      service.color === "orange"
                        ? "text-orange-500 group-hover:text-orange-600"
                        : "text-teal-600 group-hover:text-teal-700"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                {/* Hover overlay with arrow */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <ArrowRight className="h-6 w-6 text-teal-800 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4 relative">
                <CardTitle className="text-xl text-teal-800 font-poppins font-bold group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-inter text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <Button
                  asChild
                  variant="ghost"
                  className={`w-full justify-between transition-all duration-300 transform hover:scale-105 ${
                    service.color === "orange"
                      ? "text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                      : "text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                  } font-medium group/btn`}
                >
                  <Link href={`/services/${service.slug}`} className="flex items-center justify-between w-full">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
