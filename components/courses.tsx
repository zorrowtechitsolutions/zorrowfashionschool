'use client'

import { useState } from 'react'
import Link from 'next/link'

const courseData = [
  {
    id: 1,
    title: 'Fashion Design',
    duration: '6 months',
    level: 'Intermediate',
    icon: '🎨',
    slug: 'fashion-design'
  },
  {
    id: 2,
    title: 'Bridal Wear Design',
    duration: '5 months',
    level: 'Advanced',
    icon: '👰',
    slug: 'bridal-wear'
  },
  {
    id: 3,
    title: 'Boutique Management',
    duration: '3 months',
    level: 'Intermediate',
    icon: '🏪',
    slug: 'boutique-management'
  },
  {
    id: 4,
    title: 'Fashion Illustration',
    duration: '4 months',
    level: 'Beginner',
    icon: '✏️',
    slug: 'fashion-illustration'
  }
]

export default function Courses() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="courses" className="py- px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-pink-300">
            Our Courses
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-pink-400 mx-auto" />
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Choose from our curated selection of fashion education programs designed for aspiring designers and stylists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseData.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="glass rounded-3xl p-8 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,182,210,0.3)] transition-all duration-300 cursor-pointer space-y-4 flex flex-col h-full"
              onMouseEnter={() => setHoveredId(course.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="text-5xl mb-2">{course.icon}</div>

              <h3 className="text-xl font-serif font-bold text-pink-300">
                {course.title}
              </h3>

              <div className="flex flex-col gap-2 text-xs pt-2">
                <span className="inline-block bg-slate-700/40 rounded-full px-3 py-1 text-slate-400 w-fit">
                  {course.duration}
                </span>
                <span className="inline-block bg-pink-500/20 rounded-full px-3 py-1 text-pink-300 w-fit font-medium">
                  {course.level}
                </span>
              </div>

              {hoveredId === course.id && (
                <div className="w-full bg-pink-500 hover:bg-pink-600 text-black rounded-full py-3 text-sm font-semibold mt-4 text-center transition-all duration-300">
                  View Details
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
