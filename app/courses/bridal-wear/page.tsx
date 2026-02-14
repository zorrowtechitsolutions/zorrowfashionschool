'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function BridalWearPage() {
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
                src="/courses/bridal-wear.jpg"
                alt="Bridal Wear Design Studio"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-5xl mb-4">👰</div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-pink-300">
                  Bridal Wear Design
                </h1>
                <p className="text-xl text-pink-200 font-serif italic">
                  Create Unforgettable Wedding Collections
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">5</p>
                  <p className="text-sm text-slate-400">Months</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">12+</p>
                  <p className="text-sm text-slate-400">Designers</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">95%</p>
                  <p className="text-sm text-slate-400">Graduates Work</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-slate-300 leading-relaxed">
                  Specialize in creating luxurious bridal collections. Learn the intricacies of wedding dress design, embellishment techniques, and the emotional intelligence required to design for the most important day.
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
                  <h3 className="font-bold text-slate-200">Module 1: Bridal Design Essentials</h3>
                  <p className="text-sm text-slate-400 mt-1">Wedding trends, bride psychology, design principles</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h3 className="font-bold text-slate-200">Module 2: Luxury Fabrics & Embellishments</h3>
                  <p className="text-sm text-slate-400 mt-1">Beading, lace, pearls, and advanced techniques</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h3 className="font-bold text-slate-200">Module 3: Bridal Collection Development</h3>
                  <p className="text-sm text-slate-400 mt-1">Creating cohesive bridal lines</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-4 py-2">
                  <h3 className="font-bold text-slate-200">Module 4: Business of Bridal Design</h3>
                  <p className="text-sm text-slate-400 mt-1">Boutique operations and client management</p>
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="glass rounded-3xl p-8 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-pink-300">What You'll Learn</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Bridal silhouette design and construction</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Advanced embellishment techniques</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Luxury fabric selection and sourcing</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Custom fitting and alterations</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Bridal business management</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>Wedding industry networking</span>
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
            <h2 className="text-3xl font-serif font-bold text-pink-300">Ready to Design Dreams?</h2>
            <p className="text-lg text-slate-300">
              Master the art of bridal design and create the most important dresses in your clients' lives.
            </p>
            <Link
              href="/#admissions"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Apply for Bridal Design
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
