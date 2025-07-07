import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Home, Users, BookOpen } from "lucide-react"

export default function FamilySupport() {
  const concerns = [
    {
      icon: Heart,
      title: "Is my child developing normally?",
      answer:
        "Every child develops at their own pace. We provide comprehensive assessments to understand your child's unique strengths and areas for growth, offering peace of mind and clear next steps.",
    },
    {
      icon: Home,
      title: "How can I support my child at home?",
      answer:
        "We believe parents are their child's first and most important teachers. Our family coaching approach equips you with practical strategies to support your child's development in everyday activities.",
    },
    {
      icon: Users,
      title: "Will therapy help my child?",
      answer:
        "Early intervention can make a significant difference. Our evidence-based approaches are tailored to your child's specific needs, and we regularly track progress to ensure therapy is effective.",
    },
    {
      icon: BookOpen,
      title: "How do I navigate the system?",
      answer:
        "The world of disability services can feel overwhelming. We provide guidance on NDIS, school supports, and community resources, acting as your advocate throughout the journey.",
    },
  ]

  return (
    <section id="family-support" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl font-poppins">
            Supporting Families Every Step of the Way
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 font-inter">
            We understand that seeking support for your child can bring many questions and emotions. You're not alone in
            this journey - we're here to support your entire family.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {concerns.map((concern, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-teal-200 transition-colors duration-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                    <concern.icon className="h-5 w-5 text-teal-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg text-teal-800 font-poppins">{concern.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-inter">{concern.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Representation */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-50 to-orange-50 p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍👩‍👧‍👦💕</div>
                <h4 className="text-xl font-semibold text-teal-800 mb-2 font-poppins">Family-Centered Care</h4>
                <p className="text-gray-600 font-inter">
                  Supporting the whole family in your child's development journey
                </p>
              </div>
            </div>
          </div>

          {/* Family-Centered Approach */}
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-teal-800 mb-6 font-poppins">Our Family-Centered Approach</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h4 className="font-semibold text-teal-800 mb-2 font-poppins">Collaborative Partnership</h4>
                  <p className="text-sm text-gray-600 font-inter">
                    We work with you as equal partners in your child's care, respecting your expertise as a parent.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🏠</div>
                <div>
                  <h4 className="font-semibold text-teal-800 mb-2 font-poppins">Home & Community Focus</h4>
                  <p className="text-sm text-gray-600 font-inter">
                    Therapy extends beyond our clinic - we help you create supportive environments wherever your child
                    spends time.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💪</div>
                <div>
                  <h4 className="font-semibold text-teal-800 mb-2 font-poppins">Building Confidence</h4>
                  <p className="text-sm text-gray-600 font-inter">
                    We empower families with knowledge, skills, and confidence to support their child's ongoing
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
