import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'

const ISSUES = [
  { id: 'd1', field: 'MRP wording', detail: 'Draft uses “Rs” without ₹ and omits “inclusive of all taxes”.', status: 'fail' },
  { id: 'd2', field: 'Font crowding', detail: 'Customer-care block is likely below recommended prominence. Review — no physical scale present.', status: 'review' },
  { id: 'd3', field: 'FSSAI licence', detail: '14-digit licence present and well-formed.', status: 'pass' },
  { id: 'd4', field: 'Veg mark', detail: 'Green mark contrast against gold foil is low in this artwork export.', status: 'review' },
]

export default function Manufacturer() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <PageHeader
        kicker="Module 13"
        title="Manufacturer pre-publication check"
        subtitle="Run the same rule engine on a packaging draft before print. Findings are advisory."
      />
      <div className="rounded-3xl border border-dashed border-line bg-cream p-8 text-center">
        <p className="font-display text-2xl">Drop a print-ready PDF or PNG</p>
        <p className="mt-2 text-sm text-ink-soft">Frontend demo — choose any file to simulate a pre-check.</p>
        <input
          type="file"
          className="mx-auto mt-4 block"
          onChange={() => setSubmitted(true)}
        />
      </div>
      {submitted && (
        <ul className="mt-6 space-y-3">
          {ISSUES.map((i) => (
            <li key={i.id} className="flex items-start justify-between gap-4 rounded-2xl border border-line bg-cream p-4">
              <div>
                <p className="font-semibold">{i.field}</p>
                <p className="text-sm text-ink-soft">{i.detail}</p>
              </div>
              <StatusBadge status={i.status} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
