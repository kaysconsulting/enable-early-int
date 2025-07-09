import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#085176] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Image
              src="/logo-footer.png"
              alt="Enable Early Intervention Logo"
              width={280}
              height={120}
              className="h-20 w-auto mb-6"
            />
            <p className="text-slate-100 mb-6 max-w-md font-inter leading-relaxed">
              Empowering individuals and families through every stage of life with tailored, compassionate, and expert
              support. Guiding brighter futures with strength for every step.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-slate-100">(03) 9xxx xxxx</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-slate-100">info@enableearlyintervention.com.au</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-8 w-8 items-start justify-center rounded-lg bg-white/10 pt-2">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-slate-100">
                  123 Main Street
                  <br />
                  Melbourne, VIC 3000
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-slate-100 hover:text-white transition-colors font-inter text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#ndis"
                  className="text-slate-100 hover:text-white transition-colors font-inter text-sm"
                >
                  NDIS Support
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-100 hover:text-white transition-colors font-inter text-sm"
                >
                  About Brenda
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-slate-100 hover:text-white transition-colors font-inter text-sm"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-100 hover:text-white transition-colors font-inter text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins text-white">Our Services</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-slate-100 font-inter text-sm">Early Childhood Intervention</li>
              <li className="text-slate-100 font-inter text-sm">Support Coordination</li>
              <li className="text-slate-100 font-inter text-sm">Specialised Supported Employment</li>
              <li className="text-slate-100 font-inter text-sm">Community Participation</li>
              <li className="text-slate-100 font-inter text-sm">Group & Centre Activities</li>
              <li className="text-slate-100 font-inter text-sm">Access & Maintain Employment</li>
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-3 font-poppins text-white">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm font-inter">
                &copy; {new Date().getFullYear()} Enable Early Intervention. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs font-inter mt-1">
                Designed by Kays Software
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-white transition-colors font-inter text-sm"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-300 hover:text-white text-sm transition-colors font-inter">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
