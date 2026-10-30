import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { SCANS, productById } from '../data/mock'
import { formatDate } from '../lib/utils'

export default function History() {
  return (
    <div>
      <PageHeader
        kicker="Scan ledger"
        title="History"
        subtitle="Each row is a persistent observation against a product identity — not a one-off inspection dump."
      />
      <div className="overflow-hidden rounded-3xl border border-line bg-cream">
        <table className="w-full text-sm">
          <thead className="bg-paper text-left text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            <tr>
              <th className="px-4 py-3">Scan</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">When</th>
              <th className="px-4 py-3">Actor</th>
              <th className="px-4 py-3">Views</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {SCANS.map((s) => {
              const p = productById(s.productId)
              return (
                <tr key={s.id} className="border-t border-line">
                  <td className="px-4 py-3">
                    <Link className="font-semibold text-forest" to={`/app/scans/${s.id}`}>
                      {s.id}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{p.name}</td>
                  <td className="px-4 py-3 text-ink-soft">{formatDate(s.createdAt)}</td>
                  <td className="px-4 py-3">{s.actor}</td>
                  <td className="px-4 py-3">{s.images.length}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={p.status} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
