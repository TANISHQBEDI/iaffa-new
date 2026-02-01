import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IAFFA - International Arab Film Festival of Australia',
  description: 'Celebrating the richness and diversity of Arab cinema in Australia. Join us for an unforgettable celebration of Arab storytelling.',
  keywords: ['Arab cinema', 'film festival', 'Australia', 'IAFFA', 'Arab filmmakers', 'cultural events'],
  openGraph: {
    title: 'International Arab Film Festival of Australia',
    description: 'Celebrating the richness and diversity of Arab cinema in Australia',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
