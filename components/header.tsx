"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isServicesOpen])

  const services = [
    { name: "All Services", href: "/services" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Branding & Design", href: "/services/branding-design" },
    { name: "Web & Tech", href: "/services/web-tech" },
    { name: "Business Strategy & Consulting", href: "/services/business-strategy" },
    { name: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
    { name: "Video & Content Production", href: "/services/video-content" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="VCBLY Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="transition-colors hover:text-yellow-500 text-gray-700 font-semibold">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-yellow-500 text-gray-700 font-semibold">
              About
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 transition-colors hover:text-yellow-500 text-gray-700 font-semibold"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {services.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors ${
                        index === 0 ? "border-b border-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/blog" className="transition-colors hover:text-yellow-500 text-gray-700 font-semibold">
              Blog
            </Link>
            <Link href="/contact" className="transition-colors hover:text-yellow-500 text-gray-700 font-semibold">
              Contact
            </Link>
            <Link href="/contact">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Free Consultation</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 transition-colors hover:text-yellow-500 text-gray-700 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 transition-colors hover:text-yellow-500 text-gray-700 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 transition-colors hover:text-yellow-500 text-gray-700 font-semibold"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-6 space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-3 py-2 text-sm hover:text-yellow-500 ${
                        index === 0 ? "text-gray-700 font-semibold" : "text-gray-600"
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsServicesOpen(false)
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="block px-3 py-2 transition-colors hover:text-yellow-500 text-gray-700 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 transition-colors hover:text-yellow-500 text-gray-700 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Link href="/contact">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
