import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Menifee 3PL - Your Trusted Logistics Partner',
  description: 'Menifee 3PL offers comprehensive 3PL/4PL services, including discounted shipping, storage, pick and pack, and fulfillment solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
