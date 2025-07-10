import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LatestNews() {
  const newsItems = [
    {
      title: "New NDIS Changes: What Families Need to Know",
      excerpt:
        "Understanding the latest updates to NDIS funding and how they affect early childhood intervention services.",
      date: "March 15, 2024",
      image: "/importance.jpg",
      imageAlt: "Importance of early intervention for child development",
      slug: "ndis-changes-2024",
    },
    {
      title: "The Importance of Early Intervention in Child Development",
      excerpt:
        "Research shows that early intervention can significantly improve outcomes for children with developmental delays.",
      date: "March 10, 2024",
      image: "/tech.jpg",
      imageAlt: "Therapist using technology in early intervention",
      slug: "early-intervention-importance",
    },
    {
      title: "Building Inclusive Communities: Our Community Participation Program",
      excerpt:
        "How our community participation services are helping individuals with disabilities engage more fully in their communities.",
      date: "March 5, 2024",
      image: "/inclusive.jpg",
      imageAlt: "Inclusive community activities for children with disabilities",
      slug: "inclusive-communities",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl font-poppins">
            Latest News & Insights
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 font-inter">
            Stay updated with the latest developments in disability services and early childhood intervention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.imageAlt}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <CardTitle className="text-lg text-teal-800 font-poppins group-hover:text-orange-600 transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-inter text-sm mb-4">{item.excerpt}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="group/btn w-full justify-between text-azure-700 hover:text-azure-800 hover:bg-azure-50 font-medium"
                >
                  <Link href={`/news/${item.slug}`} className="flex items-center justify-between w-full">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
            <Link href="/news">View All News</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
