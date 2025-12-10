import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-heading text-2xl font-medium">
              the <span className="text-brand-gold">A</span> company
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Fractional executive leadership helping founders escape crisis mode
              and build sustainable organizational health.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-brand-gold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/fractional-executive" className="hover:text-white transition-colors">Fractional Executive</Link></li>
              <li><Link href="/strategy" className="hover:text-white transition-colors">Strategy</Link></li>
              <li><Link href="/systems" className="hover:text-white transition-colors">Systems</Link></li>
              <li><Link href="/coaching" className="hover:text-white transition-colors">Coaching</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-brand-gold mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} The A Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
