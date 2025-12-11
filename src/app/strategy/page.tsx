import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategy | The A Company',
  description: 'Strat PaaS™ - Strategy Partner as a Service. An informed and independent partner providing insight, experience, and expertise for critical decisions.',
}

export default function Strategy() {
  return (
    <>
      {/* Hero */}
      <section 
        className="relative pt-20 min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')`,
        }}
      >
        <div className="text-center text-white px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-heading font-light tracking-wide">
            Strat PaaS™
          </h1>
          <p className="mt-2 text-lg font-light">
            Strategy Partner as a Service
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <p className="text-lg font-light leading-relaxed tracking-wide text-center mb-12">
            An informed and independent partner at the table providing the insight,
            experience, and expertise you need when working through the most critical decisions.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-heading font-normal tracking-wide mb-4">
                What We Offer
              </h2>
              <ul className="space-y-3 text-brand-gray">
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Strategic planning and facilitation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Market analysis and competitive positioning
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Growth strategy and roadmap development
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  M&A strategy and due diligence support
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Board and investor communications
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-normal tracking-wide mb-4">
                How It Works
              </h2>
              <p className="text-brand-gray leading-relaxed">
                Unlike traditional consulting engagements, Strat PaaS provides ongoing
                strategic partnership. We become an extension of your leadership team,
                available when you need us for the decisions that matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-lightGray">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-heading font-light tracking-wide">
            Ready to strengthen your strategic capabilities?
          </h2>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
