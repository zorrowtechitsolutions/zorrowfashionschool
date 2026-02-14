'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-transparent to-slate-950/80 border-t border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-">

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-center md:text-left">

          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                <span className="text-xl font-serif font-bold text-pink-300">Z</span>
              </div>
              <span className="text-lg font-serif font-bold text-pink-300">ZORROW</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Empowering the next generation of fashion designers and innovators through elite education and mentorship.
            </p>

            <div className="flex gap-3 pt-2 justify-center md:justify-start">
              {['📘','📷','🐦'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass hover:shadow-[0_0_15px_rgba(245,182,210,0.4)] flex items-center justify-center hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-lg"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-serif font-bold text-pink-300 text-lg">Courses</h4>
            <ul className="space-y-2">
              {[
                'Fashion Design',
                'Advanced Tailoring',
                'Boutique Management',
                'Bridal Wear Design',
                'Fashion Illustration',
                'Luxury Styling'
              ].map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    className="text-sm text-slate-400 hover:text-pink-300 transition-colors duration-300"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-serif font-bold text-pink-300 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Apply Now', href: '#admissions' },
                { name: 'Contact Us', href: '#' },
                { name: 'FAQs', href: '#' },
                { name: 'Privacy Policy', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-pink-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-serif font-bold text-pink-300 text-lg">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-slate-500 mb-1">Address</p>
                <p className="text-slate-400">123 Fashion Ave, Design District</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Email</p>
                <a
                  href="mailto:info@zorrow.edu"
                  className="text-slate-400 hover:text-pink-300 transition-colors duration-300"
                >
                  info@zorrow.edu
                </a>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-slate-400 hover:text-pink-300 transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              © {currentYear} ZORROW School of Fashion. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-pink-300 transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-pink-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-300 transition-colors duration-300">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-10">
          <p className="text-lg font-serif italic text-pink-300">
            Design Your Dream, Stitch Your Future
          </p>
        </div>

      </div>
    </footer>
  )
}
