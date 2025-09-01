import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Desarrollador Frontend | Ingeniero Informático',
  description: 'Portafolio de Manuel Prieto: desarrollador frontend especializado en React, Next.js y Tailwind CSS.',
  generator: 'v0.dev',
  authors: [{ name: 'Manuel Prieto', url: 'https://maplop-portfolio.vercel.app' }],
  keywords: ['portfolio', 'React', 'Next.js', 'Tailwind CSS', 'developer', 'frontend'],
  openGraph: {
    title: 'Desarrollador Frontend | Ingeniero Informático',
    description: 'Portafolio de Manuel Prieto: desarrollador frontend especializado en React, Next.js y Tailwind CSS.',
    url: 'https://maplop-portfolio.vercel.app',
    siteName: 'Manuel Prieto Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Manuel Prieto Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollador Frontend | Ingeniero Informático',
    description: 'Portafolio de Manuel Prieto: desarrollador frontend especializado en React, Next.js y Tailwind CSS.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body>
        {children}
      </body>
    </html>
  )
}
