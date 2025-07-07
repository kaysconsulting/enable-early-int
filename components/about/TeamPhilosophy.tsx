export default function TeamPhilosophy() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-teal-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-800 mb-4 text-center font-poppins">Brenda's Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-teal-800 mb-2 font-poppins">Growth Mindset</h4>
              <p className="text-sm text-gray-600 font-inter">
                Believing in every child's capacity to learn, grow, and achieve their goals with the right support.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
              <h4 className="font-semibold text-teal-800 mb-2 font-poppins">Family Partnership</h4>
              <p className="text-sm text-gray-600 font-inter">
                Working collaboratively with families as the experts on their children and primary agents of change.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🔬</div>
              <h4 className="font-semibold text-teal-800 mb-2 font-poppins">Evidence-Based Practice</h4>
              <p className="text-sm text-gray-600 font-inter">
                Combining the latest research with clinical expertise and family values for optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
