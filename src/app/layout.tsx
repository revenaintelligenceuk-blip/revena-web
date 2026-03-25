import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://revena.ai'),
  title: 'RVNA Intelligence | Strategic Revenue Recovery for UK Service Businesses',
  description: 'RVNA Intelligence helps UK service businesses eliminate 20-45% revenue leakage through the RVNA Framework. Elite strategic advisory and operational infrastructure.',
  keywords: 'Strategic Revenue Recovery, Revenue Leakage UK, Operational Infrastructure, RVNA Framework, Business Growth Advisory, UK Service Business Automation, Lead Capture Systems',
  authors: [{ name: 'RVNA Intelligence' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://revena.ai/',
    title: 'RVNA Intelligence | Strategic Revenue Recovery',
    description: 'Eliminate revenue leakage. Strategic advisory and operational infrastructure for high-growth UK service businesses.',
    images: [{ url: 'https://revena.ai/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RVNA Intelligence | Strategic Revenue Recovery',
    description: 'Eliminate revenue leakage through the RVNA Framework and intelligent operational infrastructure.',
    images: ['https://revena.ai/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F1E8' },
    { media: '(prefers-color-scheme: dark)', color: '#0E1F3D' },
  ],
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
      <body className="min-h-screen selection:bg-navy selection:text-cream bg-cream text-navy antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "RVNA Intelligence",
              "url": "https://revena.ai",
              "logo": "https://revena.ai/favicon.png",
              "description": "Strategic revenue recovery and operational infrastructure for high-growth UK service businesses.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "UK"
              },
              "priceRange": "$$$"
            })
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
