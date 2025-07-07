"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    serviceInterest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this to your backend or email service
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-16 bg-teal-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Ready to take the next step? Contact us to schedule a consultation or learn more about our services.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-teal-800">Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <Phone className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-teal-800">Phone</p>
                    <p className="text-gray-600">(03) 9xxx xxxx</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <Mail className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-teal-800">Email</p>
                    <p className="text-gray-600">info@enableearlyintervention.com.au</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <MapPin className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-teal-800">Address</p>
                    <p className="text-gray-600">
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
                    <p className="font-medium text-teal-800">Hours</p>
                    <p className="text-gray-600">
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
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Free Initial Consultation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We offer a complimentary 15-minute phone consultation to discuss your child's needs and how we can
                  help. No obligation - just friendly, professional advice.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Discuss your concerns and goals</li>
                  <li>• Learn about our services</li>
                  <li>• Understand NDIS options</li>
                  <li>• Get answers to your questions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-teal-800">Request a Consultation</CardTitle>
              <CardDescription>Fill out this form and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Parent/Guardian Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childAge">Child's Age</Label>
                    <Select onValueChange={(value) => handleInputChange("childAge", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-12months">0-12 months</SelectItem>
                        <SelectItem value="1-2years">1-2 years</SelectItem>
                        <SelectItem value="2-3years">2-3 years</SelectItem>
                        <SelectItem value="3-4years">3-4 years</SelectItem>
                        <SelectItem value="4-5years">4-5 years</SelectItem>
                        <SelectItem value="5-6years">5-6 years</SelectItem>
                        <SelectItem value="6+years">6+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceInterest">Service of Interest</Label>
                  <Select onValueChange={(value) => handleInputChange("serviceInterest", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="speech-therapy">Speech Therapy</SelectItem>
                      <SelectItem value="occupational-therapy">Occupational Therapy</SelectItem>
                      <SelectItem value="support-coordination">Support Coordination</SelectItem>
                      <SelectItem value="early-intervention">Early Intervention</SelectItem>
                      <SelectItem value="ndis-support">NDIS Support</SelectItem>
                      <SelectItem value="assessment">Assessment</SelectItem>
                      <SelectItem value="not-sure">Not sure - need guidance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your child's needs</Label>
                  <Textarea
                    id="message"
                    placeholder="Please share any concerns, goals, or questions you have about your child's development..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Request Consultation
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll only use your information to contact
                  you about our services.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
