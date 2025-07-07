export default function ResourcesHero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-orange-50 py-20 sm:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-teal-800 sm:text-5xl md:text-6xl">
            Resources &
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Support
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg sm:text-xl text-gray-600 leading-relaxed font-inter">
            Access helpful resources, forms, and information to support your child's development journey. Everything you
            need in one convenient location.
          </p>
        </div>
      </div>
    </section>
  )
}
