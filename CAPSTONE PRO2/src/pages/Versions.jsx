import PageHeader from '../components/PageHeader'
import LabelPreview from '../components/LabelPreview'
import { PRODUCTS, VERSIONS } from '../data/mock'

export default function Versions() {
  const product = PRODUCTS[0]
  const versions = VERSIONS[product.id]

  return (
    <div>
      <PageHeader
        kicker="Module 11"
        title="Packaging version history"
        subtitle="Text diff plus visual similarity — reported as observed differences, never as tampering or fraud."
      />
      <div className="mb-6 w-40">
        <LabelPreview productId={product.id} />
      </div>
      <ol className="space-y-4">
        {versions.map((v, i) => (
          <li key={v.id} className="rounded-3xl border border-line bg-cream p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-2xl">
                {v.id.toUpperCase()} · {v.note}
              </h2>
              <span className="text-sm text-ink-soft">{v.observed}</span>
            </div>
            {i < versions.length - 1 && (
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gold">
                Similarity vs previous {(v.similarity * 100).toFixed(0)}%
              </p>
            )}
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {v.changes.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  )
}
