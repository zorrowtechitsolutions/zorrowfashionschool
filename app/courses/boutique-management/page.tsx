'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function BoutiqueManagementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 pt-20 text-white">
      
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#courses"
          className="text-pink-300 hover:text-pink-200 transition-colors duration-300 text-sm mb-8 inline-block"
        >
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
                src="/courses/boutique-management.jpg"
                alt="Boutique Management"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-5xl">🏪</div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-pink-300">
                  Boutique Management
                </h1>
                <p className="text-xl text-pink-200 font-serif italic">
                  Build and Manage Your Fashion Empire
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">3</p>
                  <p className="text-sm text-slate-400">Months</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">20+</p>
                  <p className="text-sm text-slate-400">Business Experts</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-300">80%</p>
                  <p className="text-sm text-slate-400">Success Rate</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Learn everything you need to launch and manage a successful fashion boutique.
                From inventory management to customer service, master the business side of fashion retail.
              </p>

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
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Curriculum */}
          <div className="glass rounded-3xl p-8 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-pink-300">
              Curriculum
            </h2>

            {[
              ["Fashion Business Basics", "Business planning, market research, financial management"],
              ["Inventory & Operations", "Stock management, supplier relations, logistics"],
              ["Customer Experience & Sales", "Merchandising, styling, customer service excellence"],
              ["Marketing & Growth", "Branding, social media, digital marketing strategies"]
            ].map(([title, desc]) => (
              <div key={title} className="border-l-2 border-pink-500 pl-4 py-2">
                <h3 className="font-bold text-slate-200">{title}</h3>
                <p className="text-sm text-slate-400 mt-1">{desc}</p>
              </div>
            ))}
          </div>

          {/* Learning Outcomes */}
          <div className="glass rounded-3xl p-8 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-pink-300">
              What You'll Learn
            </h2>

            <ul className="space-y-3">
              {[
                "Create comprehensive business plans",
                "Financial management and budgeting",
                "Inventory and supply chain management",
                "Luxury retail merchandising",
                "Digital marketing and e-commerce",
                "Team management and growth strategies"
              ].map(item => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <span className="text-pink-400 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-pink-300">
              Ready to Own Your Boutique?
            </h2>
            <p className="text-lg text-slate-300">
              Learn the business skills to launch and manage a successful fashion boutique.
            </p>
            <Link
              href="/#admissions"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Apply for Boutique Management
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
