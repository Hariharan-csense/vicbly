import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "VCBLY Blog - Marketing Insights, Tips & Strategies for SMEs",
  description:
    "Explore expert insights on digital marketing, branding, SEO, web development, business strategy, e-commerce, and content production. Learn how to grow your SME with proven marketing strategies.",
}

const blogPosts = [
  {
    slug: "social-media-marketing-guide-smes-2025",
    title: "Social Media Marketing Guide for SMEs in 2025",
    excerpt:
      "Discover how small and medium enterprises can leverage social media platforms to build brand awareness, engage customers, and drive sales in 2025.",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    date: "January 15, 2025",
    image: "/blog/social-media-marketing-sme.jpg",
    readTime: "8 min read",
  },
  {
    slug: "brand-identity-design-small-business",
    title: "Creating a Powerful Brand Identity for Your Small Business",
    excerpt:
      "Learn the essential elements of brand identity design and how to create a memorable brand that resonates with your target audience and stands out in the market.",
    category: "Branding & Design",
    categorySlug: "branding-design",
    date: "January 12, 2025",
    image: "/blog/brand-identity-design.jpg",
    readTime: "6 min read",
  },
  {
    slug: "seo-strategies-local-businesses-tamil-nadu",
    title: "SEO Strategies for Local Businesses in Tamil Nadu",
    excerpt:
      "Master local SEO techniques to improve your visibility in Google searches, attract more local customers, and dominate your local market in Tamil Nadu.",
    category: "SEO",
    categorySlug: "seo",
    date: "January 10, 2025",
    image: "/blog/local-seo-tamil-nadu.jpg",
    readTime: "10 min read",
  },
  {
    slug: "website-design-trends-2025",
    title: "Top Website Design Trends for 2025",
    excerpt:
      "Stay ahead of the curve with the latest website design trends for 2025, including AI-powered personalization, micro-interactions, and immersive user experiences.",
    category: "Web & Tech",
    categorySlug: "web-tech",
    date: "January 8, 2025",
    image: "/blog/website-design-trends.jpg",
    readTime: "7 min read",
  },
  {
    slug: "business-growth-strategies-smes",
    title: "5 Proven Business Growth Strategies for SMEs",
    excerpt:
      "Explore practical and proven business growth strategies that SMEs can implement immediately to scale operations, increase revenue, and build sustainable success.",
    category: "Business Strategy",
    categorySlug: "business-strategy",
    date: "January 5, 2025",
    image: "/blog/business-growth-strategies.jpg",
    readTime: "9 min read",
  },
  {
    slug: "ecommerce-conversion-optimization-tips",
    title: "E-commerce Conversion Optimization: 10 Tips That Work",
    excerpt:
      "Increase your online store's conversion rate with these proven optimization techniques, from product page design to checkout flow improvements.",
    category: "E-commerce",
    categorySlug: "ecommerce",
    date: "January 3, 2025",
    image: "/blog/ecommerce-conversion.jpg",
    readTime: "8 min read",
  },
  {
    slug: "video-marketing-strategy-small-business",
    title: "Video Marketing Strategy for Small Businesses",
    excerpt:
      "Learn how to create an effective video marketing strategy that engages your audience, builds trust, and drives conversions without breaking the bank.",
    category: "Video & Content",
    categorySlug: "video-content",
    date: "December 30, 2024",
    image: "/blog/video-marketing-strategy.jpg",
    readTime: "7 min read",
  },
  {
    slug: "content-marketing-roi-measurement",
    title: "How to Measure Content Marketing ROI Effectively",
    excerpt:
      "Understand the key metrics and methods to measure your content marketing ROI, proving the value of your content efforts to stakeholders.",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    date: "December 28, 2024",
    image: "/blog/content-marketing-roi.jpg",
    readTime: "6 min read",
  },
  {
    slug: "logo-design-process-guide",
    title: "The Complete Logo Design Process: A Step-by-Step Guide",
    excerpt:
      "Follow our comprehensive guide to creating a professional logo that captures your brand essence and makes a lasting impression on your customers.",
    category: "Branding & Design",
    categorySlug: "branding-design",
    date: "December 25, 2024",
    image: "/blog/logo-design-process.jpg",
    readTime: "8 min read",
  },
]

const categories = [
  "All Posts",
  "Digital Marketing",
  "Branding & Design",
  "SEO",
  "Web & Tech",
  "Business Strategy",
  "E-commerce",
  "Video & Content",
]

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">VCBLY Knowledge Hub</h1>
            <p className="text-xl text-gray-300 leading-relaxed text-pretty">
              Expert insights, practical tips, and proven strategies to help your SME grow through smart marketing,
              creative branding, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  category === "All Posts"
                    ? "bg-yellow-500 text-black font-semibold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-pretty">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-yellow-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-900 mb-8 text-pretty">
            Get expert marketing strategies tailored for your SME. Book a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold bg-transparent"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
