import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Systems | The A Company',
  description: 'Systems and Process Consulting. Designing and integrating the systems you need to scale while maintaining an agile, innovation-driven culture.',
}

export default function Systems() {
  return (
    <>
      {/* Hero */}
      <section 
        className="relative pt-20 min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')`,
        }}
      >
        <div className="text-center text-white px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-heading font-light tracking-wide">
            Systems and Process Consulting
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <p className="text-lg font-light leading-relaxed tracking-wide text-center mb-12">
            Designing and integrating the systems you need to scale, while maintaining
            an agile, innovation-driven culture and motivated team.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-heading font-normal tracking-wide mb-4">
                Areas of Focus
              </h2>
              <ul className="space-y-3 text-brand-gray">
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Planning structure and process design
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  System and process transformation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Performance management systems
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Cross-functional alignment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Technology evaluation and implementation
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-normal tracking-wide mb-4">
                Our Approach
              </h2>
              <p className="text-brand-gray leading-relaxed">
                We don&apos;t believe in one-size-fits-all solutions. We work to understand
                your unique context, culture, and constraints to design systems that your
                team will actually use—and that will scale with you.
              </p>
              <p className="text-brand-gray leading-relaxed mt-4">
                Where appropriate, we leverage modern tools including intelligent automation
                to reduce manual burden and improve consistency—always in service of your
                team&apos;s effectiveness, not technology for its own sake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-lightGray">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-heading font-light tracking-wide">
            Ready to build systems that scale?
          </h2>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
