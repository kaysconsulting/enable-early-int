"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup here
    console.log("Newsletter signup:", email)
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 bg-gradient-to-r from-teal-800 to-teal-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20">
              <Mail className="h-8 w-8 text-orange-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4 font-poppins">Stay Informed</h2>
          <p className="text-xl text-teal-200 mb-8 font-inter">
            Subscribe to our newsletter for the latest updates, insights, and resources about NDIS services and
            disability support.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </Label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-teal-200 focus:bg-white/20"
                  />
                </div>
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-teal-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
                <CheckCircle className="h-6 w-6" />
                <span className="font-semibold">Successfully subscribed!</span>
              </div>
              <p className="text-teal-200">Thank you for subscribing to our newsletter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
