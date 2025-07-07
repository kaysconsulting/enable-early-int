import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface NewsArticleProps {
  article: {
    title: string
    excerpt: string
    content: string
    date: string
    author: string
    category: string
    readTime: string
    image: string
    imageAlt: string
  }
}

export default function NewsArticle({ article }: NewsArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="py-12 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8 text-teal-600 hover:text-teal-700">
            <Link href="/news" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to News</span>
            </Link>
          </Button>

          <div className="mb-6">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-teal-800 mb-6 font-poppins leading-tight">{article.title}</h1>

          <p className="text-xl text-gray-600 mb-8 font-inter leading-relaxed">{article.excerpt}</p>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {article.readTime}
              </div>
            </div>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.imageAlt}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none font-inter
              prose-headings:font-poppins prose-headings:text-teal-800
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-gray-600 prose-li:mb-2
              prose-strong:text-teal-800"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-teal-800 mb-4 font-poppins">
                Want to Learn More About Our Services?
              </h3>
              <p className="text-gray-600 mb-6 font-inter">
                Contact us today to discuss how we can support you or your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
