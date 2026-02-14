'use client'

import { useState } from 'react'

const galleryItems = [
  { id: 1, title: 'Runway Collection', emoji: '👗', category: 'Design' },
  { id: 2, title: 'Hand Sketches', emoji: '✏️', category: 'Illustration' },
  { id: 3, title: 'Bridal Showcase', emoji: '💒', category: 'Bridal' },
  { id: 4, title: 'Tailoring Details', emoji: '🪡', category: 'Tailoring' },
  { id: 5, title: 'Fabric Study', emoji: '🧵', category: 'Materials' },
  { id: 6, title: 'Fashion Show', emoji: '🎭', category: 'Events' },
  { id: 7, title: 'Student Work', emoji: '👨‍🎨', category: 'Design' },
  { id: 8, title: 'Styling Session', emoji: '💅', category: 'Styling' },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const categories = ['All', 'Design', 'Illustration', 'Bridal', 'Tailoring', 'Materials', 'Events', 'Styling']
  const filteredItems = selectedCategory === 'All' ? galleryItems : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="py- px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-pink-300">
            Gallery
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-pink-400 mx-auto" />
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore the creative works and designs from our talented students and faculty.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-pink-500 text-black'
                  : 'glass text-slate-300 hover:border-pink-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass rounded-3xl overflow-hidden aspect-square hover:scale-105 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-500/10 via-slate-800/20 to-slate-900/20 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-400/0 group-hover:from-pink-500/20 group-hover:to-pink-400/20 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-all duration-300">
                    {item.emoji}
                  </div>
                  {hoveredId === item.id && (
                    <div className="space-y-2 animate-in fade-in duration-300">
                      <h3 className="font-serif font-bold text-pink-300">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400">{item.category}</p>
                    </div>
                  )}
                  {hoveredId !== item.id && (
                    <h3 className="font-serif font-bold text-foreground text-sm">
                      {item.title}
                    </h3>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
