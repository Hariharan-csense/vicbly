"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "917845864918"

  return (
    <>
      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen ? (
          <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-fade-in-up">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Chat with VCBLY</h4>
                  <p className="text-xs text-white/80">We typically reply instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <p className="text-sm text-gray-700 mb-2">👋 Hi there!</p>
                <p className="text-sm text-gray-700">
                  How can we help your business grow today? Click below to start chatting on WhatsApp.
                </p>
              </div>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Conversation
                </Button>
              </a>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  )
}
