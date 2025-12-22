import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Facebook,
  Search,
  Mail,
  MessageCircle,
  BarChart3,
  Target,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Marketing Services for SMEs | VCBLY - ROI-Driven Campaigns",
  description:
    "Grow your business with data-driven digital marketing. Social media ads, local SEO, WhatsApp marketing, and influencer campaigns designed for SMEs. Get measurable results.",
  keywords: [
    "digital marketing for SMEs",
    "social media marketing",
    "local SEO",
    "Google Ads for small business",
    "WhatsApp marketing",
    "influencer marketing",
    "Meta ads",
    "Instagram advertising",
    "ROI-driven marketing",
    "digital marketing agency India",
  ],
}

export default function DigitalMarketingPage() {
  const offerings = [
    {
      icon: <Facebook className="w-6 h-6" />,
      title: "Social Media Advertising",
      description: "Meta, Instagram & LinkedIn ads that reach your ideal customers and drive conversions.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Local SEO & Google Business",
      description: "Get found by local customers searching for your services. Optimize your Google presence.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp Marketing",
      description: "Direct customer engagement through broadcast lists, automated responses, and campaigns.",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Marketing",
      description: "Build relationships and drive repeat business with targeted email sequences.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Google Ads & PPC",
      description: "Pay-per-click campaigns that deliver qualified leads and maximize your ad spend ROI.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Influencer Campaigns",
      description: "Partner with the right influencers to amplify your brand and reach new audiences.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Audit",
      description: "We analyze your current marketing and identify opportunities.",
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Create a custom digital marketing roadmap aligned with your goals.",
    },
    {
      step: "3",
      title: "Campaign Launch",
      description: "Execute multi-channel campaigns with precise targeting and messaging.",
    },
    {
      step: "4",
      title: "Monitor & Optimize",
      description: "Track performance, A/B test, and continuously improve results.",
    },
  ]

  const industries = [
    "Retail & E-commerce",
    "Healthcare & Wellness",
    "Education & Training",
    "Real Estate",
    "Food & Beverage",
    "Professional Services",
    "Manufacturing",
    "Hospitality & Tourism",
  ]

  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "You can start seeing initial results within 2-4 weeks for paid ads, while SEO typically takes 3-6 months. We provide weekly reports to track progress and make data-driven adjustments.",
    },
    {
      question: "What's the minimum budget needed for digital marketing?",
      answer:
        "We work with SMEs at various budget levels. A starting budget of ₹25,000-50,000/month for ads plus our service fees can deliver meaningful results. We'll create a plan that fits your budget and goals.",
    },
    {
      question: "Do you manage social media content creation too?",
      answer:
        "Yes! We can handle everything from strategy and content creation to posting and community management. We also offer standalone content services if you prefer to manage posting in-house.",
    },
    {
      question: "Which platforms should my business focus on?",
      answer:
        "It depends on your target audience. We'll analyze where your customers spend time online and recommend the best platforms—whether that's Facebook, Instagram, LinkedIn, Google, or a combination.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Digital Marketing</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Grow Your Business with ROI-Driven Campaigns
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop guessing. Start growing. We help SMEs attract more customers, increase sales, and build lasting
                brand presence through data-driven digital marketing strategies.
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
                  href="https://wa.me/917845864918?text=Hi%2C%20I%27m%20interested%20in%20your%20Digital%20Marketing%20services"
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
                  src="/digital-marketing-dashboard-analytics-social-media.jpg"
                  alt="Digital Marketing Services"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-6 h-6" />
                  <span className="text-3xl font-bold">250%</span>
                </div>
                <p className="text-sm font-semibold">Avg. ROI Increase</p>
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
              Digital Marketing That Delivers Real Results
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In today's digital-first world, having a strong online presence isn't optional—it's essential. Our digital
              marketing services are specifically designed for SMEs who want to compete with larger brands without
              breaking the bank.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We combine proven strategies with the latest marketing tools to help you reach your target audience,
              generate quality leads, and convert them into loyal customers. From social media advertising to local SEO,
              we handle everything so you can focus on running your business.
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
                  <div className="text-4xl font-bold text-yellow-600 mb-2">100+</div>
                  <p className="text-gray-700 font-semibold">Campaigns Launched</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">₹5Cr+</div>
                  <p className="text-gray-700 font-semibold">Revenue Generated</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Digital Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build a powerful online presence and drive measurable growth.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">SME-First, Results-Driven Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Built for SME Budgets</h3>
                    <p className="text-gray-600">
                      We understand budget constraints. Our campaigns are designed to maximize ROI without requiring
                      massive ad spends.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Data-Driven Decisions</h3>
                    <p className="text-gray-600">
                      Every strategy is backed by analytics. We track what works, eliminate what doesn't, and
                      continuously optimize for better results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Reporting</h3>
                    <p className="text-gray-600">
                      No jargon, no hiding. You'll get clear, weekly reports showing exactly what we're doing and the
                      results we're delivering.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Turnaround</h3>
                    <p className="text-gray-600">
                      We move fast. Most campaigns are live within 7-10 days, so you start seeing results sooner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/team-collaboration-digital-marketing-strategy-meet.jpg"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Work With You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step process that transforms your digital presence and drives real business growth.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Expertise Across Multiple Sectors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped businesses across diverse industries achieve their digital marketing goals.
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
              <BarChart3 className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Certified Experts</h3>
              <p className="text-gray-300">
                Google Ads & Facebook Blueprint certified professionals managing your campaigns.
              </p>
            </div>
            <div>
              <Target className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Performance Guarantee</h3>
              <p className="text-gray-300">
                We're committed to delivering results. If we don't, we work with you until we do.
              </p>
            </div>
            <div>
              <MessageCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-gray-300">
                Direct access to your account manager via WhatsApp, email, or calls—whenever you need us.
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
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Ready to Grow Your Business Online?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that drives real results. Book your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-100 text-black font-semibold border-2 border-black w-full sm:w-auto"
              >
                Get Free Digital Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://wa.me/917845864918?text=Hi%2C%20I%27d%20like%20a%20free%20digital%20marketing%20consultation"
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
