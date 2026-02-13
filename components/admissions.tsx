'use client'

import React, { useState, useRef, useEffect } from "react"

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/send-admission-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send application')
      }

      console.log('Form submitted:', formData)
      setSubmitted(true)

      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: ''
        })
      }, 3000)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const courses = [
    "Fashion Design",
    "Advanced Tailoring",
    "Boutique Management",
    "Bridal Wear Design",
    "Fashion Illustration",
    "Luxury Styling"
  ]

  return (
    <section id="admissions" className="py-20 px-4 bg-transparent relative z-10">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-pink-300">
            Start Your Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-pink-400 mx-auto" />
          <p className="text-lg text-slate-300">
            Begin your fashion education experience with ZORROW
          </p>
        </div>

        {/* Glass Card */}
        <div className="glass rounded-3xl p-10 md:p-16 relative z-20">

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-center">
              {error}
            </div>
          )}

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone + Course */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Custom Course Dropdown */}
                <div className="space-y-2 relative z-30" ref={dropdownRef}>
                  <label className="block text-sm font-semibold text-slate-300">
                    Interested Course
                  </label>

                  <button
                    type="button"
                    onClick={() => setIsOpen(prev => !prev)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-slate-100 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    {formData.course || "Select a course"}
                    <span className="text-pink-400">▾</span>
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 top-full z-[999] mt-2 w-full rounded-xl bg-slate-900 border border-pink-500/30 shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                      {courses.map(course => (
                        <div
                          key={course}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, course }))
                            setIsOpen(false)
                          }}
                          className="px-4 py-3 hover:bg-pink-500/20 cursor-pointer text-slate-200 transition-all"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-pink-500 hover:bg-pink-600 rounded-xl py-4 font-semibold text-black text-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? 'Sending...' : 'Start Your Fashion Journey'}
              </button>

              <p className="text-xs text-center text-slate-400">
                We'll contact you within 24 hours to discuss your application and next steps.
              </p>

            </form>
          ) : (
            <div className="text-center space-y-4 py-8">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-serif font-bold text-pink-300">
                Application Received!
              </h3>
              <p className="text-slate-300">
                Thank you for your interest in ZORROW School of Fashion.
                We'll be in touch soon.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}