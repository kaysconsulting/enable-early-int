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
              {[
                { href: "/services", label: "Our Services" },
                { href: "/#ndis", label: "NDIS Support" },
                { href: "/about", label: "About Brenda" },
                { href: "/resources", label: "Resources" },
                { href: "/contact", label: "Contact Us" },
              ].map((link, index) => (
                <li key={index} className="group">
                  <Link
                    href={link.href}
                    className="relative text-slate-100 hover:text-white transition-all duration-300 font-inter text-sm inline-flex items-center group"
                  >
                    <span className="absolute -left-4 opacity-0 group-hover:opacity-100 group-hover:-left-5 transition-all duration-300">→</span>
                    <span className="relative group-hover:translate-x-2 transition-transform duration-300">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins text-white">Our Services</h3>
            <ul className="space-y-3 mb-6">
              {[
                { href: "/services/early-childhood-intervention", label: "Early Childhood Intervention" },
                { href: "/services/support-coordination", label: "Support Coordination" },
                { href: "/services/specialised-supported-employment", label: "Specialised Supported Employment" },
                { href: "/services/community-participation", label: "Community Participation" },
                { href: "/services/group-centre-activities", label: "Group & Centre Activities" },
                { href: "/services/access-maintain-employment", label: "Access & Maintain Employment" },
              ].map((service, index) => (
                <li key={index} className="group">
                  <Link 
                    href={service.href} 
                    className="relative text-slate-100 hover:text-white transition-all duration-300 font-inter text-sm block py-1 pl-2 -ml-2 rounded hover:bg-white/5 group"
                  >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-orange-400 rounded-r transition-all duration-300 group-hover:h-4"></div>
                    <span className="relative group-hover:translate-x-2 transition-transform duration-300">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-3 font-poppins text-white">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-orange-500 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-white group-hover:scale-125 transition-transform duration-300" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap transition-all duration-300">
                      {social.label}
                    </span>
                  </a>
                ))}
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
              <p className="text-slate-300 text-sm font-inter mt-2">
                Designed by{' '}
                <a 
                  href="https://kayssoftware.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative text-white group"
                >
                  <span className="relative inline-block">
                    Kays Software
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="relative group">
                <Link
                  href="/privacy-policy"
                  className="relative text-slate-300 hover:text-white transition-all duration-300 font-inter text-sm px-3 py-1 rounded overflow-hidden"
                >
                  <span className="relative z-10">Privacy Policy</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 rounded -z-0"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
              <div className="relative group">
                <Link 
                  href="/terms-of-service" 
                  className="relative text-slate-300 hover:text-white transition-all duration-300 font-inter text-sm px-3 py-1 rounded overflow-hidden"
                >
                  <span className="relative z-10">Terms of Service</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 rounded -z-0"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
