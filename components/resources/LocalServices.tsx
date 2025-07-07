import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Phone, MapPin } from "lucide-react"

export default function LocalServices() {
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
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-teal-800 mb-8 text-center font-poppins">Local Services & Support</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {localServices.map((category, index) => (
            <Card key={index} className="bg-teal-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                    <category.icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-teal-800 font-poppins">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-teal-800 font-poppins">{service.name}</h4>
                        <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 font-inter">{service.description}</p>
                      <p className="text-sm font-medium text-teal-600">{service.contact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
