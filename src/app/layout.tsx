import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers/theme-provider'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akubuuza Farm Products - Fresh Eggs, Naturally',
  description: 'Premium fresh eggs from free-range chickens. Sustainable farming practices, family-owned farm committed to quality and freshness.',
  keywords: 'fresh eggs, free-range chickens, sustainable farming, organic eggs, farm products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Navigation />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}