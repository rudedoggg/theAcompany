import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | The A Company',
  description: 'Decades of cross-industry operational experience, helping founders and teams build sustainable organizational health.',
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section 
        className="relative pt-20 min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')`,
        }}
      >
        <div className="text-center text-white px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-heading font-light tracking-wide">
            About
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm aspect-[3/4] bg-gray-200 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-lg font-light leading-relaxed tracking-wide mb-6">
                As an executive, I came to realize the critical value of having an external
                partner to support my decision making, to act as a guide for my own development,
                and provide immediate access to expert resources that could be called upon
                in the most critical moments.
              </p>
              <p className="text-lg font-light leading-relaxed tracking-wide mb-6">
                I&apos;ve now dedicated my time to providing that for other leaders looking
                to reach their potential.
              </p>

              <h2 className="text-xl font-heading font-normal tracking-wide mt-8 mb-4">
                Background
              </h2>
              <ul className="space-y-3 text-brand-gray">
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  25+ years of cross-industry operational experience
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Product development and technology leadership
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Program and project management expertise
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Deep experience across the full software development lifecycle
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red">•</span>
                  Hands-on builder of modern operational systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-brand-lightGray">
        <div className="container-narrow">
          <h2 className="text-2xl font-heading font-light tracking-wide text-center mb-12">
            How We Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-heading font-normal tracking-wide mb-3">
                Hands-On
              </h3>
              <p className="text-sm text-brand-gray">
                We operate alongside you, not just advise from the sidelines.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-normal tracking-wide mb-3">
                Honest
              </h3>
              <p className="text-sm text-brand-gray">
                We tell you what you need to hear, not just what you want to hear.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-normal tracking-wide mb-3">
                Accountable
              </h3>
              <p className="text-sm text-brand-gray">
                We stand behind our work and measure success by your outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-heading font-light tracking-wide">
            Let&apos;s discuss how we can help
          </h2>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
