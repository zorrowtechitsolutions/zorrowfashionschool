'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg 
              bg-gradient-to-br from-pink- to-pink-600 
              flex items-center justify-center
              shadow-[0_0_15px_rgba(236,72,153,0.6)]
              hover:shadow-[0_0_25px_rgba(236,72,153,0.9)]
              transition-all duration-300"
            >
              <Image
                src="/logo.png"
                alt="ZORROW Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </div>

            <span className="text-xl font-serif font-bold text-pink-300 hidden sm:inline">
              ZORROW
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#about" className="text-sm font-medium text-slate-300 hover:text-pink-300 transition-colors duration-300">
              About
            </Link>
            <Link href="#courses" className="text-sm font-medium text-slate-300 hover:text-pink-300 transition-colors duration-300">
              Courses
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-slate-300 hover:text-pink-300 transition-colors duration-300">
              Gallery
            </Link>
            {/* <Link href="#admissions" className="text-sm font-medium text-slate-300 hover:text-pink-300 transition-colors duration-300">
              Admissions
            </Link> */}

            <Link
              href="#admissions"
              className="bg-pink-500 hover:bg-pink-600 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p- text-slate-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-6 pt-2 flex flex-col gap-4 animate-in fade-in duration-300">
            <Link href="#about" className="text-sm font-medium text-slate-300 hover:text-pink-300 transition-colors duration-300">
              About
            </Link>
            <Link href="#courses" className="text-sm font-medium text-slate-300 hover:text-pink-300 transition-colors duration-300">
              Courses
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-slate-300 hover:text-pink-300 transition-colors duration-300">
              Gallery
            </Link>
            <Link href="#admissions" className="text-sm font-medium text-slate-300 hover:text-pink-300 transition-colors duration-300">
              Admissions
            </Link>

            <Link
              href="#admissions"
              className="bg-pink-500 hover:bg-pink-600 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-sm w-full text-center"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
