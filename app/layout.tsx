import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ScrollMotion } from '@/components/scroll-motion'

export const metadata: Metadata = {
  title: 'GSS Dumpsters | Same-Day Roll-Off Dumpster Rental in Houston',
  description: 'Flat-rate roll-off dumpster rentals delivered same day across Houston, Katy, Cypress, Bellville and surrounding Texas communities.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffb000',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased"><ScrollMotion />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
