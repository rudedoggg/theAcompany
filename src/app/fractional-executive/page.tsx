import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractional Executive | The A Company',
  description: 'Providing an experienced leadership bridge to your next destination. Fractional executive services for growing companies.',
}

export default function FractionalExecutive() {
  return (
    <>
      {/* Hero */}
      <section 
        className="relative pt-20 min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80')`,
        }}
      >
        <div className="text-center text-white px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-heading font-light tracking-wide">
            Fractional Executive
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <p className="text-lg font-light leading-relaxed tracking-wide text-center mb-12">
            Providing an experienced leadership bridge to your next destination.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-heading font-normal tracking-wide mb-4">
                When You Need Us
              </h2>
              <ul className="space-y-3 text-brand-gray">
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Leadership gap during search or transition
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Scaling beyond founder-led operations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Post-acquisition integration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Turnaround or transformation initiatives
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Need for senior operational expertise without full-time commitment
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-normal tracking-wide mb-4">
                How We Work
              </h2>
              <p className="text-brand-gray leading-relaxed">
                We integrate with your team—attending leadership meetings, driving
                operational initiatives, and building capabilities alongside your people.
                Not as consultants observing from the outside, but as operators accountable
                for results.
              </p>
              <p className="text-brand-gray leading-relaxed mt-4">
                Engagements are typically 2-4 days per week, scaled to your needs.
                We stay until you&apos;ve built the internal capability to take over,
                or until you&apos;ve found the right full-time leader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-lightGray">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-heading font-light tracking-wide">
            Need experienced leadership support?
          </h2>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
