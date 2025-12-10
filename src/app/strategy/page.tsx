import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategy | The A Company',
  description: 'Strategic planning and assessment that leads to action. Clear-eyed analysis of where you are and practical roadmaps to get where you need to go.',
}

export default function Strategy() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading">
              Strategy
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Strategic clarity that actually leads to action. We help you see
              your situation clearly and build practical roadmaps that get executed.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading">
                Strategy That Ships
              </h2>
              <p className="mt-6 text-brand-slate">
                Too many strategy engagements end with a beautiful deck that collects dust.
                We take a different approach: strategy inseparable from execution.
              </p>
              <p className="mt-4 text-brand-slate">
                Our strategic work begins with honest assessment—what&apos;s working, what isn&apos;t,
                and what the data actually says. From there, we build practical roadmaps with
                clear owners, timelines, and success metrics.
              </p>
              <p className="mt-4 text-brand-slate">
                And because we often stay on in operational roles, we stand behind our recommendations.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 border-l-4 border-brand-gold">
                <h3 className="font-heading">Assessment</h3>
                <p className="mt-2 text-sm text-brand-slate">
                  Honest evaluation of market position, operational capabilities,
                  financial health, and competitive dynamics.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-brand-gold">
                <h3 className="font-heading">Prioritization</h3>
                <p className="mt-2 text-sm text-brand-slate">
                  Ruthless focus on what matters most. We help you say no to
                  good ideas so you can execute great ones.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-brand-gold">
                <h3 className="font-heading">Roadmapping</h3>
                <p className="mt-2 text-sm text-brand-slate">
                  Concrete plans with milestones, owners, and accountability.
                  Strategy you can actually track progress against.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Areas */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-heading text-center mb-12">
            Strategic Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading text-lg">Growth Strategy</h3>
              <p className="mt-3 text-sm text-brand-slate">
                New markets, new products, new revenue streams. We help you identify
                and prioritize the highest-impact growth opportunities.
              </p>
            </div>
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading text-lg">Operational Strategy</h3>
              <p className="mt-3 text-sm text-brand-slate">
                Building the infrastructure to scale. From team structure to
                process design to technology investments.
              </p>
            </div>
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading text-lg">Technology Strategy</h3>
              <p className="mt-3 text-sm text-brand-slate">
                Evaluating build vs. buy, modernization initiatives, and where
                technology can create competitive advantage—including AI where it makes sense.
              </p>
            </div>
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading text-lg">Product Strategy</h3>
              <p className="mt-3 text-sm text-brand-slate">
                Roadmap prioritization, market positioning, and building products
                that customers actually want and will pay for.
              </p>
            </div>
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading text-lg">Partnership Strategy</h3>
              <p className="mt-3 text-sm text-brand-slate">
                Identifying, evaluating, and structuring partnerships that
                accelerate your business goals.
              </p>
            </div>
            <div className="p-6 bg-brand-cream">
              <h3 className="font-heading text-lg">Turnaround Planning</h3>
              <p className="mt-3 text-sm text-brand-slate">
                When things aren&apos;t working, clear-eyed assessment and
                pragmatic plans to get back on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-heading">
            Need Strategic Clarity?
          </h2>
          <p className="mt-4 text-gray-300">
            Sometimes you need an outside perspective to see your situation clearly.
            Let&apos;s talk about what you&apos;re facing.
          </p>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
