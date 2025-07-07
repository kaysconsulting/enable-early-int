import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NDISInfo() {
  const eligibilityCriteria = [
    "Child is under 7 years old",
    "Has a permanent disability or developmental delay",
    "Lives in Australia and is an Australian citizen, permanent resident, or holds a Protected Special Category Visa",
    "Requires early intervention support to reduce future support needs",
  ]

  const howWeHelp = [
    {
      icon: FileText,
      title: "NDIS Applications",
      description: "We assist families with the NDIS application process and provide supporting documentation.",
    },
    {
      icon: Users,
      title: "Plan Implementation",
      description: "Our team helps implement your NDIS plan and connect you with appropriate service providers.",
    },
    {
      icon: CheckCircle,
      title: "Goal Achievement",
      description: "We work with you to set meaningful goals and track progress throughout your NDIS journey.",
    },
    {
      icon: Phone,
      title: "Ongoing Support",
      description: "Continuous support and advocacy to ensure you get the most from your NDIS plan.",
    },
  ]

  return (
    <section id="ndis" className="py-16 bg-teal-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">NDIS Support & Information</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            The National Disability Insurance Scheme (NDIS) provides support for people with permanent and significant
            disability. We're here to help you navigate this important resource.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Eligibility Criteria */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-teal-800">
                Early Childhood Early Intervention (ECEI) Eligibility
              </CardTitle>
              <CardDescription>
                To access NDIS Early Childhood supports, your child must meet these criteria:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Important:</strong> Even if your child doesn't meet NDIS eligibility, we can still provide
                  private therapy services and help connect you with other supports.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How We Help */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-teal-800">How We Support NDIS Participants</h3>
            {howWeHelp.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 flex-shrink-0">
                  <item.icon className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Ready to Learn More About NDIS?</h3>
            <p className="text-gray-600 mb-6">
              Contact us for a free consultation to discuss your child's needs and NDIS options.
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="#contact">Book Free NDIS Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
