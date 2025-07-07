import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsList() {
  const newsItems = [
    {
      title: "New NDIS Changes: What Families Need to Know",
      excerpt:
        "Understanding the latest updates to NDIS funding and how they affect early childhood intervention services.",
      date: "March 15, 2024",
      author: "Enable Us Team",
      category: "NDIS Updates",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "NDIS planning meeting with family and support coordinator",
      slug: "ndis-changes-2024",
      featured: true,
    },
    {
      title: "The Importance of Early Intervention in Child Development",
      excerpt:
        "Research shows that early intervention can significantly improve outcomes for children with developmental delays.",
      date: "March 10, 2024",
      author: "Dr. Sarah Mitchell",
      category: "Child Development",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "Child with therapist engaged in play-based learning activity",
      slug: "early-intervention-importance",
      featured: true,
    },
    {
      title: "Building Inclusive Communities: Our Community Participation Program",
      excerpt:
        "How our community participation services are helping individuals with disabilities engage more fully in their communities.",
      date: "March 5, 2024",
      author: "Michael Chen",
      category: "Community Inclusion",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "Diverse group of people participating in community garden project",
      slug: "inclusive-communities",
      featured: false,
    },
    {
      title: "Creating Meaningful Employment Pathways for People with Disabilities",
      excerpt:
        "Exploring how supported employment services are opening doors to meaningful work opportunities and career development.",
      date: "February 28, 2024",
      author: "Lisa Thompson",
      category: "Employment",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "Person with disability working confidently in modern office environment",
      slug: "employment-pathways",
      featured: false,
    },
    {
      title: "Supporting Families Through NDIS Plan Reviews",
      excerpt:
        "A comprehensive guide to preparing for your NDIS plan review and making the most of your planning meeting.",
      date: "February 20, 2024",
      author: "Enable Us Team",
      category: "NDIS Updates",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "Family meeting with NDIS planner reviewing documents",
      slug: "ndis-plan-reviews",
      featured: false,
    },
    {
      title: "The Role of Technology in Modern Disability Support",
      excerpt:
        "Exploring how assistive technology and digital tools are transforming the way we deliver disability services.",
      date: "February 15, 2024",
      author: "Dr. James Wilson",
      category: "Technology",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "Person using assistive technology device for communication",
      slug: "technology-disability-support",
      featured: false,
    },
  ]

  const featuredArticles = newsItems.filter((item) => item.featured)
  const regularArticles = newsItems.filter((item) => !item.featured)

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-teal-800 mb-8 font-poppins">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.imageAlt}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-teal-800 font-poppins group-hover:text-orange-600 transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-inter text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {item.author}
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-orange-600 hover:text-orange-700 p-0 h-auto font-medium"
                    >
                      <Link href={`/news/${item.slug}`} className="flex items-center">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Articles */}
        <div>
          <h2 className="text-2xl font-bold text-teal-800 mb-8 font-poppins">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.imageAlt}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-xs text-gray-500 mb-2 space-x-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-teal-800 font-poppins group-hover:text-orange-600 transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-inter text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <User className="h-3 w-3 mr-1" />
                      {item.author}
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-orange-600 hover:text-orange-700 p-0 h-auto font-medium text-sm"
                    >
                      <Link href={`/news/${item.slug}`} className="flex items-center">
                        Read More <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
