import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Users, Target, Heart, Zap, Shield, MessageCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About VCBLY | SME Marketing Agency in Tamil Nadu | Our Story",
  description:
    "Learn about VCBLY, a marketing agency dedicated to empowering SMEs across India. Discover our mission, values, and commitment to helping small businesses grow through honest marketing and strategic thinking.",
  keywords: [
    "about VCBLY",
    "SME marketing agency",
    "Tamil Nadu marketing",
    "business growth agency",
    "marketing for small business",
    "digital marketing agency India",
  ],
  openGraph: {
    title: "About VCBLY | SME Marketing Agency in Tamil Nadu",
    description: "Empowering 10,000+ SMEs through honest marketing, strategic thinking, and measurable results.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-yellow-500 text-black border-yellow-500 text-sm md:text-base px-4 py-2">
              About VCBLY
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Built for SMEs,
              <span className="text-yellow-500"> By SME Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              We understand the hustle of small business owners because we've worked with hundreds like you. Our Tamil
              Nadu-rooted approach blends regional insight with global marketing standards.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Our Mission</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering 10,000+ SMEs Across India
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At VCBLY, we believe every small business deserves access to world-class marketing, strategic guidance,
                and digital solutions—without breaking the bank.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our mission is simple: to empower 10,000+ small and medium enterprises through honest marketing,
                strategic thinking, and measurable results that drive real business growth.
              </p>
              <div className="flex items-center space-x-4 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="text-4xl font-bold text-yellow-600">10K+</div>
                <div className="text-gray-700">
                  <div className="font-semibold">SMEs to Transform</div>
                  <div className="text-sm">By 2030</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-black shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg mb-6 leading-relaxed">
                  To be India's most trusted growth partner for SMEs, transforming the way small businesses approach
                  marketing, branding, and digital presence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>Transparent & Honest</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>Results-Driven</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span>Community-First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Our Values</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">What We Stand For</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every strategy we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Transparent Collaboration",
                description:
                  "No hidden costs, clear communication, and honest feedback at every step. You always know where you stand with us.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "ROI-Driven Execution",
                description:
                  "Every strategy is designed to deliver measurable results. We focus on what actually moves the needle for your business.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community-First Growth",
                description:
                  "We believe in growing together with our local business community. Your success is our success.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "SME-First Mindset",
                description:
                  "Everything we do is tailored for small and medium businesses. We understand your challenges because we work with you every day.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Action-Oriented",
                description:
                  "We don't just plan—we execute. Fast turnarounds, agile thinking, and practical solutions that work in the real world.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Results Matter",
                description:
                  "Pretty designs mean nothing without results. We measure success by your growth, not by awards or vanity metrics.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VCBLY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Why VCBLY</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Businesses Choose Us</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another agency. We're your growth partners, committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Local Understanding</h3>
                  <p className="text-gray-600">
                    Tamil Nadu-rooted insights combined with global marketing best practices. We know your market inside
                    out.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable & Flexible</h3>
                  <p className="text-gray-600">
                    Pricing designed for SME budgets. No hefty retainers or long-term commitments—just honest value.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Support</h3>
                  <p className="text-gray-600">
                    From strategy to execution, we handle everything. You focus on running your business; we'll handle
                    the marketing.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">
                    100+ SMEs transformed, 3x average growth, and countless success stories. Our results speak for
                    themselves.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold text-yellow-600 mb-2">100+</div>
                      <div className="text-gray-700 font-semibold">SMEs Transformed</div>
                      <div className="text-sm text-gray-600">Across Tamil Nadu and beyond</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-yellow-600 mb-2">3x</div>
                      <div className="text-gray-700 font-semibold">Average Growth</div>
                      <div className="text-sm text-gray-600">In revenue and customer acquisition</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
                      <div className="text-gray-700 font-semibold">Client Satisfaction</div>
                      <div className="text-sm text-gray-600">Based on post-project surveys</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Join 100+ SMEs who've already started their growth journey with VCBLY. Let's discuss how we can help you
            achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 w-full sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://wa.me/917845864918" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
