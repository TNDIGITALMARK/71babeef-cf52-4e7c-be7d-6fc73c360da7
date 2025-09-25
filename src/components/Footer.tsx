'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <footer className="bg-[hsl(220,60%,20%)] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-[hsl(220,60%,30%)]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[hsl(42,88%,75%)] mb-4">
              SUBSCRIBE TO NEWSLETTER
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay connected with Mónica Denisse. Get the latest news about new releases,
              tour dates, and exclusive content delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[hsl(42,88%,75%)]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[hsl(42,88%,75%)] text-[hsl(220,60%,20%)] px-8 py-3 rounded-lg font-semibold hover:bg-[hsl(42,88%,80%)] transition-colors flex items-center justify-center"
                >
                  <Mail size={20} className="mr-2" />
                  SUBSCRIBE
                </button>
              </div>

              {isSubmitted && (
                <p className="text-[hsl(42,88%,75%)] mt-4">
                  ¡Gracias! You've been subscribed to our newsletter.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-[hsl(42,88%,75%)] mb-4">
              MÓNICA DENISSE
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Authentic Mexican music that celebrates our rich cultural heritage.
              From traditional rancheras to modern interpretations, experience the
              voice of México.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[hsl(220,60%,30%)] rounded-full flex items-center justify-center hover:bg-[hsl(42,88%,75%)] hover:text-[hsl(220,60%,20%)] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[hsl(220,60%,30%)] rounded-full flex items-center justify-center hover:bg-[hsl(42,88%,75%)] hover:text-[hsl(220,60%,20%)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[hsl(220,60%,30%)] rounded-full flex items-center justify-center hover:bg-[hsl(42,88%,75%)] hover:text-[hsl(220,60%,20%)] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[hsl(220,60%,30%)] rounded-full flex items-center justify-center hover:bg-[hsl(42,88%,75%)] hover:text-[hsl(220,60%,20%)] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[hsl(42,88%,75%)] font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[hsl(42,88%,75%)] transition-colors">Home</Link></li>
              <li><Link href="/discography" className="text-gray-300 hover:text-[hsl(42,88%,75%)] transition-colors">Discography</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[hsl(42,88%,75%)] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[hsl(42,88%,75%)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[hsl(42,88%,75%)] font-semibold mb-4">CONTACT</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Booking & Management</li>
              <li>info@monicadenisse.com</li>
              <li>+52 55 1234 5678</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[hsl(220,60%,30%)]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MÓNICA DENISSE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[hsl(42,88%,75%)] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[hsl(42,88%,75%)] text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}