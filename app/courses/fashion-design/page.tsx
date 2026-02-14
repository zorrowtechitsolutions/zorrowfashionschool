'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function FashionDesignPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 pt-20">
      {/* Navigation Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#courses" className="text-pink-300 hover:text-pink-200 transition-colors duration-300 text-sm mb-8 inline-block">
          ← Back to Courses
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden glass">
              <Image
                src="/courses/fashion-design.jpg"
                alt="Fashion Design Studio"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-5xl mb-4">🎨</div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-pink-300">
                  Fashion Design
                </h1>
                <p className="text-xl text-pink-200 font-serif italic">
                  Master the Art of Creating Stunning Collections
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">6</p>
                  <p className="text-sm text-slate-400">Months</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">15+</p>
                  <p className="text-sm text-slate-400">Mentors</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">100%</p>
                  <p className="text-sm text-slate-400">Job Ready</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-slate-300 leading-relaxed">
                  Learn the fundamentals of fashion design from industry experts. Master pattern making, garment construction, and collection development through hands-on projects and mentorship.
                </p>
              </div>

              <Link
                href="/#admissions"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Curriculum */}
            <div className="glass rounded-3xl p-8 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-pink-300">Curriculum</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h3 className="font-bold text-slate-200">Module 1: Design Fundamentals</h3>
                  <p className="text-sm text-slate-400 mt-1">Color theory, silhouettes, fabric knowledge</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h3 className="font-bold text-slate-200">Module 2: Pattern Making</h3>
                  <p className="text-sm text-slate-400 mt-1">Drafting, grading, technical skills</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h3 className="font-bold text-slate-200">Module 3: Collection Development</h3>
                  <p className="text-sm text-slate-400 mt-1">Creating cohesive fashion collections</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h3 className="font-bold text-slate-200">Module 4: Portfolio Building</h3>
                  <p className="text-sm text-slate-400 mt-1">Showcasing your work professionally</p>
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="glass rounded-3xl p-8 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-pink-300">What You'll Learn</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Design sketching and illustration techniques</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Advanced pattern making and grading</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Fabric selection and textile knowledge</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Collection planning and development</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Professional portfolio creation</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Industry standards and practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center space-y-">
            <h2 className="text-3xl font-serif font-bold text-pink-300">Ready to Start?</h2>
            <p className="text-lg text-slate-300">
              Join ZORROW School of Fashion and transform your passion for design into a thriving career.
            </p>
            <Link
              href="/#admissions"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Apply for Fashion Design
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
