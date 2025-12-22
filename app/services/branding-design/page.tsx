import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  CheckCircle,
  ArrowRight,
  Palette,
  Package,
  FileText,
  MessageSquare,
  Sparkles,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Branding & Design Services | VCBLY - Craft Your Unique Identity",
  description:
    "Create a memorable brand identity that stands out. Logo design, brand guidelines, packaging, and visual storytelling for SMEs. Build trust and recognition.",
  keywords: [
    "brand identity design",
    "logo design for SMEs",
    "packaging design",
    "brand guidelines",
    "visual identity",
    "brand storytelling",
    "graphic design services",
    "branding agency India",
    "brand positioning",
    "corporate identity",
  ],
}

export default function BrandingDesignPage() {
  const offerings = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Logo & Brand Identity",
      description: "Unique, memorable logos with complete color systems, typography, and visual language.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Packaging Design",
      description: "Eye-catching product packaging that protects, attracts, and communicates your brand values.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Marketing Collateral",
      description: "Brochures, flyers, business cards, and posters designed to leave a lasting impression.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Visual Style Guide",
      description: "Comprehensive brand guidelines covering fonts, colors, icons, imagery, and tone.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Brand Messaging",
      description: "Craft compelling taglines, value propositions, and brand stories that resonate.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Brand Refresh",
      description: "Modernize outdated branding while maintaining brand equity and customer recognition.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Brand Discovery",
      description: "Deep dive into your business, values, audience, and competitors.",
    },
    {
      step: "2",
      title: "Concept Development",
      description: "Create multiple design directions with mood boards and initial concepts.",
    },
    {
      step: "3",
      title: "Design & Refinement",
      description: "Develop chosen concept with iterations based on your feedback.",
    },
    {
      step: "4",
      title: "Delivery & Guidelines",
      description: "Final files in all formats plus comprehensive brand guidelines.",
    },
  ]

  const industries = [
    "Food & Beverage",
    "Fashion & Lifestyle",
    "Technology",
    "Healthcare",
    "Education",
    "Real Estate",
    "Beauty & Wellness",
    "Hospitality",
  ]

  const faqs = [
    {
      question: "How long does the branding process take?",
      answer:
        "A complete brand identity typically takes 3-4 weeks from kickoff to final delivery. This includes discovery, concepts, revisions, and final file preparation. Rush projects can be accommodated with expedited timelines.",
    },
    {
      question: "What do I receive in the final deliverables?",
      answer:
        "You'll get your logo in all formats (AI, EPS, PNG, SVG, JPG), color variations, brand style guide PDF, font files, icon sets, and editable templates. Everything you need to implement your new brand consistently.",
    },
    {
      question: "Can you help with brand naming?",
      answer:
        "Yes! We offer brand naming services including brainstorming, domain availability checks, and trademark screening. We'll develop names that are memorable, meaningful, and legally available.",
    },
    {
      question: "Do you redesign existing brands?",
      answer:
        "Absolutely. We specialize in brand refreshes that modernize your look while respecting your brand heritage. We'll preserve what works and update what doesn't to keep you relevant and competitive.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Branding & Design</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Craft a Brand That's Unique, Clear, and Memorable
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your brand is more than a logo—it's the story people remember. We create brand identities that build
                trust, inspire loyalty, and set you apart from competitors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full sm:w-auto"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/917845864918?text=Hi%2C%20I%27m%20interested%20in%20your%20Branding%20%26%20Design%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 font-semibold w-full sm:w-auto bg-transparent"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/brand-design-logo-creation-color-palette-mockup.jpg"
                  alt="Branding & Design Services"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-6 h-6" />
                  <span className="text-3xl font-bold">50+</span>
                </div>
                <p className="text-sm font-semibold">Brands Created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Brand Identity That Builds Trust and Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In crowded markets, a strong brand identity is your competitive advantage. It's what makes customers
              choose you over alternatives, remember you after a single interaction, and recommend you to others.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our branding and design services help SMEs establish professional, cohesive identities that communicate
              value, build credibility, and create emotional connections. Whether you're launching a new venture or
              refreshing an existing brand, we create visual identities that work across every touchpoint.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">5+</div>
                  <p className="text-gray-700 font-semibold">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
                  <p className="text-gray-700 font-semibold">Brands Created</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
                  <p className="text-gray-700 font-semibold">Client Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Our Offerings</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Brand Identity Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From logo design to comprehensive brand guidelines, we create cohesive identities that resonate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VCBLY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Design That Works for Your Business</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">SME-Focused Approach</h3>
                    <p className="text-gray-600">
                      We understand the unique challenges SMEs face. Our branding is strategic, practical, and designed
                      to scale with your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Research-Driven Design</h3>
                    <p className="text-gray-600">
                      Every design decision is informed by market research, competitor analysis, and audience
                      insights—not just aesthetics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Unlimited Revisions</h3>
                    <p className="text-gray-600">
                      We work iteratively until you're 100% satisfied. Your brand needs to be perfect, and we're
                      committed to getting it right.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Future-Proof Designs</h3>
                    <p className="text-gray-600">
                      We create timeless brands that work across all mediums—print, digital, packaging, and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/designer-workspace-brand-identity-sketches-creativ.jpg"
                alt="Why Choose VCBLY"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From Discovery to Delivery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collaborative, transparent process that ensures your brand truly represents your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card
                key={index}
                className="relative border-2 border-yellow-200 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Industries We Serve</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience Across Diverse Markets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've created compelling brand identities for businesses in various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-gray-800">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <Palette className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Award-Winning Designs</h3>
              <p className="text-gray-300">
                Our work has been recognized for excellence in creativity, execution, and business impact.
              </p>
            </div>
            <div>
              <FileText className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Complete Documentation</h3>
              <p className="text-gray-300">
                Every project includes detailed brand guidelines ensuring consistent implementation.
              </p>
            </div>
            <div>
              <MessageCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Post-Launch Support</h3>
              <p className="text-gray-300">
                We're here to help with implementation questions, file requests, and brand consistency guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-gray-100">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Ready to Build a Memorable Brand?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Let's create a brand identity that sets you apart and drives business growth. Start with a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-100 text-black font-semibold border-2 border-black w-full sm:w-auto"
              >
                Get Free Brand Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://wa.me/917845864918?text=Hi%2C%20I%27d%20like%20to%20discuss%20branding%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-black hover:bg-gray-900 text-white font-semibold border-2 border-black w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
          <p className="mt-6 text-black/70 text-sm">📞 Call us: +91 78458 64918 | ✉️ Email: vcblycreations@gmail.com</p>
        </div>
      </section>
    </div>
  )
}
