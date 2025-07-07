import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-teal-800 font-poppins">Contact Information</CardTitle>
          <CardDescription>Reach out to us through any of these channels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
              <Phone className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="font-medium text-teal-800 font-poppins">Phone</p>
              <p className="text-gray-600 font-inter">(03) 9xxx xxxx</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
              <Mail className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="font-medium text-teal-800 font-poppins">Email</p>
              <p className="text-gray-600 font-inter">info@enableearlyintervention.com.au</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
              <MapPin className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="font-medium text-teal-800 font-poppins">Address</p>
              <p className="text-gray-600 font-inter">
                123 Main Street
                <br />
                Melbourne, VIC 3000
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
              <Clock className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="font-medium text-teal-800 font-poppins">Hours</p>
              <p className="text-gray-600 font-inter">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50 to-teal-50">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-teal-800 mb-3 font-poppins">Free Initial Consultation</h3>
          <p className="text-gray-600 text-sm mb-4 font-inter">
            We offer a complimentary 15-minute phone consultation to discuss your child's needs and how we can help. No
            obligation - just friendly, professional advice.
          </p>
          <ul className="text-sm text-gray-600 space-y-1 font-inter">
            <li>• Discuss your concerns and goals</li>
            <li>• Learn about our services</li>
            <li>• Understand NDIS options</li>
            <li>• Get answers to your questions</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
