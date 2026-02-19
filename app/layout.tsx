import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A0A0A',
}

export const metadata: Metadata = {
  title: 'Auto Spec Detailing | Premium Car Detailing in Franschhoek',
  description: 'Professional mobile car detailing services in Franschhoek, Cape Town. Luxury and general vehicle detailing with premium finishes. We bring our own water and power. Book your appointment today.',
  keywords: ['car detailing', 'vehicle detailing', 'Franschhoek', 'car care', 'auto detailing', 'mobile detailing', 'car wash', 'Cape Town', 'ceramic coating', 'paint correction'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://autospecdetailing.com',
    siteName: 'Auto Spec Detailing',
    title: 'Auto Spec Detailing | Premium Mobile Detailing in Franschhoek',
    description: 'The showroom shine, delivered to your door. Premium mobile car detailing for luxury and general vehicles in Franschhoek and greater Cape Town.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased dark" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
