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
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Quote */}
          <div className="text-center lg:text-left">
            <div className="relative w-80 h-80 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-teal-100 to-orange-100 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">👩‍⚕️</div>
                <h4 className="text-lg font-semibold text-teal-800 font-poppins">Brenda</h4>
                <p className="text-sm text-gray-600 font-inter">Lead Therapist & Founder</p>
              </div>
            </div>
            <blockquote className="text-lg italic text-gray-700 mb-4 font-inter">
              "Every child has unique strengths and potential. My passion is helping families discover and nurture these
              gifts, creating a foundation for lifelong success and happiness."
            </blockquote>
            <cite className="text-teal-800 font-semibold font-poppins">- Brenda, Founder & Lead Therapist</cite>
          </div>

          {/* Qualifications and Achievements */}
          <div className="space-y-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-4 font-poppins">Qualifications & Experience</h3>
                <ul className="space-y-2">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-center font-inter">
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
                    <h4 className="font-semibold text-teal-800 text-sm font-poppins">{achievement.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 font-inter">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
