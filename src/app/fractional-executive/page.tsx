import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractional Executive | The A Company',
  description: 'Part-time C-suite leadership with full-time impact. Fractional COO and operational leadership for growing companies.',
}

export default function FractionalExecutive() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading">
              Fractional Executive
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              C-suite leadership without the full-time overhead. We embed with your
              team to drive operational excellence and build the infrastructure for scale.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading">
                Leadership That Ships
              </h2>
              <p className="mt-6 text-brand-slate">
                Many growing companies hit a ceiling. The founder is stretched thin across
                sales, product, and operations. The team is capable but lacks coordination.
                Things fall through the cracks.
              </p>
              <p className="mt-4 text-brand-slate">
                A fractional executive brings the operational horsepower to break through—without
                the cost or commitment of a full-time C-suite hire.
              </p>
              <p className="mt-4 text-brand-slate">
                We don&apos;t just advise. We operate. Leading teams, running meetings, making
                decisions, and being accountable for results.
              </p>
            </div>
            <div className="bg-brand-cream p-8">
              <h3 className="font-heading text-lg mb-6">What a Fractional Executive Does</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#10003;</span>
                  <span>Lead operational teams and cross-functional initiatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#10003;</span>
                  <span>Build and optimize business processes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#10003;</span>
                  <span>Own P&L accountability and financial discipline</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#10003;</span>
                  <span>Hire, develop, and performance-manage key roles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#10003;</span>
                  <span>Coordinate between departments and executives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#10003;</span>
                  <span>Manage vendor relationships and partnerships</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#10003;</span>
                  <span>Support M&A integration and major transitions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading text-center">
            Is This Right for You?
          </h2>
          <p className="mt-4 text-brand-slate text-center max-w-2xl mx-auto">
            Fractional executive leadership works best in specific situations:
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading text-brand-gold">$</span>
              </div>
              <h3 className="font-heading">Growing Companies</h3>
              <p className="mt-2 text-sm text-brand-slate">
                $5M–$100M in revenue, ready for operational maturity but not ready for a full COO.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading text-brand-gold">&#8593;</span>
              </div>
              <h3 className="font-heading">Scaling Transitions</h3>
              <p className="mt-2 text-sm text-brand-slate">
                Post-funding, post-acquisition, or any inflection point requiring operational lift.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading text-brand-gold">&#9733;</span>
              </div>
              <h3 className="font-heading">Founder-Led Businesses</h3>
              <p className="mt-2 text-sm text-brand-slate">
                Where the founder needs to focus on vision, sales, or product—not day-to-day ops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Capabilities - Subtle AI mention */}
      <section className="section-padding bg-brand-cream">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading text-center">
            Modern Operational Leadership
          </h2>
          <p className="mt-6 text-brand-slate text-center max-w-2xl mx-auto">
            We bring deep experience in product development, technology, and the full software
            lifecycle—along with hands-on capability in modern tools like intelligent automation.
            Where the right technology can reduce operational burden, we know how to evaluate,
            implement, and manage it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-heading">
            Let&apos;s Discuss Your Situation
          </h2>
          <p className="mt-4 text-gray-300">
            Every company is different. We&apos;ll start with a conversation to understand
            your challenges and see if fractional leadership is the right fit.
          </p>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Schedule a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
