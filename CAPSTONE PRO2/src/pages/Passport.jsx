import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import QrMark from '../components/QrMark'
import StatusBadge from '../components/StatusBadge'
import { PRODUCTS } from '../data/mock'

export default function Passport() {
  return (
    <div>
      <PageHeader
        kicker="Module 10"
        title="Product Trust Passport"
        subtitle="Persistent records with current declarations, evidence timestamps and QR access. Inspired by digital product passport direction — scoped to packaged food."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {PRODUCTS.map((p) => (
          <article key={p.id} className="rounded-3xl border border-line bg-cream p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-gold">{p.passportId}</p>
                <h2 className="mt-1 font-display text-2xl">{p.name}</h2>
              </div>
              <StatusBadge status={p.status} />
            </div>
            <div className="mt-4 flex justify-center">
              <QrMark />
            </div>
            <p className="mt-3 text-center text-xs text-ink-soft">Verified observation · 18 Oct 2026 09:12 IST</p>
            <Link
              to={`/p/${p.passportId}`}
              className="mt-4 block rounded-full bg-ink py-2 text-center text-sm font-semibold text-cream"
            >
              Open public page
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
