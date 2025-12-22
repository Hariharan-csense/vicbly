import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  FileText,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Business Strategy & Consulting for SMEs | VCBLY - Growth Planning & Market Positioning",
  description:
    "Strategic guidance for sustainable business growth. Go-to-market strategy, competitor analysis, marketing funnels, and growth consulting designed specifically for SMEs.",
  keywords: [
    "business strategy consulting",
    "SME growth consulting",
    "go-to-market strategy",
    "marketing funnel strategy",
    "competitor analysis",
    "business positioning",
    "growth consulting India",
    "marketing strategy for SMEs",
    "business planning",
    "marketing audit",
  ],
}

export default function BusinessStrategyPage() {
  const offerings = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Go-to-Market Strategy",
      description: "Launch products and services with clear positioning, messaging, and customer acquisition plans.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Competitor Analysis",
      description: "Deep-dive research into your competitors' strategies, strengths, and market positioning.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Marketing Funnel Design",
      description: "Build efficient customer journeys from awareness to conversion and retention.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Business Positioning",
      description: "Define your unique value proposition and carve out a distinctive position in your market.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Marketing System Audit",
      description:
        "Comprehensive review of your current marketing efforts with actionable improvement recommendations.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Growth Consulting",
      description: "Ongoing strategic guidance to scale your business sustainably and profitably.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Business Assessment",
      description: "Analyze your current state, goals, market position, and competitive landscape.",
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Create data-driven strategies aligned with your resources and growth objectives.",
    },
    {
      step: "3",
      title: "Action Planning",
      description: "Develop detailed implementation roadmaps with timelines, responsibilities, and KPIs.",
    },
    {
      step: "4",
      title: "Execution Support",
      description: "Provide ongoing guidance, monitor progress, and adjust strategies as needed.",
    },
  ]

  const industries = [
    "Technology & SaaS",
    "Professional Services",
    "Healthcare",
    "Education",
    "Retail & E-commerce",
    "Manufacturing",
    "Hospitality",
    "Financial Services",
  ]

  const faqs = [
    {
      question: "Who is business strategy consulting for?",
      answer:
        "Our consulting is designed for SME owners and founders who need strategic clarity but don't require full-time executives. It's ideal for businesses at inflection points—launching new products, entering new markets, or scaling operations.",
    },
    {
      question: "How is this different from marketing services?",
      answer:
        "Marketing services execute specific tactics (ads, websites, content). Strategy consulting provides the overarching plan—what to build, who to target, how to position, and which channels to prioritize. It's the blueprint that makes your marketing effective.",
    },
    {
      question: "What does a typical engagement look like?",
      answer:
        "Most clients start with a 4-6 week strategic planning engagement, followed by monthly or quarterly consulting retainers. We deliver comprehensive reports, presentations, and ongoing guidance as you implement the strategies.",
    },
    {
      question: "Can you help with implementation too?",
      answer:
        "Yes! While our focus is strategy, we can also execute through our other service lines—digital marketing, branding, web development, etc. This ensures seamless transition from planning to execution.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
                Business Strategy & Consulting
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Clarity + Planning = Sustainable Growth
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop guessing and start growing strategically. We help SMEs gain clarity on their market position,
                develop winning strategies, and create actionable plans for sustainable business growth.
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
                  href="https://wa.me/917845864918?text=Hi%2C%20I%27m%20interested%20in%20your%20Business%20Strategy%20services"
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
                  src="/business-strategy-planning-charts-analysis-board.jpg"
                  alt="Business Strategy Services"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-6 h-6" />
                  <span className="text-3xl font-bold">3x</span>
                </div>
                <p className="text-sm font-semibold">Avg. Growth Rate</p>
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
              Strategic Guidance for SME Growth
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Many SMEs struggle not because they lack effort, but because they lack strategic clarity. Without a clear
              plan, businesses waste resources on ineffective tactics, miss market opportunities, and struggle to
              differentiate from competitors.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our business strategy and consulting services help you gain the clarity you need to make confident
              decisions. We work as your strategic partners—analyzing your market, identifying opportunities, defining
              your positioning, and creating actionable roadmaps that turn vision into measurable results.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">10+</div>
                  <p className="text-gray-700 font-semibold">Years Combined Experience</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">40+</div>
                  <p className="text-gray-700 font-semibold">Businesses Consulted</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">₹10Cr+</div>
                  <p className="text-gray-700 font-semibold">Revenue Impact</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Strategy & Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From market analysis to growth planning, we provide the strategic guidance SMEs need to thrive.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Strategy Rooted in SME Reality</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">SME-Focused Frameworks</h3>
                    <p className="text-gray-600">
                      We don't use cookie-cutter corporate playbooks. Our strategies are designed for businesses with
                      limited resources and high growth ambitions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Data-Driven Insights</h3>
                    <p className="text-gray-600">
                      Every recommendation is backed by market research, competitive analysis, and customer insights—not
                      just gut feelings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Actionable Roadmaps</h3>
                    <p className="text-gray-600">
                      We don't just deliver reports. You get step-by-step implementation plans with clear priorities,
                      timelines, and success metrics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Partnership</h3>
                    <p className="text-gray-600">
                      Strategy isn't one-and-done. We stay engaged to refine approaches based on real-world results and
                      market changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/consultant-presenting-strategy-business-meeting-te.jpg"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Strategic Planning Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that transforms business challenges into growth opportunities.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cross-Industry Strategic Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped businesses across diverse sectors achieve strategic clarity and accelerated growth.
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
              <h3 className="text-2xl font-bold mb-3">Proven Methodologies</h3>
              <p className="text-gray-300">
                Time-tested frameworks adapted from top consulting firms and refined for SME contexts.
              </p>
            </div>
            <div>
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Fresh Perspectives</h3>
              <p className="text-gray-300">
                External viewpoint helps you see blind spots and opportunities you might be missing.
              </p>
            </div>
            <div>
              <MessageCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Collaborative Approach</h3>
              <p className="text-gray-300">
                We work with you, not for you—ensuring strategies align with your vision and capabilities.
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
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Ready to Grow Strategically?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Let's create a clear roadmap for your business growth. Start with a free strategic consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-100 text-black font-semibold border-2 border-black w-full sm:w-auto"
              >
                Get Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://wa.me/917845864918?text=Hi%2C%20I%27d%20like%20to%20discuss%20business%20strategy%20consulting"
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
