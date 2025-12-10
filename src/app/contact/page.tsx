'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API endpoint
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading">
              Contact
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Ready to talk? We&apos;d love to hear about your situation and explore
              whether there&apos;s a fit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading">
                Start a Conversation
              </h2>
              <p className="mt-6 text-brand-slate">
                Every engagement starts with a conversation. Tell us a bit about
                your situation and what you&apos;re looking for. We&apos;ll get back to
                you within one business day.
              </p>
              <p className="mt-4 text-brand-slate">
                Not sure what you need? That&apos;s fine—often the best engagements
                start with a broad conversation about challenges and opportunities.
              </p>

              <div className="mt-12">
                <h3 className="font-heading text-lg">What to Expect</h3>
                <ul className="mt-4 space-y-3 text-brand-slate">
                  <li className="flex gap-3">
                    <span className="text-brand-gold">1.</span>
                    <span>We&apos;ll review your message and do some background research</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold">2.</span>
                    <span>We&apos;ll reach out to schedule a 30-minute intro call</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold">3.</span>
                    <span>On the call, we&apos;ll explore your situation and discuss fit</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-gold">4.</span>
                    <span>If there&apos;s mutual interest, we&apos;ll propose next steps</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl text-brand-gold">&#10003;</span>
                  </div>
                  <h3 className="font-heading text-2xl">Thank You</h3>
                  <p className="mt-4 text-brand-slate">
                    We&apos;ve received your message and will be in touch within
                    one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-navy mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your situation, challenges, or what you're looking for..."
                      className="w-full px-4 py-3 border border-gray-200 focus:border-brand-gold focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-center">
                    Send Message
                  </button>

                  <p className="text-xs text-brand-slate text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
