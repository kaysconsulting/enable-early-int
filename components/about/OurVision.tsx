import { Target, Heart, MapPin } from "lucide-react"

export default function OurVision() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800 font-poppins mb-4">Our Vision & Mission</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Target className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-teal-800 ml-4 font-poppins">Our Vision</h3>
            </div>
            <p className="text-gray-600 font-inter leading-relaxed">
              To see every child, individual, and family supported, included, and thriving—at home, in the community,
              and at work.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-teal-800 ml-4 font-poppins">Our Mission</h3>
            </div>
            <p className="text-gray-600 font-inter leading-relaxed">
              To deliver person-centred, culturally respectful, and evidence-informed services that unlock potential,
              build confidence, and create real pathways to independence.
            </p>
          </div>
        </div>

        {/* Our Reach */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <MapPin className="h-6 w-6 text-orange-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-teal-800 mb-4 font-poppins">Our Reach</h3>
          <p className="text-gray-600 font-inter leading-relaxed max-w-2xl mx-auto">
            Enable Early Intervention proudly supports families and participants across Australia, delivering mobile, in-home, and
            community-based support with consistency and care.
          </p>
        </div>
      </div>
    </section>
  )
}
