'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function FashionIllustrationPage() {
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
                src="/courses/fashion-illustration.jpg"
                alt="Fashion Illustration Studio"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-5xl mb-4">✏️</div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-pink-300">
                  Fashion Illustration
                </h1>
                <p className="text-xl text-pink-200 font-serif italic">
                  Bring Your Designs to Life Through Art
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">4</p>
                  <p className="text-sm text-slate-400">Months</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">10+</p>
                  <p className="text-sm text-slate-400">Illustrators</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">100%</p>
                  <p className="text-sm text-slate-400">Portfolio Ready</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-slate-300 leading-relaxed">
                  Develop exceptional illustration skills to communicate your design vision. Master both traditional and digital techniques to create stunning fashion artwork that brings designs to life.
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
                  <h3 className="font-bold text-slate-200">Module 1: Drawing Fundamentals</h3>
                  <p className="text-sm text-slate-400 mt-1">Anatomy, proportions, gesture drawing</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h3 className="font-bold text-slate-200">Module 2: Fashion Figure Illustration</h3>
                  <p className="text-sm text-slate-400 mt-1">Body proportions, poses, stylization</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h3 className="font-bold text-slate-200">Module 3: Fabric & Texture Rendering</h3>
                  <p className="text-sm text-slate-400 mt-1">Traditional and digital techniques</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h3 className="font-bold text-slate-200">Module 4: Professional Portfolio</h3>
                  <p className="text-sm text-slate-400 mt-1">Building your illustration portfolio</p>
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="glass rounded-3xl p-8 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-pink-300">What You'll Learn</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Human anatomy and fashion proportions</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Pencil and ink illustration techniques</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Digital illustration software mastery</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Fabric and texture rendering</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Color theory and composition</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Professional portfolio development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-pink-300">Ready to Illustrate Your Vision?</h2>
            <p className="text-lg text-slate-300">
              Master the art of fashion illustration and bring your design concepts to beautiful life.
            </p>
            <Link
              href="/#admissions"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Apply for Fashion Illustration
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
