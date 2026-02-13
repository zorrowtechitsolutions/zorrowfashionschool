'use client'

import Link from 'next/link'
import Image from 'next/image'

const showcaseData = [
  {
    id: 1,
    title: 'Fashion Design',
    duration: '6 months',
    level: 'Intermediate',
    description: 'Master pattern making, garment construction, and collection development through hands-on projects and industry mentorship.',
    image: '/courses/fashion-design.jpg',
    slug: 'fashion-design',
    features: ['Design Sketching', 'Pattern Making', 'Fabric Selection']
  },
  {
    id: 2,
    title: 'Bridal Wear Design',
    duration: '5 months',
    level: 'Advanced',
    description: 'Specialize in luxurious bridal collections with advanced embellishment techniques and wedding industry expertise.',
    image: '/courses/bridal-wear.jpg',
    slug: 'bridal-wear',
    features: ['Bridal Silhouettes', 'Embellishments', 'Custom Fitting']
  },
  {
    id: 3,
    title: 'Boutique Management',
    duration: '3 months',
    level: 'Intermediate',
    description: 'Learn to launch and manage a successful fashion boutique with business acumen, inventory management, and retail excellence.',
    image: '/courses/boutique-management.jpg',
    slug: 'boutique-management',
    features: ['Business Planning', 'Inventory Mgmt', 'Digital Marketing']
  },
  {
    id: 4,
    title: 'Fashion Illustration',
    duration: '4 months',
    level: 'Beginner',
    description: 'Develop exceptional illustration skills using traditional and digital techniques to bring your design vision to life.',
    image: '/courses/fashion-illustration.jpg',
    slug: 'fashion-illustration',
    features: ['Figure Drawing', 'Digital Art', 'Portfolio Building']
  }
]

export default function CourseShowcase() {
  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-pink-300">
            Explore Our Courses
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-pink-400 mx-auto" />
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover detailed course information with stunning imagery and comprehensive curriculum details.
          </p>
        </div>

        <div className="space-y-12">
          {showcaseData.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="glass rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(245,182,210,0.4)] transition-all duration-300">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-4xl font-serif font-bold text-pink-300">
                          {course.title}
                        </h3>
                        <p className="text-slate-400 text-lg">{course.description}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="glass rounded-2xl px-6 py-3">
                        <p className="text-sm text-slate-400">Duration</p>
                        <p className="text-lg font-bold text-pink-300">{course.duration}</p>
                      </div>
                      <div className="glass rounded-2xl px-6 py-3">
                        <p className="text-sm text-slate-400">Level</p>
                        <p className="text-lg font-bold text-pink-300">{course.level}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-slate-300">Key Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature) => (
                        <span key={feature} className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="inline-block">
                    <div className="bg-pink-500 hover:bg-pink-600 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg inline-block">
                      View Course Details
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
