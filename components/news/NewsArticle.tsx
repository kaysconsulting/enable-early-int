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
      <section className="py-16 bg-gradient-to-br from-teal-50 to-orange-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl transform translate-x-1/2 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl transform -translate-x-1/4 translate-y-1/4"></div>
        </div>
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

          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6 font-poppins leading-tight max-w-3xl">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 font-inter leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>

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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
            <div className="relative aspect-video w-full">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white/90 text-sm font-medium">{article.imageAlt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none font-inter
              prose-headings:font-poppins prose-headings:font-bold prose-headings:leading-tight
              prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-8 prose-h1:text-teal-800
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-teal-800 prose-h2:pt-4
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-teal-800
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-ul:my-6 prose-ul:pl-6 prose-li:mb-3 prose-li:pl-2 prose-li:relative prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-3 prose-li:before:h-1.5 prose-li:before:w-1.5 prose-li:before:rounded-full prose-li:before:bg-teal-500
              prose-ol:my-6 prose-ol:pl-6 prose-ol:list-decimal
              prose-strong:text-teal-800 prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:bg-teal-50 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-blockquote:font-normal
              prose-a:text-teal-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-2 hover:prose-a:underline-offset-4 hover:prose-a:decoration-teal-400
              prose-img:rounded-xl prose-img:shadow-lg prose-img:transition-all prose-img:duration-300 hover:prose-img:shadow-xl
              prose-hr:my-12 prose-hr:border-t-2 prose-hr:border-teal-100
              prose-pre:bg-gray-50 prose-pre:rounded-xl prose-pre:p-4 prose-pre:overflow-x-auto
              prose-code:before:content-[''] prose-code:after:content-['']"
            dangerouslySetInnerHTML={{ 
              __html: article.content 
                .replace(/<ul>/g, '<ul class="space-y-3">')
                .replace(/<ol>/g, '<ol class="space-y-3">')
                .replace(/<p>/g, '<p class="leading-8">')
            }}
          />

          {/* Call to Action */}
          <div className="mt-20 p-8 bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl shadow-lg border border-teal-100 transform transition-all duration-300 hover:shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-teal-800 mb-4 font-poppins">
                Want to Learn More About Our Services?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed font-inter">
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
