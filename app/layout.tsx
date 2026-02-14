import './globals.css'
import Navigation from '@/components/navigation'
import AISystem from '@/components/ai-system'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* GLOBAL HEADER — appears on ALL pages */}
        <Navigation />

        {/* Page Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* GLOBAL AI — appears on ALL pages */}
        <AISystem />

      </body>
    </html>
  )
}
