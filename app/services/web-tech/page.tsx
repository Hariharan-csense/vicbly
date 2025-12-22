import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  ShoppingCart,
  Smartphone,
  Zap,
  Shield,
  Headphones,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Web Development & Technology Services | VCBLY - Fast, Mobile-First Websites",
  description:
    "Custom websites and ecommerce stores that drive results. Mobile-responsive, SEO-optimized, with lead forms and chat widgets. Perfect for SMEs looking to grow online.",
  keywords: [
    "web development for SMEs",
    "custom website design",
    "ecommerce website development",
    "Shopify store setup",
    "WooCommerce development",
    "mobile-responsive websites",
    "landing page design",
    "business website India",
    "website maintenance",
    "web hosting services",
  ],
}

export default function WebTechPage() {
  const offerings = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Custom Business Websites",
      description: "Professional, fast-loading websites tailored to your business goals and brand identity.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Stores",
      description: "Shopify and WooCommerce stores with payment gateways, inventory management, and analytics.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Landing Pages",
      description: "High-converting landing pages optimized for lead generation and campaign conversions.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lead Forms & Chat Widgets",
      description: "Integrated contact forms, chatbots, and WhatsApp widgets to capture and engage leads.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Hosting & Domain Setup",
      description: "Complete domain registration, SSL certificates, and reliable hosting infrastructure.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Ongoing Tech Support",
      description: "Regular updates, security patches, backups, and technical maintenance support.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Requirements Gathering",
      description: "Understand your business, audience, and website goals through detailed consultation.",
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "Create wireframes and mockups that align with your brand and user experience goals.",
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Build your website with clean code, test across devices, and ensure optimal performance.",
    },
    {
      step: "4",
      title: "Launch & Support",
      description: "Deploy to production, train your team, and provide ongoing technical support.",
    },
  ]

  const industries = [
    "Professional Services",
    "Healthcare & Clinics",
    "Real Estate",
    "Education & Training",
    "Retail & E-commerce",
    "Hospitality",
    "Manufacturing",
    "Financial Services",
  ]

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "A basic business website takes 2-3 weeks, while custom e-commerce stores take 4-6 weeks. Timeline depends on complexity, content readiness, and revision rounds. We'll provide a detailed timeline during planning.",
    },
    {
      question: "Do you provide website hosting and maintenance?",
      answer:
        "Yes! We offer comprehensive hosting packages with regular backups, security updates, and technical support. You can also choose to host elsewhere—we'll help with setup either way.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. Every website we build is fully responsive and mobile-first. With 70%+ of traffic coming from mobile, we ensure your site looks perfect on all screen sizes.",
    },
    {
      question: "Can you help with SEO and Google rankings?",
      answer:
        "Yes. All our websites are built with SEO best practices—clean code, fast loading, proper meta tags, schema markup, and mobile optimization. We also offer ongoing SEO services for better rankings.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">Web & Tech</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fast, Mobile-First Websites That Drive Results
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your website is your 24/7 salesperson. We build professional, high-performing websites that attract
                visitors, generate leads, and convert customers—optimized for every device.
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
                  href="https://wa.me/917845864918?text=Hi%2C%20I%27m%20interested%20in%20your%20Web%20%26%20Tech%20services"
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
                  src="/web-development-laptop-responsive-design-coding.jpg"
                  alt="Web Development Services"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-6 h-6" />
                  <span className="text-3xl font-bold">100+</span>
                </div>
                <p className="text-sm font-semibold">Websites Delivered</p>
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
              Professional Websites Built for Growth
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In today's digital world, your website is often the first impression customers have of your business. A
              slow, outdated, or poorly designed site can drive potential customers away before they even learn what you
              offer.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in creating fast, mobile-responsive websites that not only look great but also deliver
              measurable business results. From lead generation landing pages to full-featured e-commerce stores, we
              handle everything—design, development, hosting, and ongoing support—so you can focus on running your
              business.
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
                  <p className="text-gray-700 font-semibold">Websites Built</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">99%</div>
                  <p className="text-gray-700 font-semibold">Uptime Guarantee</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Web Development Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple landing pages to complex e-commerce platforms, we've got you covered.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Technology That Works for Your Business
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile-First Design</h3>
                    <p className="text-gray-600">
                      Every website is designed for mobile devices first, ensuring perfect performance on smartphones,
                      tablets, and desktops.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Lightning-Fast Loading</h3>
                    <p className="text-gray-600">
                      Optimized code and images ensure your site loads in under 3 seconds, reducing bounce rates and
                      improving SEO.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">SEO-Ready Structure</h3>
                    <p className="text-gray-600">
                      Built-in SEO best practices help your website rank better on Google and attract organic traffic
                      from day one.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">All-Inclusive Support</h3>
                    <p className="text-gray-600">
                      From hosting and domain management to updates and backups, we handle all technical aspects for
                      you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-website-mockup-devices-responsive-display.jpg"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From Concept to Launch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process that delivers quality websites on time and within budget.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trusted Across Multiple Sectors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built websites for businesses in diverse industries, each with unique requirements.
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
              <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Secure & Compliant</h3>
              <p className="text-gray-300">
                SSL certificates, regular security updates, and GDPR-compliant data handling on every website.
              </p>
            </div>
            <div>
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Performance Optimized</h3>
              <p className="text-gray-300">
                Fast loading speeds, optimized images, and efficient code for the best user experience.
              </p>
            </div>
            <div>
              <Headphones className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">24/7 Technical Support</h3>
              <p className="text-gray-300">
                Round-the-clock monitoring and support to keep your website running smoothly at all times.
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
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Ready to Launch Your Website?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Let's build a website that attracts customers and grows your business. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-100 text-black font-semibold border-2 border-black w-full sm:w-auto"
              >
                Get Free Website Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://wa.me/917845864918?text=Hi%2C%20I%27d%20like%20to%20discuss%20website%20development"
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
