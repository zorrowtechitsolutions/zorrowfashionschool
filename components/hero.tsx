'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt- px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl transition-all duration-300" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl transition-all duration-300" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Main Hero Card */}
        <div className="glass rounded-3xl p-12 md:p-20 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-pink-300 leading-tight">
              ZORROW School of Fashion
            </h1>
            <p className="text-2xl md:text-3xl font-serif italic text-pink-200">
              Design Your Dream, Stitch Your Future
            </p>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Elite fashion education empowering the next generation of designers and style innovators through industry-focused curriculum and mentorship.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row justify-center pt-4">
            <Link
              href="#admissions"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg text-center"
            >
              Apply Now
            </Link>
            <Link
              href="#courses"
              className="inline-block glass border border-pink-500/50 text-pink-300 hover:bg-pink-500/20 px-8 py-4 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg text-center"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        </div>
        </div>
    </section>
  )
}
