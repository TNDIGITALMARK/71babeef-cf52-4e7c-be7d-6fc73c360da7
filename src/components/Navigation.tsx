'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[hsl(220,60%,20%)] text-[hsl(42,88%,75%)] px-4 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold tracking-wide">
            MÓNICA DENISSE
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-[hsl(15,75%,55%)] transition-colors">
            HOME
          </Link>
          <Link href="/discography" className="hover:text-[hsl(15,75%,55%)] transition-colors">
            DISCOGRAPHY
          </Link>
          <Link href="/about" className="hover:text-[hsl(15,75%,55%)] transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-[hsl(15,75%,55%)] transition-colors">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="hover:text-[hsl(15,75%,55%)] transition-colors">
              HOME
            </Link>
            <Link href="/discography" className="hover:text-[hsl(15,75%,55%)] transition-colors">
              DISCOGRAPHY
            </Link>
            <Link href="/about" className="hover:text-[hsl(15,75%,55%)] transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="hover:text-[hsl(15,75%,55%)] transition-colors">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}