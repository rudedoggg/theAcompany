import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coaching | The A Company',
  description: 'Executive coaching designed to build your capacity and capability to excel. One-on-one developmental programs for leaders.',
}

export default function Coaching() {
  return (
    <>
      {/* Hero */}
      <section 
        className="relative pt-20 min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')`,
        }}
      >
        <div className="text-center text-white px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-heading font-light tracking-wide">
            Coaching
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <p className="text-lg font-light leading-relaxed tracking-wide text-center mb-12">
            The most powerful point of leverage in your business is making sure that you
            are reaching your potential. Coaching is a one-on-one developmental program
            designed to build your capacity and capability to excel.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-heading font-normal tracking-wide mb-4">
                Who It&apos;s For
              </h2>
              <ul className="space-y-3 text-brand-gray">
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Founders navigating growth and leadership challenges
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Executives stepping into expanded roles
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Leaders facing significant transitions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  High-potential talent preparing for advancement
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-normal tracking-wide mb-4">
                The Coaching Experience
              </h2>
              <p className="text-brand-gray leading-relaxed">
                Our coaching engagements are structured yet flexible, tailored to your
                specific development needs. We combine regular sessions with real-time
                support during critical moments—because leadership challenges don&apos;t
                follow a schedule.
              </p>
              <p className="text-brand-gray leading-relaxed mt-4">
                You&apos;ll work with someone who has been in your shoes, who understands
                the pressures you face, and who can offer honest perspective grounded
                in real operational experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-lightGray">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-heading font-light tracking-wide">
            Ready to invest in your development?
          </h2>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
