import { Navigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { useAuth } from '../context/AuthContext'
import { ANALYTICS, SCANS, productById } from '../data/mock'
import { formatDate } from '../lib/utils'

export default function Admin() {
  const { user } = useAuth()
  if (user.role !== 'admin') return <Navigate to="/app" replace />

  return (
    <div>
      <PageHeader
        kicker="Inspector desk"
        title="Review queue"
        subtitle="Admin view of scans, findings mix, and pipeline health. Ready to bind to MongoDB Atlas once the Express API lands."
      />
      <div className="grid gap-4 sm:grid-cols-4">
        {[
          ['Pass', `${ANALYTICS.passRate}%`, 'pass'],
          ['Review', `${ANALYTICS.reviewRate}%`, 'review'],
          ['Fail', `${ANALYTICS.failRate}%`, 'fail'],
          ['Latency', `${ANALYTICS.avgLatencySec}s`, 'review'],
        ].map(([l, v, s]) => (
          <div key={l} className="rounded-2xl border border-line bg-cream p-4">
            <StatusBadge status={s} />
            <p className="mt-3 font-display text-3xl">{v}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-soft">{l}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-line bg-cream p-5">
        <h2 className="font-display text-2xl">Latest observations</h2>
        <ul className="mt-4 space-y-3">
          {SCANS.map((s) => {
            const p = productById(s.productId)
            return (
              <li key={s.id} className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-ink-soft">
                    {s.id} · {formatDate(s.createdAt)} · {s.actor}
                  </p>
                </div>
                <StatusBadge status={p.status} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
