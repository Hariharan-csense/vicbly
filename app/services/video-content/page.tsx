import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Video, Camera, Film, Sparkles, Target, CheckCircle2, ArrowRight, Edit } from "lucide-react"

export const metadata: Metadata = {
  title: "Video & Content Production Services | Brand Videos | VCBLY",
  description:
    "Professional video production and content creation for SMEs. Brand videos, social media content, ad creatives, and content strategy to boost engagement and drive sales.",
  keywords:
    "video production Tamil Nadu, brand video creation, social media content, video marketing, content production, corporate videos, product videos, ad creatives, video editing services",
}

export default function VideoContentPage() {
  const features = [
    {
      icon: Video,
      title: "Brand Videos",
      description:
        "Compelling brand story videos, company profiles, and corporate videos that communicate your values and connect with your audience.",
    },
    {
      icon: Camera,
      title: "Social Media Content",
      description:
        "Short-form video content optimized for Instagram Reels, YouTube Shorts, Facebook, and other social platforms to maximize reach.",
    },
    {
      icon: Film,
      title: "Ad Creatives",
      description:
        "High-converting video advertisements for digital campaigns, product launches, and promotional campaigns across all platforms.",
    },
    {
      icon: Sparkles,
      title: "Product Videos",
      description:
        "Professional product demos, explainer videos, and showcase content that highlights features and drives purchase decisions.",
    },
    {
      icon: Edit,
      title: "Video Editing",
      description:
        "Expert post-production including editing, color grading, motion graphics, and audio enhancement to polish your content.",
    },
    {
      icon: Target,
      title: "Content Strategy",
      description:
        "Strategic content planning, scripting, and distribution strategies to ensure your video content achieves business goals.",
    },
  ]

  const whyChoose = [
    {
      title: "SME-First Approach",
      description:
        "Video production solutions designed for small business budgets without compromising on quality or impact.",
    },
    {
      title: "Result-Oriented Execution",
      description:
        "Every video is created with clear business objectives—whether it's brand awareness, lead generation, or sales.",
    },
    {
      title: "Local Market Expertise",
      description:
        "Understanding of Tamil Nadu and Indian market preferences, cultural nuances, and content consumption patterns.",
    },
    {
      title: "Transparent Communication",
      description:
        "Clear production timelines, open collaboration, and regular updates throughout the content creation process.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your brand, target audience, video objectives, and key messaging to create the perfect content strategy.",
    },
    {
      step: "02",
      title: "Concept & Scripting",
      description:
        "Developing creative concepts, writing scripts, planning shots, and storyboarding to visualize the final output.",
    },
    {
      step: "03",
      title: "Production & Filming",
      description:
        "Professional filming with quality equipment, experienced crew, and attention to every detail that makes great video.",
    },
    {
      step: "04",
      title: "Post-Production",
      description:
        "Expert editing, color correction, sound design, motion graphics, and refinements to deliver polished content.",
    },
    {
      step: "05",
      title: "Delivery & Distribution",
      description:
        "Final video delivery in all required formats and guidance on distribution strategies for maximum impact.",
    },
  ]

  const industries = ["Manufacturing", "Retail & E-commerce", "Real Estate", "Healthcare", "Education", "Hospitality"]

  const faqs = [
    {
      question: "What types of videos can you produce for my business?",
      answer:
        "We produce a wide range of videos including brand stories, product demos, explainer videos, testimonial videos, corporate films, social media content, ad creatives, event coverage, and training videos. We tailor each production to your specific business needs and goals.",
    },
    {
      question: "How much does video production cost for SMEs?",
      answer:
        "Video production costs vary based on complexity, duration, location, and requirements. We offer flexible packages starting from affordable social media content to comprehensive brand video productions. During consultation, we provide transparent quotes based on your specific needs and budget.",
    },
    {
      question: "How long does it take to produce a video?",
      answer:
        "Timeline depends on video type and complexity. Simple social media videos can be delivered in 5-7 days, while comprehensive brand videos may take 3-4 weeks including pre-production, filming, and post-production. We provide clear timelines during project planning.",
    },
    {
      question: "Do you provide scriptwriting and concept development?",
      answer:
        "Yes, absolutely. Our service includes complete concept development, scriptwriting, storyboarding, and creative direction. We work closely with you to ensure the content aligns perfectly with your brand voice and business objectives.",
    },
    {
      question: "Can you help with video marketing and distribution?",
      answer:
        "Yes, we provide content strategy guidance, platform-specific optimization, and distribution recommendations. While we focus on production, we can connect you with our digital marketing team for comprehensive video marketing campaigns and promotion strategies.",
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
                Video & Content Production
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Tell Your Story Through Powerful Video
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-pretty">
                Professional video production and content creation for SMEs. From brand videos to social media content,
                we create engaging videos that drive results for your business.
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
                src="/video-production-camera-filming-professional-set.jpg"
                alt="Professional video production camera filming setup"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Video Content That Drives Business Growth
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                In the age of short attention spans and visual content dominance, video has become the most powerful
                tool for business communication and marketing. VCBLY's video and content production services help Tamil
                Nadu SMEs harness the power of video to tell their brand story, showcase products, engage audiences, and
                drive meaningful business results. Whether you need a company profile video, product demos, or social
                media content, we create professional videos that resonate with your target audience.
              </p>
              <p>
                Our video production team combines creative storytelling with technical expertise to produce
                high-quality content that works across all platforms—from your website and YouTube to Instagram,
                Facebook, and digital advertising campaigns. We handle everything from concept development and
                scriptwriting to filming, editing, and post-production. Our approach is collaborative and strategic,
                ensuring every video aligns with your brand identity and achieves specific business objectives, whether
                it's building awareness, generating leads, or driving sales.
              </p>
              <p>
                Beyond production, we understand the content landscape. We create videos optimized for each platform's
                requirements and audience behavior. Short-form content for social media engagement, detailed explainers
                for website conversions, and compelling ad creatives for paid campaigns. With VCBLY, you get more than
                just beautiful videos—you get strategic content that actually moves your business forward. We're your
                complete video marketing partner, committed to helping SMEs compete and win in the visual content era.
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
              Complete video production and content creation services
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
              Your trusted video production partner for impactful content
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Video Production Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">A proven 5-step approach from concept to delivery</p>
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
              Video content solutions for diverse business sectors
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
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-lg font-semibold">Videos Produced</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5M+</div>
              <p className="text-lg font-semibold">Views Generated</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <p className="text-lg font-semibold">Client Satisfaction</p>
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
              Get answers to common questions about our video production services
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to Create Impactful Video Content?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
            Let's discuss your video production needs and create content that drives real business results.
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
