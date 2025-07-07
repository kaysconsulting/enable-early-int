import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, FileText, CheckSquare, Phone, MapPin } from "lucide-react"

export default function Resources() {
  const downloadableResources = [
    {
      icon: FileText,
      title: "New Client Registration Form",
      description: "Complete this form before your first appointment to help us understand your child's needs.",
      type: "PDF Form",
    },
    {
      icon: CheckSquare,
      title: "Developmental Milestone Checklist",
      description: "Track your child's development with our comprehensive milestone checklist (0-5 years).",
      type: "PDF Checklist",
    },
    {
      icon: FileText,
      title: "NDIS Preparation Guide",
      description: "Everything you need to know to prepare for your NDIS planning meeting.",
      type: "PDF Guide",
    },
    {
      icon: CheckSquare,
      title: "Home Activity Ideas",
      description: "Fun, therapeutic activities you can do at home to support your child's development.",
      type: "PDF Resource",
    },
  ]

  const localServices = [
    {
      icon: Phone,
      title: "Emergency Services",
      services: [
        {
          name: "Kids Helpline",
          contact: "1800 55 1800",
          description: "24/7 counselling for children and young people",
        },
        { name: "Lifeline", contact: "13 11 14", description: "24/7 crisis support and suicide prevention" },
      ],
    },
    {
      icon: MapPin,
      title: "Local Support Services",
      services: [
        {
          name: "Early Childhood Development Program",
          contact: "(03) 9xxx xxxx",
          description: "Government-funded early intervention services",
        },
        {
          name: "Family Support Services",
          contact: "(03) 9xxx xxxx",
          description: "Counselling and support for families",
        },
        {
          name: "Disability Advocacy Service",
          contact: "(03) 9xxx xxxx",
          description: "Advocacy and information for people with disabilities",
        },
      ],
    },
  ]

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">Resources & Support</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Access helpful resources, forms, and information to support your child's development journey.
          </p>
        </div>

        {/* Downloadable Resources */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-teal-800 mb-8 text-center">Downloadable Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableResources.map((resource, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-orange-200 transition-colors duration-200"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                        <resource.icon className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-teal-800">{resource.title}</CardTitle>
                        <span className="text-xs text-orange-600 font-medium">{resource.type}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download {resource.type}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Local Services */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-teal-800 mb-8 text-center">Local Services & Support</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {localServices.map((category, index) => (
              <Card key={index} className="bg-teal-50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                      <category.icon className="h-5 w-5 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl text-teal-800">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-teal-800">{service.name}</h4>
                          <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                        <p className="text-sm font-medium text-teal-600">{service.contact}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-teal-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Need More Information?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help you access the resources and support you
              need.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Contact Our Team</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
