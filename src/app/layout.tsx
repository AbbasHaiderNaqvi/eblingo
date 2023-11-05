import './globals.css'
import type { Metadata } from 'next'
import { Inter,Poppins } from 'next/font/google'
import './theme.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const font = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400','500', '600', '700', '800','900'] }); // Add other weight values as needed

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
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
