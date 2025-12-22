"use client"

import { useState, useEffect } from "react"
import { X, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ConsultationPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const popupShown = localStorage.getItem("consultationPopupShown")

    if (popupShown === "true") {
      setHasShown(true)
      return
    }

    // Show popup after 10 seconds of page load or 50% scroll
    const timer = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true)
        localStorage.setItem("consultationPopupShown", "true")
        setHasShown(true)
      }
    }, 10000)

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercent > 50 && !hasShown) {
        setShowPopup(true)
        localStorage.setItem("consultationPopupShown", "true")
        setHasShown(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [hasShown])

  if (!showPopup || hasShown === null) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden animate-fade-in-up">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 transition-colors duration-300 hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 text-black">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Free Consultation</h3>
              <p className="text-black/80">For Your Business</p>
            </div>
          </div>
          <p className="text-lg">
            Get expert advice and discover growth opportunities for your business. No strings attached!
          </p>
        </div>

        <div className="p-6">
          <form className="space-y-4">
            <Input
              placeholder="Business Name"
              className="border-gray-200 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300"
            />
            <Input
              placeholder="Email Address"
              type="email"
              className="border-gray-200 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300"
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              className="border-gray-200 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300"
            />
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg py-3 transition-all duration-300 hover:scale-105">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            No spam, just valuable insights for your business growth.
          </p>
        </div>
      </div>
    </div>
  )
}
