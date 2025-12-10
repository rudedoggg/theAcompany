import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coaching | The A Company',
  description: 'Executive coaching for founders and leaders navigating growth, transition, or transformation.',
}

export default function Coaching() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading">
              Coaching
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              One-on-one guidance for founders and executives navigating growth,
              transition, or transformation. Honest perspective from someone who&apos;s been there.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading">
                A Thought Partner, Not a Guru
              </h2>
              <p className="mt-6 text-brand-slate">
                Leadership can be isolating. The higher you go, the fewer people you can
                be fully honest with. Board members have agendas. Employees need confidence.
                Friends don&apos;t always understand the context.
              </p>
              <p className="mt-4 text-brand-slate">
                Executive coaching provides something rare: a confidential space to think
                out loud with someone who understands the pressures you face.
              </p>
              <p className="mt-4 text-brand-slate">
                We bring decades of operational experience across industries, so our
                coaching is grounded in real-world business realities—not abstract
                frameworks or motivational platitudes.
              </p>
            </div>
            <div className="bg-brand-cream p-8">
              <h3 className="font-heading text-lg mb-6">Coaching Focus Areas</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#9679;</span>
                  <span><strong>Leadership transitions</strong> — stepping into new roles, expanding scope, or letting go</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#9679;</span>
                  <span><strong>Team dynamics</strong> — building, managing, and getting the best from your people</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#9679;</span>
                  <span><strong>Decision-making</strong> — working through high-stakes choices with clarity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#9679;</span>
                  <span><strong>Founder challenges</strong> — the unique pressures of building something from nothing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">&#9679;</span>
                  <span><strong>Work-life sustainability</strong> — performing at a high level without burning out</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading text-center mb-12">
            How Coaching Works
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-navy text-white flex items-center justify-center font-heading font-bold">
                1
              </div>
              <div>
                <h3 className="font-heading text-lg">Chemistry Conversation</h3>
                <p className="mt-2 text-brand-slate">
                  We start with a no-commitment conversation to understand what you&apos;re
                  facing and see if there&apos;s a fit. Coaching only works with trust and rapport.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-navy text-white flex items-center justify-center font-heading font-bold">
                2
              </div>
              <div>
                <h3 className="font-heading text-lg">Regular Sessions</h3>
                <p className="mt-2 text-brand-slate">
                  Typically bi-weekly or monthly, structured around your priorities.
                  Sessions are confidential and driven by what&apos;s most pressing for you.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-navy text-white flex items-center justify-center font-heading font-bold">
                3
              </div>
              <div>
                <h3 className="font-heading text-lg">Between-Session Support</h3>
                <p className="mt-2 text-brand-slate">
                  Challenges don&apos;t wait for scheduled meetings. Light-touch access
                  for when you need a quick sounding board or gut check.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-navy text-white flex items-center justify-center font-heading font-bold">
                4
              </div>
              <div>
                <h3 className="font-heading text-lg">Periodic Review</h3>
                <p className="mt-2 text-brand-slate">
                  Regular check-ins on whether the coaching is serving you. Adjust
                  the focus, cadence, or approach as your needs evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Leadership */}
      <section className="section-padding bg-brand-cream">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-heading">
            Leading in a Changing Landscape
          </h2>
          <p className="mt-6 text-brand-slate">
            Today&apos;s leaders face challenges that didn&apos;t exist a few years ago.
            Remote and hybrid teams. AI transforming every function. Faster cycle times
            and higher expectations. Our coaching helps you navigate this shifting
            terrain with confidence—separating signal from noise and focusing on
            what actually matters for your business.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-heading">
            Interested in Coaching?
          </h2>
          <p className="mt-4 text-gray-300">
            Let&apos;s have a conversation. No commitment—just a chance to see
            if there&apos;s a fit.
          </p>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Schedule an Intro Call
          </Link>
        </div>
      </section>
    </>
  )
}
