import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './theme.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eblingo',
  description: 'Agency Service',
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
