import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { PRODUCTS } from '../data/mock'

const ATTRS = [
  ['Protein (g/100g)', (p) => p.nutrition.protein],
  ['Sugar (g/100g)', (p) => p.nutrition.sugar],
  ['Fat (g/100g)', (p) => p.nutrition.fat],
  ['Energy (kcal)', (p) => p.nutrition.energy],
  ['MRP', (p) => p.mrp],
  ['Net quantity', (p) => p.packSize],
  ['Compliance', (p) => p.status],
  ['Food-fit', (p) => p.foodFit],
]

export default function Compare() {
  const [a, setA] = useState(PRODUCTS[0].id)
  const [b, setB] = useState(PRODUCTS[1].id)
  const pa = PRODUCTS.find((p) => p.id === a)
  const pb = PRODUCTS.find((p) => p.id === b)

  return (
    <div>
      <PageHeader
        kicker="Module 9"
        title="Compare two packs"
        subtitle="Side-by-side attributes only. PackPramaan does not crown a universally “healthy” product."
      />
      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        {[ [a, setA], [b, setB] ].map(([val, set], i) => (
          <select
            key={i}
            className="rounded-xl border border-line bg-cream px-3 py-2"
            value={val}
            onChange={(e) => set(e.target.value)}
          >
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        ))}
      </div>
      <div className="overflow-hidden rounded-3xl border border-line bg-cream">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-paper">
              <th className="px-4 py-3 text-left">Attribute</th>
              <th className="px-4 py-3 text-left">{pa.name}</th>
              <th className="px-4 py-3 text-left">{pb.name}</th>
            </tr>
          </thead>
          <tbody>
            {ATTRS.map(([label, fn]) => (
              <tr key={label} className="border-t border-line">
                <td className="px-4 py-3 text-ink-soft">{label}</td>
                <td className="px-4 py-3">
                  {label === 'Compliance' ? <StatusBadge status={fn(pa)} /> : fn(pa)}
                </td>
                <td className="px-4 py-3">
                  {label === 'Compliance' ? <StatusBadge status={fn(pb)} /> : fn(pb)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
