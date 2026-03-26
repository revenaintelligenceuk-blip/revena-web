import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://revena.ai'),
  title: 'RVNA Intelligence | Eliminate Revenue Leakage | Strategic Advisory',
  description: 'RVNA Intelligence builds intelligent systems to recover lost revenue for UK service businesses. Eliminate missed calls, slow responses, and broken follow-up.',
  keywords: 'Revenue Recovery, AI Lead Capture, Strategic Advisory, Clinic Automation, Business Intelligence UK, RVNA Intelligence',
  authors: [{ name: 'RVNA Intelligence' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://revena.ai/',
    title: 'RVNA Intelligence | Strategic Revenue Recovery',
    description: 'Recover 20-45% of inbound revenue with automated capture and conversion systems.',
    images: [{ url: 'https://revena.ai/og-image.jpg' }],
    locale: 'en_GB',
    siteName: 'RVNA Intelligence',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RVNA Intelligence | Strategic Revenue Recovery',
    description: 'Eliminate revenue leakage with bespoke AI ecosystems.',
    images: ['https://revena.ai/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#EBDDCB', // Updated to Cream
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen antialiased bg-cream">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
