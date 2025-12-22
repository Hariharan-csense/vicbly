"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, TrendingUp, MessageCircle, CheckCircle, Star, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "Active Clients", value: "150+", icon: Users },
    { label: "Projects Delivered", value: "500+", icon: Target },
    { label: "Client Satisfaction", value: "98%", icon: TrendingUp },
  ]

  const services = [
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      description:
        "Drive targeted traffic and maximize ROI with data-driven digital strategies across SEO, paid ads, social media, and email marketing.",
      icon: "📱",
    },
    {
      title: "Branding & Design",
      slug: "branding-design",
      description:
        "Build a memorable brand identity with professional logo design, brand guidelines, and cohesive visual storytelling.",
      icon: "🎨",
    },
    {
      title: "Web & Tech",
      slug: "web-tech",
      description:
        "Create high-performing, mobile-responsive websites and custom software solutions that drive conversions and enhance user experience.",
      icon: "💻",
    },
    {
      title: "Business Strategy & Consulting",
      slug: "business-strategy",
      description:
        "Unlock sustainable growth with tailored market research, business planning, and strategic consulting designed for SMEs.",
      icon: "📊",
    },
    {
      title: "E-commerce Solutions",
      slug: "ecommerce-solutions",
      description:
        "Launch and scale your online store with complete e-commerce setup, payment integration, inventory management, and conversion optimization.",
      icon: "🛒",
    },
    {
      title: "Video & Content Production",
      slug: "video-content",
      description:
        "Engage your audience with compelling video content, professional photography, and creative storytelling that converts.",
      icon: "🎬",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Innovators Pvt Ltd",
      text: "VCBLY transformed our online presence completely. Our website traffic increased by 300% in just 6 months!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Elegant Designs Co",
      text: "The branding work they did for us was exceptional. Our brand now stands out in a crowded market.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Global Solutions Inc",
      text: "Professional, creative, and results-driven. VCBLY is our go-to partner for all marketing needs.",
      rating: 5,
    },
  ]

  const clients = [
    { name: "JKM Granites", logo: "/clients/jkm-granites.png" },
    { name: "Shobha", logo: "/clients/shobha.png" },
    { name: "JKM Granites", logo: "/clients/jkm-granites.png" },
    { name: "Shobha", logo: "/clients/shobha.png" },
    { name: "JKM Granites", logo: "/clients/jkm-granites.png" },
    { name: "Shobha", logo: "/clients/shobha.png" },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="p-8 pt-12 text-center">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800">Limited Time Offer</Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Free 20-Min Growth Consultation
              </h3>
              <p className="text-gray-600 mb-8">
                Get a personalized growth strategy for your business — completely free!
              </p>

              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="9b8f64cb-08e4-4213-925a-63b9d095e40e" />
                <input type="hidden" name="subject" value="Popup - Free Consultation Request" />

                <Input name="business" placeholder="Business Name" />
                <Input name="phone" type="tel" placeholder="Phone Number" required />
                <Input name="email" type="email" placeholder="Email Address" required />

                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-6"
                >
                  Claim My Free Consultation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-6">Your information is 100% secure. No spam ever.</p>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-balance">
                Your{" "}
                <span className="text-yellow-500 relative">
                  Marketing Partner
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500/20"></span>
                </span>{" "}
                for Business Growth
              </h1>
              <p className="text-xl text-gray-600 text-pretty">
                VCBLY helps SMEs and startups grow with data-driven digital marketing, creative branding, and innovative
                web solutions. From strategy to execution, we deliver results that matter.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 group"
                  >
                    Start Your Growth Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 bg-transparent"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative z-10">
                <Image
                  src="/modern-digital-marketing-agency-team-collaboration.jpg"
                  alt="VCBLY Marketing Agency"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute top-10 -right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/professional-marketing-team-strategy-meeting.jpg"
                alt="About VCBLY"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 text-balance">About VCBLY</h2>
              <p className="text-lg text-gray-600 text-pretty">
                VCBLY is a full-service marketing agency dedicated to helping small and medium enterprises achieve
                sustainable growth through innovative digital solutions.
              </p>
              <p className="text-gray-600 text-pretty">
                We combine creativity, technology, and data-driven strategies to deliver measurable results. Our team of
                experts specializes in digital marketing, branding, web development, and business consulting tailored
                specifically for SMEs.
              </p>

              <div className="space-y-4">
                {[
                  "SME-Focused Approach",
                  "Data-Driven Strategies",
                  "Creative Excellence",
                  "Transparent Communication",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 px-4 py-2 rounded-full inline-block">
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything Your Business Needs to Grow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We blend strategy, creativity, and technology to help SMEs build brands, acquire customers, and grow
              revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">{service.description}</p>
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

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 px-4 py-2 rounded-full inline-block">
              Trusted By
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Brands We've Helped Grow</h2>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 px-4 py-2 rounded-full inline-block">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real businesses we've helped transform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 px-4 py-2 rounded-full inline-block">
              Let's Work Together
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Stand Out & Move Forward?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your business and goals. We'll craft a plan that works for your budget and targets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
                  <form 
                    action="https://api.web3forms.com/submit" 
                    method="POST"
                    className="space-y-6"
                  >
                    <input type="hidden" name="access_key" value="9b8f64cb-08e4-4213-925a-63b9d095e40e" />
                    <input type="hidden" name="subject" value="New Contact Form Submission from VCBLY Website" />
                    <input type="checkbox" name="botcheck" className="hidden" />
                    <input type="hidden" name="from_name" value="VCBLY Website" />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your Name" 
                          className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          name="business" 
                          placeholder="Business Name" 
                          className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <select 
                        name="service" 
                        className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-600"
                        required
                      >
                        <option value="">Select Primary Need</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Branding & Design">Branding & Design</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Business Consulting">Business Consulting</option>
                      </select>
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your business goals..."
                        className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        rows={4}
                        required
                      ></textarea>
                    </div>
                    
                    <div className="h-captcha" data-captcha="true"></div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg py-3 transition-colors duration-300"
                    >
                      Let's Work Together
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">104, 1st floor, osiancholoroplaza</p>
                      <p className="text-gray-600">Porur, Chennai - 116</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91-7845864918</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">contact@vcbly.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-black">
                <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
                <p className="text-lg mb-6">
                  Schedule your free 20-minute consultation today and discover how we can help your business grow.
                </p>
                <Button className="bg-black text-yellow-500 hover:bg-gray-800 font-semibold">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
