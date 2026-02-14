'use client'

import { useState } from 'react'
import Image from 'next/image'

import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Courses from '@/components/courses'
import CourseShowcase from '@/components/course-showcase'
import Gallery from '@/components/gallery'
import Admissions from '@/components/admissions'
import Footer from '@/components/footer'
import AIAssistant from '@/components/ai-assistant'

export default function Home() {
  const [showAssistant, setShowAssistant] = useState(false)

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white">

        {/* Main Sections */}
        <Navigation />
        <Hero />
        <About />
        <Courses />
        <CourseShowcase />
        <Gallery />
        <Admissions />
        <Footer />

      </main>

      {/* ================= AI SYSTEM ================= */}

      {/* Assistant Window */}
      {showAssistant && (
        <div className="fixed bottom-28 right-8 z-[100]">
          <AIAssistant />
        </div>
      )}

      {/* Floating AI Button */}
      <button
        onClick={() => setShowAssistant(prev => !prev)}
        className="fixed bottom-8 right-8 z-[101]
        w-16 h-16 rounded-full
        flex items-center justify-center
        bg-gradient-to-br from-pink to-pink-600
        shadow-[0_0_35px_rgba(236,72,153,0.7)]
        hover:scale-110 hover:-translate-y-1
        hover:shadow-[0_0_50px_rgba(236,72,153,0.9)]
        transition-all duration-300"
        aria-label="Toggle AI Fashion Assistant"
      >
        <Image
          src="/logo.png"
          alt="ZORROW AI"
          width={60}
          height={60}
          className="object-contain"
          priority
        />
      </button>
    </>
  )
}
