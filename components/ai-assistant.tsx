'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

type Message = {
  type: 'user' | 'bot'
  text: string
}

const assistantResponses = {
  greeting:
    "Hello! I'm your ZORROW Fashion Assistant. Ask me about any course, career scope or admissions ✨",

  fashionDesign:
    "Fashion Design is the art of creating clothing and fashion concepts.\n\nYou will learn:\n• Sketching\n• Fabric knowledge\n• Pattern making\n• Garment construction\n• Trend forecasting\n\nCareer Paths:\n• Fashion Designer\n• Brand Owner\n• Celebrity Stylist\n• Luxury Consultant",

  advancedTailoring:
    "Advanced Tailoring focuses on professional garment construction.\n\n• Structured garments\n• Cutting mastery\n• Premium finishing\n• Boutique-level tailoring",

  boutiqueManagement:
    "Boutique Management teaches you how to start and run a successful fashion business.\n\n• Inventory management\n• Pricing strategy\n• Branding\n• Customer psychology\n• Marketing & growth",

  bridalWear:
    "Bridal Wear Design specializes in wedding couture.\n\n• Embroidery techniques\n• Luxury fabrics\n• Lehenga & gown construction\n• Custom bridal styling",

  fashionIllustration:
    "Fashion Illustration focuses on professional sketching.\n\n• Body proportions\n• Garment detailing\n• Digital fashion art\n• Portfolio development",

  luxuryStyling:
    "Luxury Styling teaches personal & celebrity styling.\n\n• Wardrobe curation\n• Luxury branding\n• Fashion psychology\n• Premium styling strategies",

  benefits:
    "Benefits of studying at ZORROW:\n\n• Industry expert mentors\n• Practical hands-on training\n• Portfolio development\n• Business knowledge\n• 100% placement assistance\n• Opportunity to launch your own brand 💎",

  admission:
    "Simply fill the admission form and our team will contact you within 24 hours with complete guidance.",

  duration:
    "Course durations range from 3–6 months depending on the selected program.",

  placement:
    "We provide 100% placement assistance. Many students join premium brands or launch their own labels.",

  default:
    "You can ask about Fashion Design, Bridal Wear, Boutique Management, Advanced Tailoring, Illustration, Luxury Styling, admissions or career scope."
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)

  /* Load Chat Memory */
  useEffect(() => {
    const saved = localStorage.getItem('zorrow_ai_chat')
    if (saved) {
      setMessages(JSON.parse(saved))
    } else {
      setMessages([{ type: 'bot', text: assistantResponses.greeting }])
    }
  }, [])

  /* Save Chat Memory */
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('zorrow_ai_chat', JSON.stringify(messages))
    }
  }, [messages])

  /* Auto Scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const getResponse = (input: string): string => {
    const lower = input.toLowerCase()

    if (lower.includes('fashion design')) return assistantResponses.fashionDesign
    if (lower.includes('tailoring')) return assistantResponses.advancedTailoring
    if (lower.includes('boutique')) return assistantResponses.boutiqueManagement
    if (lower.includes('bridal')) return assistantResponses.bridalWear
    if (lower.includes('illustration')) return assistantResponses.fashionIllustration
    if (lower.includes('styling')) return assistantResponses.luxuryStyling
    if (lower.includes('benefit') || lower.includes('career')) return assistantResponses.benefits
    if (lower.includes('admission') || lower.includes('apply')) return assistantResponses.admission
    if (lower.includes('duration')) return assistantResponses.duration
    if (lower.includes('placement')) return assistantResponses.placement

    return assistantResponses.default
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = { type: 'user', text: inputValue }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        type: 'bot',
        text: getResponse(userMessage.text)
      }

      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 900)
  }

  return (
    <div
      className="
      glass
      rounded-3xl
      w-[94vw]
      max-w-[380px]
      md:w-[380px]
      shadow-2xl
      flex
      flex-col
      h-[70vh]
      max-h-[520px]
      overflow-hidden
      border border-pink-500/20
      backdrop-blur-xl
      transition-all duration-300
    "
    >

      {/* HEADER */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-pink-500/30 bg-gradient-to-r from-pink-500/20 to-pink-400/10">
        <Image
          src="/logo.png"
          alt="ZORROW"
          width={68}
          height={68}
          className="object-contain"
        />
        <div>
          <h3 className="font-serif font-bold text-pink-300 tracking-wide text-sm">
            ZORROW AI
          </h3>
          <p className="text-[11px] text-pink-200/70">
            Premium Fashion Guide
          </p>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] whitespace-pre-line px-4 py-3 rounded-2xl text-[13px] leading-relaxed transition-all duration-300 ${
                message.type === 'user'
                  ? 'bg-gradient-to-br from-pink-500 to-pink-600 text-black rounded-br-none shadow-lg'
                  : 'bg-white/10 text-slate-200 rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-none text-slate-300 text-[13px] animate-pulse">
              ZORROW AI is typing...
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="border-t border-pink-500/30 p-3 bg-slate-900/40">
        <div className="flex gap-2">

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about courses..."
            className="flex-1 px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 text-[13px] transition-all duration-300"
          />

          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 rounded-xl px-4 py-2 flex items-center justify-center shadow-md transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  )
}
