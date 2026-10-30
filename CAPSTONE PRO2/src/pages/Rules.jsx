import PageHeader from '../components/PageHeader'
import { RULES } from '../data/mock'

export default function Rules() {
  return (
    <div>
      <PageHeader
        kicker="Versioned knowledge"
        title="Rule library"
        subtitle="Bounded, dated requirements. The LLM never authors these rows. Amendments from 2025–2026 are stored as versions, not as a single static list."
      />
      <div className="space-y-3">
        {RULES.map((r) => (
          <article key={r.id} className="rounded-2xl border border-line bg-cream p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-xs text-gold">{r.id}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-ink-soft">{r.domain} · {r.version}</p>
            </div>
            <h2 className="mt-2 font-display text-2xl">{r.title}</h2>
            <p className="mt-1 text-sm text-ink-soft">{r.source}</p>
            <p className="mt-2 text-xs">Effective {r.effective}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
