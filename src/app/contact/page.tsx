'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send, Music, Calendar, Users } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setFormData({ name: '', email: '', subject: 'general', message: '' })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const getSubjectPlaceholder = () => {
    switch(formData.subject) {
      case 'booking':
        return 'Please provide details about your event: date, location, type of performance...'
      case 'media':
        return 'Tell us about your publication, interview format, and timeline...'
      case 'collaboration':
        return 'Describe your collaboration idea and background...'
      default:
        return 'How can we help you today?'
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(15,75%,55%)] to-[hsl(25,80%,60%)]" />
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-4 text-white text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                GET IN <span className="text-[hsl(42,88%,75%)]">TOUCH</span>
              </h1>
              <p className="text-xl md:text-2xl font-light">
                Let's Create Beautiful Music Together
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-[hsl(220,60%,20%)] mb-8">
                  Let's Connect
                </h2>

                <p className="text-gray-600 mb-8 text-lg">
                  Whether you're looking to book a performance, arrange an interview,
                  or explore collaboration opportunities, I'd love to hear from you.
                </p>

                {/* Contact Cards */}
                <div className="space-y-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[hsl(220,60%,20%)] rounded-full flex items-center justify-center mr-4">
                        <Calendar className="text-[hsl(42,88%,75%)]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[hsl(220,60%,20%)] mb-2">BOOKINGS & PERFORMANCES</h3>
                        <p className="text-gray-600 mb-2">For concert bookings, festival appearances, and private events.</p>
                        <p className="text-[hsl(15,75%,55%)] font-semibold">booking@monicadenisse.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[hsl(220,60%,20%)] rounded-full flex items-center justify-center mr-4">
                        <Users className="text-[hsl(42,88%,75%)]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[hsl(220,60%,20%)] mb-2">MEDIA & INTERVIEWS</h3>
                        <p className="text-gray-600 mb-2">Press inquiries, interviews, and media collaborations.</p>
                        <p className="text-[hsl(15,75%,55%)] font-semibold">media@monicadenisse.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[hsl(220,60%,20%)] rounded-full flex items-center justify-center mr-4">
                        <Music className="text-[hsl(42,88%,75%)]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[hsl(220,60%,20%)] mb-2">MUSICAL COLLABORATIONS</h3>
                        <p className="text-gray-600 mb-2">Songwriting, duets, and artistic partnerships.</p>
                        <p className="text-[hsl(15,75%,55%)] font-semibold">music@monicadenisse.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold text-[hsl(220,60%,20%)] mb-4">Direct Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone size={20} className="text-[hsl(15,75%,55%)] mr-3" />
                      <span className="text-gray-700">+52 55 1234 5678</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={20} className="text-[hsl(15,75%,55%)] mr-3" />
                      <span className="text-gray-700">info@monicadenisse.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={20} className="text-[hsl(15,75%,55%)] mr-3" />
                      <span className="text-gray-700">Guadalajara, Jalisco, México</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-[hsl(220,60%,20%)] mb-6">Send a Message</h3>

                  {isSubmitted && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <p className="text-green-800">
                        ¡Gracias! Your message has been sent successfully. I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[hsl(220,60%,20%)] font-semibold mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[hsl(15,75%,55%)] focus:ring-2 focus:ring-[hsl(15,75%,55%)] focus:ring-opacity-20"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-[hsl(220,60%,20%)] font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[hsl(15,75%,55%)] focus:ring-2 focus:ring-[hsl(15,75%,55%)] focus:ring-opacity-20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[hsl(220,60%,20%)] font-semibold mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[hsl(15,75%,55%)] focus:ring-2 focus:ring-[hsl(15,75%,55%)] focus:ring-opacity-20"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking & Performances</option>
                        <option value="media">Media & Interviews</option>
                        <option value="collaboration">Musical Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[hsl(220,60%,20%)] font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[hsl(15,75%,55%)] focus:ring-2 focus:ring-[hsl(15,75%,55%)] focus:ring-opacity-20 resize-vertical"
                        placeholder={getSubjectPlaceholder()}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[hsl(42,88%,75%)] text-[hsl(220,60%,20%)] px-8 py-4 rounded-lg font-semibold hover:bg-[hsl(42,88%,80%)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isLoading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}