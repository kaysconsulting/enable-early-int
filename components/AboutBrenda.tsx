import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Heart, Users } from "lucide-react"

export default function AboutBrenda() {
  const qualifications = [
    "Bachelor of Speech Pathology",
    "Master of Early Childhood Intervention",
    "Certified NDIS Support Coordinator",
    "15+ years clinical experience",
  ]

  const achievements = [
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description: "Graduated with honors from leading universities in speech pathology and early intervention",
    },
    {
      icon: Award,
      title: "Professional Recognition",
      description: "Member of Speech Pathology Australia and Early Childhood Intervention Australia",
    },
    {
      icon: Heart,
      title: "Passionate Advocate",
      description: "Dedicated to empowering children and families through evidence-based, compassionate care",
    },
    {
      icon: Users,
      title: "Community Leader",
      description: "Active in professional development and mentoring the next generation of therapists",
    },
  ]

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-orange-50 to-teal-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
            Meet Brenda - Our Founder & Lead Therapist
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            With over 15 years of experience in pediatric therapy, Brenda founded Enable Early Intervention with a
            vision to provide exceptional, family-centered care that truly makes a difference.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Quote */}
          <div className="text-center lg:text-left">
            <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-teal-200 to-orange-200 rounded-full flex items-center justify-center mb-6">
              <div className="text-6xl">👩‍⚕️</div>
            </div>
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "Every child has unique strengths and potential. My passion is helping families discover and nurture these
              gifts, creating a foundation for lifelong success and happiness."
            </blockquote>
            <cite className="text-teal-800 font-semibold">- Brenda, Founder & Lead Therapist</cite>
          </div>

          {/* Qualifications and Achievements */}
          <div className="space-y-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Qualifications & Experience</h3>
                <ul className="space-y-2">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-orange-500 rounded-full mr-3" />
                      <span className="text-gray-700">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
                      <achievement.icon className="h-4 w-4 text-orange-500" />
                    </div>
                    <h4 className="font-semibold text-teal-800 text-sm">{achievement.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-800 mb-4 text-center">Brenda's Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-teal-800 mb-2">Growth Mindset</h4>
              <p className="text-sm text-gray-600">
                Believing in every child's capacity to learn, grow, and achieve their goals with the right support.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
              <h4 className="font-semibold text-teal-800 mb-2">Family Partnership</h4>
              <p className="text-sm text-gray-600">
                Working collaboratively with families as the experts on their children and primary agents of change.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🔬</div>
              <h4 className="font-semibold text-teal-800 mb-2">Evidence-Based Practice</h4>
              <p className="text-sm text-gray-600">
                Combining the latest research with clinical expertise and family values for optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
