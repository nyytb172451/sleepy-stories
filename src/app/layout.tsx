import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Snoozy Stories — Free Bedtime Stories for Kids',
  description: 'Beautiful illustrated bedtime stories for toddlers and early readers. Free, calming stories to help your little ones drift off to sleep.',
  keywords: 'bedtime stories, kids stories, toddler stories, free bedtime stories, illustrated stories, sleep stories',
  verification: {
    google: '2FesD6q_Q979KI-Lz8jpNRyeySDCrEfXdK7tMYIH0O4',
  },
  other: {
    'google-adsense-account': 'ca-pub-9732794876616434',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6369XRC5DD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6369XRC5DD');
          `}
        </Script>
      </head>
      <body className={nunito.className}>
        <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900">
          <header className="border-b border-white/10">
            <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
              <a href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-3xl">🌙</span>
                <span className="hidden sm:inline">Snoozy Stories</span>
              </a>
              <div className="flex gap-4 sm:gap-6 text-purple-200 text-sm sm:text-base">
                <a href="/stories" className="hover:text-white transition">A-Z</a>
                <a href="/browse" className="hover:text-white transition">Browse</a>
                <a href="/submit" className="hover:text-white transition flex items-center gap-1">
                  <span>💡</span>
                  <span className="hidden sm:inline">Submit Idea</span>
                </a>
                <a href="/search" className="hover:text-white transition flex items-center gap-1">
                  <span>🔍</span>
                  <span className="hidden sm:inline">Search</span>
                </a>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="border-t border-white/10 mt-20">
            <div className="max-w-5xl mx-auto px-4 py-8 text-center text-purple-300/60 text-sm">
              <p>© 2026 Snoozy Stories. Sweet dreams! 🌟</p>
              <p className="mt-2">Free bedtime stories for toddlers and early readers.</p>
              <div className="mt-4 flex justify-center gap-6">
                <a href="/about" className="hover:text-white transition">About</a>
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
