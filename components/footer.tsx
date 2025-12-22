import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="VCBLY Logo"
              width={120}
              height={40}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Empowering SMEs across Tamil Nadu with result-driven marketing solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>104, Osian Chloroplaza, Porur, Chennai - 116</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-784586418</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@vcbly.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-yellow-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-yellow-500 transition-colors font-semibold">
                  View All Services
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-yellow-500 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/branding-design" className="hover:text-yellow-500 transition-colors">
                  Branding & Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-tech" className="hover:text-yellow-500 transition-colors">
                  Web & Tech
                </Link>
              </li>
              <li>
                <Link href="/services/business-strategy" className="hover:text-yellow-500 transition-colors">
                  Business Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-solutions" className="hover:text-yellow-500 transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/video-content" className="hover:text-yellow-500 transition-colors">
                  Video & Content Production
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-yellow-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-yellow-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 VCBLY. All rights reserved. Made with ❤️ in Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  )
}
