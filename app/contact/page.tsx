import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact VCBLY | Get Free Consultation for Your Business | Marketing Agency",
  description:
    "Get in touch with VCBLY for a free business consultation. Contact us via phone, email, WhatsApp, or visit our office in Chennai. We're here to help your SME grow.",
  keywords: [
    "contact VCBLY",
    "free business consultation",
    "marketing agency Chennai",
    "get in touch",
    "business inquiry",
    "SME marketing help",
  ],
  openGraph: {
    title: "Contact VCBLY | Get Free Consultation",
    description: "Reach out to VCBLY for expert marketing advice and business growth strategies.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-yellow-500 text-black border-yellow-500 text-sm md:text-base px-4 py-2">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Let's Grow Your Business
              <span className="text-yellow-500"> Together</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Have questions? Need expert advice? Want to discuss your business goals? We're here to help. Reach out to
              us for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Name
                    </label>
                    <Input
                      id="business"
                      placeholder="Your Business Name"
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business and how we can help..."
                      rows={5}
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-6"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Visit Our Office</h4>
                        <p className="text-gray-600">
                          104, Osian Chloroplaza
                          <br />
                          Porur, Chennai - 600116
                          <br />
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                        <p className="text-gray-600">
                          <a href="tel:+917845864918" className="hover:text-yellow-600 transition-colors">
                            +91-7845864918
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                        <p className="text-gray-600">
                          <a href="mailto:contact@vcbly.com" className="hover:text-yellow-600 transition-colors">
                            contact@vcbly.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <p className="text-gray-600">
                          Monday - Saturday: 9:00 AM - 7:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-600">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Quick Response on WhatsApp</h3>
                  </div>
                  <p className="text-black/90 mb-6">
                    Need immediate assistance? Chat with us on WhatsApp for quick answers to your questions.
                  </p>
                  <a href="https://wa.me/917845864918" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold text-lg py-6">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Free Consultation CTA */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-900 to-black text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Free Business Consultation</h3>
                  <p className="text-gray-300 mb-6">
                    Not sure where to start? Book a free 30-minute consultation with our experts to discuss your
                    business goals and explore growth opportunities.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>No obligations, completely free</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Personalized growth strategy</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Expert advice tailored for SMEs</span>
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-6"
                  >
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Chennai, we're easily accessible and always ready to meet you in person.
            </p>
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4837!2d80.1539!3d13.0368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzEyLjUiTiA4MMKwMDknMTQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
