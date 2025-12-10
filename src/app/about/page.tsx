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
      <section className="page-hero">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading">
              About
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Operational leadership grounded in real experience. We&apos;ve built,
              scaled, and transformed organizations—and we bring that perspective
              to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading">
            Why &ldquo;The A Company&rdquo;?
          </h2>
          <p className="mt-6 text-brand-slate">
            The name reflects a simple belief: every organization deserves A-level
            operational leadership. Not the kind you read about in business books—the
            kind that shows up every day, rolls up its sleeves, and does the work.
          </p>
          <p className="mt-4 text-brand-slate">
            We founded The A Company because we kept seeing the same pattern: talented
            founders and executives stretched too thin, capable teams lacking coordination,
            potential unrealized because the operational infrastructure wasn&apos;t there.
          </p>
          <p className="mt-4 text-brand-slate">
            We knew we could help. Not with advice from the sidelines, but with hands-on
            leadership that makes a real difference.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-heading text-center mb-12">
            What We Bring
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading">Cross-Industry Experience</h3>
              <p className="mt-3 text-sm text-brand-slate">
                Technology, healthcare, financial services, manufacturing, professional
                services. Different contexts, but operational excellence translates.
              </p>
            </div>
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading">Full SDLC Expertise</h3>
              <p className="mt-3 text-sm text-brand-slate">
                Deep experience across the entire software development lifecycle—from
                product strategy to architecture to delivery to operations.
              </p>
            </div>
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading">Product & Technology</h3>
              <p className="mt-3 text-sm text-brand-slate">
                Hands-on experience building products and leading technology teams.
                We speak both business and engineering.
              </p>
            </div>
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading">Team Leadership</h3>
              <p className="mt-3 text-sm text-brand-slate">
                Built and led teams from startup to scale-up. Hiring, developing,
                and getting the best from people.
              </p>
            </div>
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading">Program Management</h3>
              <p className="mt-3 text-sm text-brand-slate">
                Complex initiatives, cross-functional coordination, and making
                things happen on time and on budget.
              </p>
            </div>
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading">Modern Capabilities</h3>
              <p className="mt-3 text-sm text-brand-slate">
                Hands-on experience with today&apos;s tools—including building production
                AI systems and intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading">
                How We Work
              </h2>
              <p className="mt-6 text-brand-slate">
                We believe operational leadership should be practical, not theoretical.
                Every engagement starts with understanding your specific situation—not
                applying a framework.
              </p>
              <p className="mt-4 text-brand-slate">
                We work embedded with your team, not from a distance. We take
                accountability for outcomes, not just deliverables. And we build
                capabilities that outlast our engagement.
              </p>
              <p className="mt-4 text-brand-slate">
                Our goal is always to make ourselves unnecessary—to leave your
                organization stronger and more capable than we found it.
              </p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-heading text-lg mb-6">Our Values</h3>
              <ul className="space-y-4 text-brand-slate">
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold">&#8226;</span>
                  <span><strong>Honesty over comfort.</strong> We&apos;ll tell you what you need to hear.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold">&#8226;</span>
                  <span><strong>Outcomes over activity.</strong> Results matter more than busywork.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold">&#8226;</span>
                  <span><strong>Sustainable over heroic.</strong> Systems beat sprints.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold">&#8226;</span>
                  <span><strong>Partnership over transaction.</strong> We&apos;re invested in your success.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-heading">
            Let&apos;s Talk
          </h2>
          <p className="mt-4 text-gray-300">
            Interested in working together? We&apos;d love to hear about
            what you&apos;re building.
          </p>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
