import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of Emma (5 years old)",
      content:
        "Enable Early Intervention has been a lifeline for our family. When Emma was diagnosed with autism at 3, we felt overwhelmed and didn't know where to start. The team not only provided excellent therapy services but also guided us through the NDIS process with such patience and care. Emma has made incredible progress, and we feel confident about her future.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      service: "Early Childhood Intervention",
    },
    {
      name: "Michael Chen",
      role: "NDIS Participant",
      content:
        "The support coordination team at Enable Early Intervention completely transformed my NDIS experience. They helped me understand my plan, connected me with amazing service providers, and always advocated for what I needed. I finally feel like I'm in control of my supports and working towards my goals.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      service: "Support Coordination",
    },
    {
      name: "Lisa Thompson",
      role: "Mother of Jake (7 years old)",
      content:
        "Jake has been receiving speech therapy through Enable Early Intervention for two years now. The improvement in his communication skills has been remarkable. What I love most is how they involve our whole family in the process and give us strategies to support Jake at home. The therapists are not just professionals—they genuinely care.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      service: "Speech Therapy",
    },
    {
      name: "David Wilson",
      role: "NDIS Participant",
      content:
        "Thanks to the employment support from Enable Early Intervention, I landed my dream job in administration. They didn't just help me find work—they prepared me for interviews, supported me during my first weeks, and continue to check in regularly. I've never felt more confident and independent.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      service: "Supported Employment",
    },
    {
      name: "Amanda Rodriguez",
      role: "Mother of Sofia (4 years old)",
      content:
        "The occupational therapy services have been incredible for Sofia. She struggled with sensory issues and daily activities, but now she's thriving. The therapist works with Sofia in our home and community, making the strategies practical and relevant to our daily life. We couldn't be happier with the progress.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      service: "Occupational Therapy",
    },
    {
      name: "Robert Kim",
      role: "NDIS Participant",
      content:
        "The community participation program has opened up a whole new world for me. I've joined a photography club, started volunteering at the local library, and made genuine friendships. The support workers are amazing—they help me feel confident while encouraging my independence.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      service: "Community Participation",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl font-poppins">
            What Families Say About Us
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 font-inter">
            Real stories from families and individuals who have experienced the difference our services make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Quote className="h-6 w-6 text-orange-500" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>

                {/* Service Tag */}
                <div className="text-center mb-4">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.service}
                  </span>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-600 font-inter text-sm leading-relaxed mb-6 text-center italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-teal-100 to-orange-100 flex items-center justify-center">
                    <div className="text-2xl">👤</div>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-teal-800 font-poppins text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs font-inter">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-teal-800 mb-4 font-poppins">
              Ready to Start Your Own Success Story?
            </h3>
            <p className="text-gray-600 mb-6 font-inter">
              Join the hundreds of families who have found support, hope, and progress with Enable Early Intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Book Free Consultation
              </button>
              <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold bg-transparent transition-all duration-300">
                Learn More About Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
