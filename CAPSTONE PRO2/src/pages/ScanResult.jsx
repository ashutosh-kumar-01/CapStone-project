import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FileDown, QrCode, MessageSquareText } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import LabelPreview from '../components/LabelPreview'
import { findingsFor, productById, ruleById, SCANS } from '../data/mock'

export default function ScanResult() {
  const { scanId } = useParams()
  const scan = SCANS.find((s) => s.id === scanId) || SCANS[0]
  const product = productById(scan.productId)
  const findings = findingsFor(product.id)
  const [active, setActive] = useState(findings[0])
  const [tab, setTab] = useState('findings')
  const rule = useMemo(() => (active ? ruleById(active.ruleId) : null), [active])

  return (
    <div>
      <PageHeader
        kicker={scan.id}
        title={product.name}
        subtitle={`${product.brand} · ${product.packSize} · OCR confidence ${(scan.ocrConfidence * 100).toFixed(0)}%. Decision-support result — not a legal certification.`}
        action={
          <div className="flex gap-2">
            <Link to="/app/assistant" className="rounded-full border border-line px-4 py-2 text-sm">
              <span className="inline-flex items-center gap-2">
                <MessageSquareText size={14} /> Ask why
              </span>
            </Link>
            <Link
              to={`/p/${product.passportId}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-cream"
            >
              <QrCode size={14} /> Passport
            </Link>
          </div>
        }
      />

      <div className="mb-6 flex flex-wrap gap-2">
        <StatusBadge status={product.status} />
        <span className="rounded-full border border-line px-3 py-1 text-xs">Food-fit {product.foodFit}/100</span>
        <span className="rounded-full border border-line px-3 py-1 text-xs">{scan.summary}</span>
      </div>

      <div className="mb-6 flex gap-2 border-b border-line">
        {['findings', 'nutrition', 'fields'].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm capitalize ${tab === t ? 'border-b-2 border-forest font-semibold' : 'text-ink-soft'}`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'findings' && (
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <LabelPreview productId={product.id} view={active?.evidence.view} highlight={active?.evidence} />
          <div className="space-y-3">
            {findings.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f)}
                className={`w-full rounded-2xl border p-4 text-left ${
                  active?.id === f.id ? 'border-forest bg-cream' : 'border-line bg-cream/50'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold">{f.field}</p>
                  <StatusBadge status={f.status} />
                </div>
                <p className="mt-1 text-sm text-ink-soft">{f.value}</p>
                <p className="mt-2 text-sm">{f.reason}</p>
                {active?.id === f.id && rule && (
                  <div className="mt-3 rounded-xl bg-paper p-3 text-xs">
                    <p className="font-semibold text-forest">{rule.id} · {rule.version}</p>
                    <p className="mt-1">{rule.source}</p>
                    {f.evidence.ocr && (
                      <p className="mt-2 font-mono text-[11px] text-ink-soft">OCR: “{f.evidence.ocr}”</p>
                    )}
                    <p className="mt-1 text-ink-soft">Confidence {(f.confidence * 100).toFixed(0)}%</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {tab === 'nutrition' && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-cream p-6">
            <h2 className="font-display text-2xl">Declared nutrition</h2>
            <p className="text-sm text-ink-soft">{product.nutrition.basis}</p>
            <table className="mt-4 w-full text-sm">
              <tbody>
                {[
                  ['Energy', `${product.nutrition.energy} kcal`],
                  ['Protein', `${product.nutrition.protein} g`],
                  ['Carbohydrate', `${product.nutrition.carbs} g`],
                  ['Total sugars', `${product.nutrition.sugar} g`],
                  ['Fat', `${product.nutrition.fat} g`],
                  ['Saturated fat', `${product.nutrition.satFat} g`],
                  ['Fibre', `${product.nutrition.fibre} g`],
                  ['Sodium', `${product.nutrition.sodium} mg`],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-line">
                    <td className="py-2">{k}</td>
                    <td className="py-2 text-right font-semibold">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-3xl border border-line bg-ink p-6 text-cream">
            <h2 className="font-display text-2xl text-gold">Ingredients</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {product.ingredients.map((i) => (
                <li key={i} className="border-b border-white/10 pb-2">
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-cream/50">
              Allergens declared: {product.allergens.length ? product.allergens.join(', ') : 'none extracted'}. Allergy
              output is conservative and based only on declared ingredients.
            </p>
            <Link to="/app/preferences" className="mt-6 inline-block text-sm text-gold">
              Recalculate food-fit against my profile →
            </Link>
          </div>
        </div>
      )}

      {tab === 'fields' && (
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            ['Manufacturer', product.manufacturer],
            ['MRP', product.mrp],
            ['Net quantity', product.packSize],
            ['Mfg date', product.mfg],
            ['Expiry / best before', product.expiry],
            ['FSSAI licence', product.fssai],
            ['Customer care', product.customerCare],
            ['Country of origin', product.country],
            ['Barcode', product.barcode],
            ['Passport', product.passportId],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-line bg-cream p-4">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">{k}</dt>
              <dd className="mt-1 font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      )}

      <button
        type="button"
        onClick={() => window.print()}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm"
      >
        <FileDown size={14} /> Print / save PDF report
      </button>
    </div>
  )
}
