import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './theme.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Drawer } from 'antd';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

// const pop = Poppins({ subsets: ['latin'] })

// const font = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400','500', '600', '700', '800','900'] }); // Add other weight values as needed
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'eblingo',
  description: 'Agency Service',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/png/ico" sizes="32x32" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
