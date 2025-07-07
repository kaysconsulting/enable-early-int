"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && window.location.hash === href.substring(1)
    }
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-800 text-white py-2 hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span>(03) 9xxx xxxx</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span>info@enableearlyintervention.com.au</span>
              </div>
            </div>
            <div className="text-orange-400 font-medium">Free 15-min consultation available</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/logo.png"
                    alt="Enable Us Logo"
                    width={280}
                    height={80}
                    className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium transition-all duration-200 rounded-lg hover:bg-orange-50 group ${
                    isActive(item.href) ? "text-orange-500 bg-orange-50" : "text-teal-700 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ${
                      isActive(item.href) ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                asChild
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent font-medium"
              >
                <Link href="tel:(03)9xxxxxxx">Call Now</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="relative z-50"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-teal-700 transform transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-teal-700 transform transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "top-3"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-teal-700 transform transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 top-3" : "top-5"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 font-medium rounded-lg transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-orange-500 bg-orange-50"
                      : "text-teal-700 hover:text-orange-500 hover:bg-orange-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3 space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                >
                  <Link href="tel:(03)9xxxxxxx" onClick={() => setIsMenuOpen(false)}>
                    Call Now
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
