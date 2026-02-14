'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-pink-300">
                  About ZORROW
                </h2>
                <div className="w-16 h-1  bg-gradient-to-r from-pink-500 to-pink-400"/>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed">
                ZORROW School of Fashion represents the pinnacle of elite fashion education. We believe in nurturing creative excellence through a curriculum designed by industry leaders and delivered in a state-of-the-art studio environment.
              </p>
            </div>

            {/* Right Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <p className="text-3xl font-serif font-bold text-pink-300 mb-2">15+</p>
                <p className="text-sm font-medium text-slate-400">Expert Mentors</p>
              </div>
              <div className="glass rounded-2xl p-6 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <p className="text-3xl font-serif font-bold text-pink-300 mb-2">500+</p>
                <p className="text-sm font-medium text-slate-400">Graduates</p>
              </div>
              <div className="glass rounded-2xl p-6 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <p className="text-3xl font-serif font-bold text-pink-300 mb-2">100%</p>
                <p className="text-sm font-medium text-slate-400">Placement Rate</p>
              </div>
              <div className="glass rounded-2xl p-6 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <p className="text-3xl font-serif font-bold text-pink-300 mb-2">12+</p>
                <p className="text-sm font-medium text-slate-400">Award-Winning Programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
