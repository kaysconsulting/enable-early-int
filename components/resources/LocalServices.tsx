"use client"

import { ArrowUpRight, Phone, Users, Heart, Shield } from "lucide-react"
import { m, LazyMotion, domAnimation } from "framer-motion"

// Animation variants
const container = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: delay
    }
  }
});

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10
    }
  }
};

export default function LocalServices() {
  const localServices = [
    {
      icon: Phone,
      title: "Emergency Services",
      description: "Immediate support when you need it most",
      services: [
        {
          name: "Kids Helpline",
          contact: "1800 55 1800",
          description: "24/7 counselling for children and young people",
          icon: Heart,
        },
        { 
          name: "Lifeline", 
          contact: "13 11 14", 
          description: "24/7 crisis support and suicide prevention",
          icon: Heart,
        },
      ],
    },
    {
      icon: Users,
      title: "Local Support Services",
      description: "Community-based assistance and guidance",
      services: [
        {
          name: "Early Childhood Development Program",
          contact: "(03) 9xxx xxxx",
          description: "Government-funded early intervention services",
          icon: Shield,
        },
        {
          name: "Family Support Services",
          contact: "(03) 9xxx xxxx",
          description: "Counselling and support for families",
          icon: Shield,
        },
        {
          name: "Disability Advocacy Service",
          contact: "(03) 9xxx xxxx",
          description: "Advocacy and information for people with disabilities",
          icon: Shield,
        },
      ],
    },
  ]

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
            Local Support
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-poppins">
            Local Services & Support
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect with essential services and support networks in your local community.
          </p>
        </div>

        <LazyMotion features={domAnimation}>
          <m.div 
            className="mx-auto mt-12 max-w-4xl space-y-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            variants={container(0.2)}
          >
            {localServices.map((category, index) => (
              <m.div key={index} variants={item} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                    <category.icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  {category.services.map((service, serviceIndex) => (
                    <m.div 
                      key={serviceIndex}
                      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-teal-100"
                      whileHover={{ y: -2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                            {service.name}
                          </h4>
                          <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-gray-600">
                          {service.description}
                        </p>
                        <div className="mt-4">
                          <a
                            href={`tel:${service.contact.replace(/[^0-9+]/g, '')}`}
                            className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 group-hover:underline"
                          >
                            {service.contact}
                            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0" />
                          </a>
                        </div>
                      </div>
                    </m.div>
                  ))}
                </div>
              </m.div>
            ))}
          </m.div>
        </LazyMotion>
      </div>
    </div>
  )
}
