import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Users, Target, ShoppingBag, Video, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Digital Marketing, Branding, Web & Tech Solutions | VCBLY",
  description:
    "VCBLY offers comprehensive digital marketing, branding & design, web development, business strategy, e-commerce solutions, and video production services tailored for SMEs. Explore our services to grow your business.",
  keywords: [
    "digital marketing services",
    "branding and design agency",
    "web development solutions",
    "business strategy consulting",
    "e-commerce solutions",
    "video content production",
    "SME marketing services",
    "business growth solutions",
  ],
  openGraph: {
    title: "Our Services | Digital Marketing, Branding, Web & Tech Solutions | VCBLY",
    description:
      "Comprehensive digital solutions for SMEs. From marketing to design, tech to strategy - everything your business needs to grow.",
    type: "website",
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      slug: "digital-marketing",
      description: "Grow your business with ROI-driven campaigns.",
      summary:
        "Drive real results with data-driven digital marketing strategies. We specialize in social media advertising, local SEO, WhatsApp marketing, and performance campaigns designed specifically for SMEs.",
      features: [
        "Social media ads across Meta, Instagram & Google",
        "Local SEO & Google Business optimization",
        "WhatsApp & Email marketing strategies",
        "Festival & influencer campaign planning",
      ],
      image: "/digital-marketing-dashboard-analytics-social-media.jpg",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Branding & Design",
      slug: "branding-design",
      description: "Craft a brand that's unique, clear, and memorable.",
      summary:
        "Build a brand identity that stands out in the market. From logo design to complete brand systems, we create visual identities that resonate with your target audience and drive business growth.",
      features: [
        "Logo, brand identity & color system creation",
        "Packaging, brochure & poster design",
        "Visual style guide (fonts, icons, tone)",
        "Brand messaging & storytelling support",
      ],
      image: "/brand-design-logo-creation-color-palette-mockup.jpg",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Web & Tech",
      slug: "web-tech",
      description: "Fast, mobile-first websites that drive results.",
      summary:
        "Create a powerful online presence with modern, responsive websites. We build custom business websites, e-commerce stores, and landing pages that convert visitors into customers.",
      features: [
        "Custom business websites & landing pages",
        "Shopify & WooCommerce ecommerce stores",
        "Lead forms, chat widgets & tracking integration",
        "Hosting, domain & tech support setup",
      ],
      image: "/web-development-laptop-responsive-design-coding.jpg",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Strategy & Consulting",
      slug: "business-strategy",
      description: "Clarity + Planning = Sustainable Growth.",
      summary:
        "Get expert guidance to scale your business strategically. We provide actionable insights, market analysis, and growth strategies tailored specifically for SMEs looking to expand.",
      features: [
        "Go-to-market & marketing funnel strategy",
        "Business positioning & competitor analysis",
        "SME-specific growth consulting",
        "Audit of existing marketing systems",
      ],
      image: "/business-strategy-planning-charts-analysis-board.jpg",
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "E-commerce Solutions",
      slug: "ecommerce-solutions",
      description: "Sell smart on Amazon, Flipkart & other platforms.",
      summary:
        "Maximize your online sales with expert e-commerce management. From marketplace onboarding to product optimization and PPC campaigns, we help you succeed on Amazon, Flipkart, and more.",
      features: [
        "Marketplace onboarding & product listing",
        "SEO-optimized titles, bullets & images",
        "Account management & PPC ad setup",
        "Inventory, pricing & dashboard reporting",
      ],
      image: "/ecommerce-online-store-shopping-cart-products.jpg",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video & Content Production",
      slug: "video-content",
      description: "Engage your audience with powerful visual content.",
      summary:
        "Capture attention with professional video and visual content. From social media reels to product videos, we create compelling content that tells your brand story and drives engagement.",
      features: [
        "Reels, promos & explainers for social media",
        "Product & testimonial video shoots",
        "Full scripting, editing & post-production",
        "Branded photo shoots for team/products",
      ],
      image: "/video-production-camera-filming-professional-set.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-yellow-500 text-black border-yellow-500 text-sm md:text-base px-4 py-2">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Everything Your Business
              <span className="text-yellow-500"> Needs to Grow</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              We blend strategy, creativity, and technology to help SMEs build brands, acquire customers, and grow
              revenue. From marketing to design, tech to strategy - we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <a href="https://wa.me/917845864918" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
                >
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Solutions for SMEs</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service you need, or combine multiple services for a complete growth strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-base leading-relaxed">{service.summary}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold group/btn">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VCBLY Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Why VCBLY</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Businesses Choose VCBLY</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another agency. We're your growth partners, committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "SME-First Approach",
                description: "Solutions designed specifically for small and medium enterprises with realistic budgets.",
              },
              {
                title: "Results-Driven",
                description: "We focus on measurable outcomes - leads, sales, and ROI that matter to your bottom line.",
              },
              {
                title: "End-to-End Support",
                description:
                  "From strategy to execution, we handle everything so you can focus on running your business.",
              },
              {
                title: "Transparent Process",
                description:
                  "Clear communication, regular updates, and no hidden costs. You always know where you stand.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how VCBLY can help you achieve your business goals. Get a free consultation and personalized
            strategy session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 w-full sm:w-auto"
              >
                Schedule Free Consultation
              </Button>
            </Link>
            <a href="https://wa.me/917845864918" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
