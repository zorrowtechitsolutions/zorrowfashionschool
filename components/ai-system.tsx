'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import AIAssistant from '@/components/ai-assistant'

export default function AISystem() {
  const [showAssistant, setShowAssistant] = useState(false)
  const assistantRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        assistantRef.current &&
        !assistantRef.current.contains(event.target as Node)
      ) {
        setShowAssistant(false)
      }
    }

    if (showAssistant) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showAssistant])

  return (
    <>
      {/* Assistant Window */}
      {showAssistant && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          
          {/* Overlay Blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" />

          {/* AI Box */}
          <div
            ref={assistantRef}
            className="relative w-full max-w-sm sm:max-w-md transition-all duration-300"
          >
            <AIAssistant />
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setShowAssistant(prev => !prev)}
        className="fixed bottom-8 right-8 z-[101]
        w-16 h-16 rounded-full
        flex items-center justify-center
         from-pink- to-pink-600
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
