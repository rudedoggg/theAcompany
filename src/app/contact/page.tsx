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

  return (
    <>
      {/* Hero */}
      <section 
        className="relative pt-20 min-h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')`,
        }}
      >
        <div className="text-center text-white px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-heading font-light tracking-wide">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          {submitted ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-heading font-light tracking-wide mb-4">
                Thank you for reaching out
              </h2>
              <p className="text-brand-gray">
                We&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <p className="text-lg font-light leading-relaxed tracking-wide">
                  Ready to discuss how we can help? Fill out the form below or reach out directly.
                </p>
                <p className="mt-4">
                  <a 
                    href="mailto:info@theAcompany.com" 
                    className="text-brand-red hover:underline"
                  >
                    info@theAcompany.com
                  </a>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-brand-tan focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-brand-tan focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brand-charcoal mb-2">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-brand-tan focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-2">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-brand-tan focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-brand-lightGray">
        <div className="container-narrow">
          <h2 className="text-xl font-heading font-light tracking-wide text-center mb-8">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-heading font-light text-brand-tan mb-2">1</div>
              <h3 className="font-heading font-normal tracking-wide mb-2">Quick Response</h3>
              <p className="text-sm text-brand-gray">
                We&apos;ll respond within one business day
              </p>
            </div>
            <div>
              <div className="text-3xl font-heading font-light text-brand-tan mb-2">2</div>
              <h3 className="font-heading font-normal tracking-wide mb-2">Discovery Call</h3>
              <p className="text-sm text-brand-gray">
                A brief conversation to understand your situation
              </p>
            </div>
            <div>
              <div className="text-3xl font-heading font-light text-brand-tan mb-2">3</div>
              <h3 className="font-heading font-normal tracking-wide mb-2">Clear Next Steps</h3>
              <p className="text-sm text-brand-gray">
                Honest assessment of how we can help
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
