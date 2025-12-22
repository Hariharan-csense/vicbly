import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShoppingCart,
  TrendingUp,
  CreditCard,
  BarChart3,
  Settings,
  CheckCircle2,
  ArrowRight,
  Smartphone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "E-commerce Solutions for SMEs | Online Store Development | VCBLY",
  description:
    "Launch and scale your online store with VCBLY's comprehensive e-commerce solutions. Store setup, payment integration, conversion optimization, and growth strategies for Tamil Nadu SMEs.",
  keywords:
    "e-commerce development, online store setup, e-commerce solutions Tamil Nadu, Shopify development, WooCommerce store, online business growth, payment gateway integration, e-commerce SEO",
}

export default function EcommerceSolutionsPage() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Online Store Setup",
      description:
        "Complete store development on platforms like Shopify, WooCommerce, or custom solutions tailored to your business needs.",
    },
    {
      icon: CreditCard,
      title: "Payment & Logistics Integration",
      description:
        "Seamless integration with Indian payment gateways (Razorpay, PayU) and logistics partners (Delhivery, Shiprocket).",
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description:
        "Strategic improvements to product pages, checkout flow, and user experience to maximize sales and reduce cart abandonment.",
    },
    {
      icon: BarChart3,
      title: "Store Scaling & Growth",
      description:
        "Data-driven strategies to expand your product catalog, reach new markets, and increase revenue sustainably.",
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description:
        "Mobile-first store design ensuring seamless shopping experience across all devices and screen sizes.",
    },
    {
      icon: Settings,
      title: "Store Management",
      description:
        "Inventory management, order processing automation, and customer relationship tools to streamline operations.",
    },
  ]

  const whyChoose = [
    {
      title: "SME-First Approach",
      description:
        "E-commerce solutions designed specifically for small and medium businesses with scalable growth paths.",
    },
    {
      title: "Result-Oriented Execution",
      description: "Focus on conversions, sales, and ROI rather than just building a store that looks good.",
    },
    {
      title: "Local Market Expertise",
      description: "Deep understanding of Indian e-commerce landscape, payment preferences, and buyer behavior.",
    },
    {
      title: "Transparent Communication",
      description: "Clear timelines, honest advice, and regular updates throughout your e-commerce journey.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Business Analysis",
      description:
        "Understanding your products, target audience, competitors, and business goals to create the right strategy.",
    },
    {
      step: "02",
      title: "Platform & Strategy",
      description: "Selecting the best e-commerce platform and planning store structure, features, and integrations.",
    },
    {
      step: "03",
      title: "Store Development",
      description: "Building your online store with optimized design, product catalog, and essential integrations.",
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description:
        "Store launch with performance testing, followed by continuous optimization based on data and feedback.",
    },
    {
      step: "05",
      title: "Growth & Scaling",
      description: "Ongoing support, marketing integration, and strategic improvements to scale your online business.",
    },
  ]

  const industries = [
    "Fashion & Apparel",
    "Electronics & Gadgets",
    "Home & Living",
    "Health & Wellness",
    "Food & Beverages",
    "Handmade & Crafts",
  ]

  const faqs = [
    {
      question: "Which e-commerce platform is best for my SME?",
      answer:
        "It depends on your specific needs. Shopify is great for quick setup and ease of use. WooCommerce offers flexibility and cost-effectiveness for WordPress users. For unique requirements, we build custom solutions. We analyze your business and recommend the best fit during our consultation.",
    },
    {
      question: "How much does it cost to build an online store?",
      answer:
        "E-commerce development costs vary based on platform, features, and complexity. Basic Shopify/WooCommerce stores start from affordable packages, while custom solutions are quoted based on requirements. We offer transparent pricing and packages designed for SME budgets. Contact us for a detailed quote.",
    },
    {
      question: "Do you integrate Indian payment gateways like Razorpay and PayU?",
      answer:
        "Yes, absolutely. We integrate all major Indian payment gateways including Razorpay, PayU, CCAvenue, Paytm, and more. We also set up UPI, netbanking, card payments, and EMI options to ensure maximum payment convenience for your customers.",
    },
    {
      question: "Can you help with logistics and shipping integration?",
      answer:
        "Yes, we integrate your store with leading logistics partners like Delhivery, Shiprocket, Dunzo, and others. We set up automatic shipping calculations, order tracking, and COD options to streamline your fulfillment process.",
    },
    {
      question: "Do you provide ongoing support after the store launch?",
      answer:
        "Yes, we offer maintenance and support packages that include technical support, regular updates, performance monitoring, security patches, and assistance with adding new products or features. We're your long-term e-commerce partner.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full mb-6">
                E-commerce Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Launch & Scale Your Online Store</h1>
              <p className="text-xl text-gray-300 mb-8 text-pretty">
                Comprehensive e-commerce solutions for SMEs. From store setup to payment integration and growth
                strategies, we help you build a profitable online business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/ecommerce-online-store-shopping-cart-products.jpg"
                alt="E-commerce online store with shopping cart and products"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">E-commerce Solutions That Drive Sales</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                In today's digital-first world, having an online store is no longer optional—it's essential for business
                growth. VCBLY's e-commerce solutions help Tamil Nadu SMEs launch, manage, and scale successful online
                stores that generate consistent revenue. Whether you're starting fresh or expanding an existing retail
                business online, we provide end-to-end e-commerce development and growth strategies.
              </p>
              <p>
                We specialize in building user-friendly, conversion-optimized online stores on platforms like Shopify,
                WooCommerce, and custom solutions. Our services include complete store setup, product catalog
                management, payment gateway integration, logistics partnerships, and ongoing optimization to maximize
                your online sales. We understand the unique challenges Indian SMEs face in e-commerce—from payment
                preferences to shipping complexities—and design solutions that work in the real market.
              </p>
              <p>
                Beyond just building your store, we focus on what matters most: generating sales and growing your
                business. Our conversion optimization strategies reduce cart abandonment, improve user experience, and
                increase average order value. We integrate marketing tools, analytics, and automation to help you scale
                efficiently. With VCBLY, you get more than an online store—you get a complete e-commerce growth partner
                committed to your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive e-commerce services to build and grow your online business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VCBLY */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VCBLY</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted e-commerce partner for sustainable online growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our E-commerce Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven 5-step approach to launch and scale your online store
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              E-commerce solutions tailored for diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-yellow-50 transition-colors">
                <p className="font-semibold text-lg">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Proof */}
      <section className="py-16 md:py-24 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <p className="text-lg font-semibold">SMEs Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-lg font-semibold">Stores Launched</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3X</div>
              <p className="text-lg font-semibold">Average ROI</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg font-semibold">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our e-commerce services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to Launch Your Online Store?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
            Let's discuss your e-commerce goals and create a strategy to build a profitable online business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
