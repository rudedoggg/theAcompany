import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Work | The A Company',
  description: 'How we partner with leaders to address the unique challenges of growth and leadership.',
}

const caseStudies = [
  {
    title: 'Technology Startup Scale-Up',
    description: 'Helped a Series B startup establish operational infrastructure to support 3x growth in 18 months.',
    outcomes: ['Implemented scalable processes', 'Built leadership team', 'Reduced operational friction'],
  },
  {
    title: 'Family Business Transition',
    description: 'Guided a second-generation family business through leadership transition and modernization.',
    outcomes: ['Succession planning', 'Governance structure', 'Strategic repositioning'],
  },
  {
    title: 'PE Portfolio Company',
    description: 'Served as fractional COO for a portfolio company during post-acquisition integration.',
    outcomes: ['Integration roadmap', 'Performance visibility', 'Team alignment'],
  },
]

export default function TheWork() {
  return (
    <>
      {/* Hero */}
      <section 
        className="relative pt-20 min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')`,
        }}
      >
        <div className="text-center text-white px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-heading font-light tracking-wide">
            The Work
          </h1>
          <p className="mt-4 text-lg font-light max-w-2xl">
            How we partner with leaders to navigate challenges and realize what&apos;s possible.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <p className="text-lg font-light leading-relaxed tracking-wide">
            Every engagement is unique, shaped by the specific challenges and opportunities
            our clients face. Here are some examples of the work we do.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-brand-lightGray">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white p-8">
                <h3 className="text-lg font-heading font-normal tracking-wide mb-4">
                  {study.title}
                </h3>
                <p className="text-sm text-brand-gray mb-4">
                  {study.description}
                </p>
                <ul className="text-sm text-brand-gray space-y-1">
                  {study.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <span className="text-brand-red">•</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-heading font-light tracking-wide">
            Ready to discuss your challenges?
          </h2>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
