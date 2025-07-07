import { Users, Award, MapPin, Clock } from "lucide-react"

export default function StatisticsBanner() {
  const stats = [
    {
      icon: Users,
      number: "1,000+",
      label: "Families Supported",
      description: "Across Australia",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "In disability services",
    },
    {
      icon: MapPin,
      number: "50+",
      label: "Communities Served",
      description: "Nationwide reach",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "When you need us",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-teal-800 to-teal-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 backdrop-blur-sm">
                  <stat.icon className="h-8 w-8 text-orange-400" />
                </div>
              </div>
              <div className="text-3xl font-bold font-poppins mb-2">{stat.number}</div>
              <div className="text-lg font-semibold font-poppins mb-1">{stat.label}</div>
              <div className="text-sm text-teal-200 font-inter">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
