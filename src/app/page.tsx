import Link from 'next/link'

const services = [
  {
    title: 'Fractional Executive',
    description: 'Part-time C-suite leadership with full-time impact. We integrate with your team to drive operational excellence without the overhead of a full-time hire.',
    href: '/fractional-executive',
  },
  {
    title: 'Strategy',
    description: 'Clear-eyed assessment of where you are, where you need to go, and the practical steps to get there. Strategy that actually gets executed.',
    href: '/strategy',
  },
  {
    title: 'Systems',
    description: 'Operational infrastructure that scales. We build processes, tools, and frameworks that let your organization run smoothly—even when you\'re not watching.',
    href: '/systems',
  },
  {
    title: 'Coaching',
    description: 'One-on-one guidance for founders and executives navigating growth, transition, or transformation. Honest perspective from someone who\'s been there.',
    href: '/coaching',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-brand-navy text-white">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
              Escape crisis mode.<br />
              <span className="text-brand-gold">Build what lasts.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              Fractional executive leadership for founders and teams ready to move
              from firefighting to building sustainable organizational health.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
              </Link>
              <Link href="/about" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-navy">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading">How We Help</h2>
            <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
              Hands-on operational leadership, not just advice. We roll up our sleeves
              and work alongside your team to create real change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 bg-white border border-gray-100 hover:border-brand-gold hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-heading text-brand-navy group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-brand-slate">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-brand-gold font-medium">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-heading">
            The Operator You&apos;ve Been Looking For
          </h2>
          <p className="mt-6 text-lg text-brand-slate">
            Founders and senior executives often handle critical, time-sensitive tasks—sales,
            fundraising, product direction—but lack a trusted operator focused on
            organizational health. The kind of work that requires constant tending to avoid crisis.
          </p>
          <p className="mt-4 text-lg text-brand-slate">
            That&apos;s where we come in. We bring decades of cross-industry operational
            experience to bear on the challenges keeping you up at night.
          </p>
        </div>
      </section>

      {/* Approach Section - Subtle AI mention */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading">
                Modern Tools, Timeless Principles
              </h2>
              <p className="mt-6 text-brand-slate">
                Good operations haven&apos;t changed: clear accountability, sustainable processes,
                the right people in the right roles. What has changed is what&apos;s possible.
              </p>
              <p className="mt-4 text-brand-slate">
                We bring hands-on experience building modern operational systems—including
                intelligent automation where it creates real value. Not because it&apos;s trendy,
                but because the right tools let your team focus on what matters.
              </p>
              <Link href="/systems" className="mt-8 btn-secondary inline-block">
                Explore Our Approach
              </Link>
            </div>
            <div className="bg-white p-8 border border-gray-100">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-gold/20 text-brand-gold flex items-center justify-center font-heading font-bold">1</span>
                  <div>
                    <h4 className="font-heading font-medium">Hands-On Leadership</h4>
                    <p className="text-sm text-brand-slate mt-1">We operate, not just advise. Embedded in your team.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-gold/20 text-brand-gold flex items-center justify-center font-heading font-bold">2</span>
                  <div>
                    <h4 className="font-heading font-medium">Systems Thinking</h4>
                    <p className="text-sm text-brand-slate mt-1">Sustainable processes over quick fixes.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-gold/20 text-brand-gold flex items-center justify-center font-heading font-bold">3</span>
                  <div>
                    <h4 className="font-heading font-medium">Modern Capabilities</h4>
                    <p className="text-sm text-brand-slate mt-1">Including intelligent automation where it delivers ROI.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-gold/20 text-brand-gold flex items-center justify-center font-heading font-bold">4</span>
                  <div>
                    <h4 className="font-heading font-medium">Measurable Outcomes</h4>
                    <p className="text-sm text-brand-slate mt-1">We stand behind results, not just recommendations.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-heading">
            Ready to Build Something Sustainable?
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Let&apos;s talk about where you are, where you want to go, and whether we&apos;re the right fit.
          </p>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
