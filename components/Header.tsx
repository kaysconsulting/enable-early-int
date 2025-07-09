"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { services } from "@/data/services"
import { usePathname } from "next/navigation"
import { Phone, Mail, X, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && window.location.hash === href.substring(1)
    }
    return pathname === href || pathname.startsWith(href + "/")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-azure-800 text-white py-2 hidden md:block">
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
                    alt="Enable Early Intervention Logo"
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
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 font-medium transition-all duration-200 rounded-lg hover:bg-orange-50 group ${
                      isActive(item.href) ? "text-orange-500 bg-orange-50" : "text-azure-700 hover:text-orange-500"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-200 transform -translate-x-1/2 group-hover:w-3/4 ${
                        isActive(item.href) ? "w-3/4" : ""
                      }`}
                    />
                  </Link>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                asChild
                variant="outline"
                className="border-azure-600 text-azure-600 hover:bg-azure-50 bg-transparent font-medium"
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
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="relative z-50"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-azure-700 transform transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-azure-700 transform transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "top-3"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-azure-700 transform transition-all duration-300 ${
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
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="px-4">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-azure-700 hover:bg-gray-50 rounded-md"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 ${isServicesOpen ? 'transform rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Services Dropdown */}
                      {isServicesOpen && (
                        <div className="mt-2 space-y-1 pl-6">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.id}`}
                              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-azure-700 hover:bg-gray-50 rounded-md"
                            >
                              {service.title}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="block px-3 py-2 text-base font-medium text-azure-600 hover:text-azure-700 hover:bg-gray-50 rounded-md"
                          >
                            View all services →
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 text-base font-medium ${
                        pathname === item.href
                          ? 'text-azure-700 bg-azure-50'
                          : 'text-gray-700 hover:text-azure-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 py-3 space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-azure-600 text-azure-600 hover:bg-azure-50 bg-transparent"
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
