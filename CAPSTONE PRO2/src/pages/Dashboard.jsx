import { Link } from 'react-router-dom'
import { ArrowUpRight, ScanLine } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import LabelPreview from '../components/LabelPreview'
import { useAuth } from '../context/AuthContext'
import { ANALYTICS, PRODUCTS, SCANS, productById } from '../data/mock'
import { formatDate } from '../lib/utils'

export default function Dashboard() {
  const { user } = useAuth()
  return (
    <div>
      <PageHeader
        kicker={`${user.role} desk`}
        title={`Namaste, ${user.name.split(' ')[0]}.`}
        subtitle="Scan a pack, inspect evidence-backed findings, or open the latest Product Trust Passport. This UI is wired to curated demo records until the Node and FastAPI services are connected."
        action={
          <Link
            to="/app/scan"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream"
          >
            <ScanLine size={16} /> New scan
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { l: 'Scans this month', v: ANALYTICS.scansThisMonth },
          { l: 'Pass rate', v: `${ANALYTICS.passRate}%` },
          { l: 'Avg. pipeline', v: `${ANALYTICS.avgLatencySec}s` },
          { l: 'Field precision', v: `${ANALYTICS.fieldPrecision}%` },
        ].map((c) => (
          <div key={c.l} className="rounded-2xl border border-line bg-cream p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">{c.l}</p>
            <p className="mt-2 font-display text-3xl">{c.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-line bg-cream p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-2xl">Recent scans</h2>
            <Link to="/app/history" className="text-sm text-forest">
              View all
            </Link>
          </div>
          <ul className="space-y-3">
            {SCANS.map((s) => {
              const p = productById(s.productId)
              return (
                <li key={s.id}>
                  <Link
                    to={`/app/scans/${s.id}`}
                    className="flex items-center gap-4 rounded-2xl border border-line p-3 hover:border-forest"
                  >
                    <div className="w-16 shrink-0">
                      <LabelPreview productId={p.id} className="rounded-lg" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold">{p.name}</p>
                      <p className="text-xs text-ink-soft">
                        {s.id} · {formatDate(s.createdAt)} · {s.summary}
                      </p>
                    </div>
                    <StatusBadge status={p.status} />
                    <ArrowUpRight size={16} className="text-ink-soft" />
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="rounded-3xl border border-line bg-ink p-6 text-cream">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Watchlist products</p>
          <h2 className="mt-1 font-display text-2xl">Live passports</h2>
          <ul className="mt-5 space-y-4">
            {PRODUCTS.map((p) => (
              <li key={p.id} className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-cream/50">{p.passportId}</p>
                </div>
                <Link to={`/p/${p.passportId}`} className="text-sm text-gold">
                  Open
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
