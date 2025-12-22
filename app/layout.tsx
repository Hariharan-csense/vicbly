import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ConsultationPopup from "@/components/consultation-popup"
import WhatsAppChat from "@/components/whatsapp-chat"
import Web3FormsScript from "@/components/web3forms-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VCBLY - Stand Out & Move Forward | Marketing Agency for SMEs",
  description:
    "VCBLY helps SMEs transform with result-driven marketing, creative branding, and digital solutions. Get expert marketing, branding, web development, and business strategy services in Tamil Nadu.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ConsultationPopup />
        <WhatsAppChat />
        <Web3FormsScript />
      </body>
    </html>
  )
}
