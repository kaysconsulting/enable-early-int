"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
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
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl text-teal-800 font-poppins">Request a Consultation</CardTitle>
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

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
          >
            Request Consultation
          </Button>

          <p className="text-xs text-gray-500 text-center font-inter">
            By submitting this form, you agree to our privacy policy. We'll only use your information to contact you
            about our services.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
