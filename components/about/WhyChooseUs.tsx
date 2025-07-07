import { Ear, Users, Award, Clock } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Ear,
      title: "We Listen First",
      description: "Every journey begins with understanding your child, your routines, and your hopes.",
    },
    {
      icon: Users,
      title: "We Partner With You",
      description: "You're never a number. You're a co-creator in your family's support plan.",
    },
    {
      icon: Award,
      title: "We're NDIS Experts",
      description: "We simplify complex systems so you can focus on what matters—your child's growth.",
    },
    {
      icon: Clock,
      title: "We're With You Long-Term",
      description: "From early childhood to adulthood, our services adapt as your needs evolve.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800 font-poppins">Why Families Choose Enable Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <reason.icon className="h-8 w-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-4 font-poppins">{reason.title}</h3>
              <p className="text-gray-600 font-inter leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
