import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Systems | The A Company',
  description: 'Operational systems that scale. We build processes, tools, and frameworks that let your organization run smoothly.',
}

export default function Systems() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading">
              Systems
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Operational infrastructure that scales. We build the processes, tools, and
              frameworks that let your organization run smoothly—even when you&apos;re not watching.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-heading text-center">
            From Heroics to Systems
          </h2>
          <p className="mt-6 text-brand-slate text-center max-w-2xl mx-auto">
            Early-stage companies run on heroics. Key people working long hours, making
            things happen through sheer effort. But heroics don&apos;t scale.
          </p>
          <p className="mt-4 text-brand-slate text-center max-w-2xl mx-auto">
            Eventually, the heroes burn out, tribal knowledge walks out the door, and
            the company hits a ceiling. The path forward requires systems: documented
            processes, clear accountability, and tools that work.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-heading text-center mb-12">
            What We Build
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-100 hover:border-brand-gold transition-colors">
              <h3 className="font-heading text-xl">Process Infrastructure</h3>
              <p className="mt-4 text-brand-slate">
                Documented, repeatable processes for core business functions.
                Clear owners, defined inputs and outputs, measurable quality standards.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-slate">
                <li>• Operations playbooks and runbooks</li>
                <li>• Quality management systems</li>
                <li>• Escalation and exception handling</li>
                <li>• Onboarding and training programs</li>
              </ul>
            </div>
            <div className="p-8 border border-gray-100 hover:border-brand-gold transition-colors">
              <h3 className="font-heading text-xl">Performance Management</h3>
              <p className="mt-4 text-brand-slate">
                Metrics, dashboards, and accountability structures that keep the
                business on track without micromanagement.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-slate">
                <li>• KPI frameworks and dashboards</li>
                <li>• OKR implementation</li>
                <li>• Meeting rhythms and reporting cadences</li>
                <li>• Performance review systems</li>
              </ul>
            </div>
            <div className="p-8 border border-gray-100 hover:border-brand-gold transition-colors">
              <h3 className="font-heading text-xl">Technology & Tools</h3>
              <p className="mt-4 text-brand-slate">
                Selecting, implementing, and integrating the right tools for your
                operations. We help you avoid both over-engineering and under-investing.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-slate">
                <li>• Tool selection and vendor evaluation</li>
                <li>• Implementation and integration</li>
                <li>• Workflow automation</li>
                <li>• Data infrastructure and reporting</li>
              </ul>
            </div>
            <div className="p-8 border border-gray-100 hover:border-brand-gold transition-colors">
              <h3 className="font-heading text-xl">Organizational Design</h3>
              <p className="mt-4 text-brand-slate">
                Team structures, role definitions, and communication patterns
                that support your strategy and culture.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-slate">
                <li>• Org structure and role design</li>
                <li>• RACI and decision rights</li>
                <li>• Cross-functional coordination</li>
                <li>• Scaling team structures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Capabilities */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading">
                Modern Operational Systems
              </h2>
              <p className="mt-6 text-brand-slate">
                We build systems that leverage what&apos;s possible today. That includes
                intelligent automation where it reduces operational burden and
                frees your team to focus on higher-value work.
              </p>
              <p className="mt-4 text-brand-slate">
                But we&apos;re not technology-first. We start with the process and
                the people, then apply the right tools—whether that&apos;s a simple
                checklist, a workflow automation, or something more sophisticated.
              </p>
              <p className="mt-4 text-brand-slate">
                The goal is systems that work reliably, that your team can maintain,
                and that scale as you grow.
              </p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-heading text-lg mb-6">Our Principles</h3>
              <ul className="space-y-4 text-brand-slate">
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold">01</span>
                  <span><strong>Process before tools.</strong> Automate a bad process and you get bad results faster.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold">02</span>
                  <span><strong>Simplest solution that works.</strong> Complexity is a liability.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold">03</span>
                  <span><strong>Your team owns it.</strong> We build systems you can maintain without us.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold">04</span>
                  <span><strong>Iterate and improve.</strong> V1 shipped beats V2 planned.</span>
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
            Ready to Build Systems That Scale?
          </h2>
          <p className="mt-4 text-gray-300">
            Let&apos;s talk about where your operations are today and what
            infrastructure would make the biggest difference.
          </p>
          <Link href="/contact" className="mt-8 btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
