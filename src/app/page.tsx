'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const audiences = [
  {
    title: 'For Founders & Owners',
    image: '/images/founders.jpg',
    items: [
      'Leadership transitions',
      'Capital & Exit',
      'Strategy & Planning',
      'Co-founder challenges',
      'Financial & Performance Visibility',
    ],
  },
  {
    title: 'For Boards & Investors',
    image: '/images/boards.jpg',
    items: [
      'Develop & Augment Talent',
      'Performance Assessment',
      'Investment Decisions',
      'Fractional Executive',
    ],
  },
  {
    title: 'For Executives and Leaders',
    image: '/images/executives.jpg',
    items: [
      'Retreat Facilitation',
      'Communications & Culture',
      'Planning Structure & Process',
      'System & Process Transformation',
      'Team & Talent Development',
    ],
  },
]

const services = [
  {
    title: 'Strat PaaS™',
    description: 'Strategy Partner as a Service: An informed and independent partner at the table providing the insight, experience, and expertise you need when working through the most critical decisions.',
    icon: (
      <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    href: '/strategy',
  },
  {
    title: 'Systems and Process Consulting',
    description: 'Designing and integrating the systems you need to scale, while maintaining an agile, innovation driven culture and motivated team.',
    icon: (
      <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    href: '/systems',
  },
  {
    title: 'Coaching',
    description: 'The most powerful point of leverage in your business is making sure that you are reaching your potential. Coaching is a one on one developmental program designed to build your capacity and capability to excel.',
    icon: (
      <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
      </svg>
    ),
    href: '/coaching',
  },
  {
    title: 'Fractional Executive',
    description: 'Providing an experienced leadership bridge to your next destination.',
    icon: (
      <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    href: '/fractional-executive',
  },
]

const testimonials = [
  {
    quote: "He is a remarkable strategist, with a strong grasp of the underlying forces driving markets and consumer behavior. Chad can conceptually understand anything, even supremely geeky aspects of Technology, which enables him to bring his strategic insight to any area of the business.",
    author: "Founder & CTO",
  },
  {
    quote: "Working with The A Company transformed how we approach strategic planning. The combination of deep business acumen and hands-on execution support was exactly what we needed.",
    author: "CEO, Technology Startup",
  },
  {
    quote: "As an executive, I came to realize the critical value of having an external partner to support my decision making, to act as a guide for my own development.",
    author: "VP of Operations",
  },
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="relative pt-20 min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')`,
        }}
      >
        <div className="text-center text-white px-6 py-20">
          <h1 className="text-2xl md:text-3xl font-heading font-light tracking-wide">
            Partnering with leaders to
          </h1>
          <p className="text-2xl md:text-3xl font-heading font-light tracking-wide">
            help them achieve their vision.
          </p>
          <p className="mt-4 text-xl md:text-2xl font-heading font-light text-brand-red">
            You don&apos;t have to do this alone.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <p className="text-lg font-light leading-relaxed tracking-wide">
            We partner with Founders, Executives, Owners, and Boards to
            address the unique challenges of growth and leadership.
          </p>
          <p className="mt-6 text-lg font-light leading-relaxed tracking-wide">
            We help you navigate from where you are ..{' '}
            <span className="text-brand-red">to what is possible.</span>
          </p>
        </div>
      </section>

      {/* Audience Columns Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-12">
            {audiences.map((audience) => (
              <div key={audience.title} className="text-center">
                {/* Placeholder for headshot - circular image */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                </div>
                <h3 className="text-lg font-heading font-normal tracking-wide mb-4">
                  {audience.title}
                </h3>
                <ul className="text-sm text-brand-gray space-y-2">
                  {audience.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="section-padding bg-brand-lightGray">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-lg italic font-light leading-relaxed">
                &ldquo;As an executive, I came to realize the critical value of having
                an external partner to support my decision making, to act as a guide
                for my own development, and provide immediate access to expert resources
                that could be called upon in the most critical moments. I&apos;ve now
                dedicated my time to providing that for other leaders looking to reach
                their potential.&rdquo;
              </p>
            </div>
            <div className="flex justify-center">
              {/* Placeholder for founder photo */}
              <div className="w-64 h-80 bg-gray-300 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Engage Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-heading font-light tracking-wide text-center mb-16">
            Ways to Engage
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-normal tracking-wide group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="section-padding bg-brand-lightGray">
        <div className="container-wide">
          <h2 className="text-xl font-heading font-light tracking-wide mb-8">
            What you can expect....
          </h2>
          
          <div className="relative">
            <div className="flex items-center">
              {/* Previous Button */}
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 text-brand-gray hover:text-brand-charcoal transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Testimonial Content */}
              <div className="flex-1 px-8">
                <p className="text-base italic font-light leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </p>
                <p className="mt-4 text-sm text-brand-gray">
                  {testimonials[currentTestimonial].author}
                </p>
              </div>

              {/* Next Button */}
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 text-brand-gray hover:text-brand-charcoal transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-brand-charcoal' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-light tracking-wide">
            Book a Free Consultation
          </h2>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Book Here
          </Link>
        </div>
      </section>
    </>
  )
}
