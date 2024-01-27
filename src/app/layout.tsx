"use client";
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation'
import './globals.css';
import './theme.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAdminPanel, setIsAdminPanel] = useState(true);
  const pathname =usePathname()
  useEffect(() => {
    setIsAdminPanel(pathname.includes('/admin'));
  }, [pathname]); 

  return (
    <html lang="en">
      <head>
        <title>eblingo</title>
        <link rel="icon" href="/favicon.ico" type="image/png/ico" sizes="32x32" />
      </head>
      <body className={inter.className}>
        {!isAdminPanel && <Navbar />}
        {children}
        {!isAdminPanel && <Footer />}
      </body>
    </html>
  );
}
