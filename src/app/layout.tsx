import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cara Markets - UAE\'s Elite Forex Broker',
  description: 'Access global markets with 10,000+ CFD products and derivatives. Trade forex, indices, commodities, and shares with 30+ years of trusted expertise.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}