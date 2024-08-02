'use client';
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-3 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Menifee Logistics" width={128} height={43} />
        </Link>
        <nav className="hidden md:flex space-x-5">
          <Link href="/" className="nav-link text-gray-800 text-sm">Home</Link>
          <Link href="/services" className="nav-link text-gray-800 text-sm">Services</Link>
          <Link href="/pricing" className="nav-link text-gray-800 text-sm">Pricing</Link>
          <Link href="/about" className="nav-link text-gray-800 text-sm">About Us</Link>
          <Link href="/contact" className="nav-link text-gray-800 text-sm">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col space-y-3 p-3">
            <Link href="/" className="nav-link text-gray-800 text-sm">Home</Link>
            <Link href="/services" className="nav-link text-gray-800 text-sm">Services</Link>
            <Link href="/pricing" className="nav-link text-gray-800 text-sm">Pricing</Link>
            <Link href="/about" className="nav-link text-gray-800 text-sm">About Us</Link>
            <Link href="/contact" className="nav-link text-gray-800 text-sm">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
