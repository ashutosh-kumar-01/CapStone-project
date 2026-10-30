import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { DEFAULT_PREFERENCES, PRODUCTS, scoreFoodFit } from '../data/mock'

const GOALS = [
  { id: 'higher-protein', label: 'Higher protein' },
  { id: 'lower-sugar', label: 'Lower sugar' },
  { id: 'lower-sodium', label: 'Lower sodium' },
]

export default function Preferences() {
  const [prefs, setPrefs] = useState(DEFAULT_PREFERENCES)
  const [avoidText, setAvoidText] = useState(prefs.avoid.join(', '))

  const ranked = useMemo(() => {
    const next = { ...prefs, avoid: avoidText.split(',').map((s) => s.trim()).filter(Boolean) }
    return PRODUCTS.map((p) => ({ ...p, fit: scoreFoodFit(p, next) })).sort((a, b) => b.fit - a.fit)
  }, [prefs, avoidText])

  function toggleGoal(id) {
    setPrefs((p) => ({
      ...p,
      goals: p.goals.includes(id) ? p.goals.filter((g) => g !== id) : [...p.goals, id],
    }))
  }

  return (
    <div>
      <PageHeader
        kicker="Module 8"
        title="Personal food-fit profile"
        subtitle="Transparent, non-clinical matching against declared label data. PackPramaan will not diagnose, treat, or recommend a diet for a medical condition."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-3xl border border-line bg-cream p-6">
          <h2 className="font-display text-2xl">Preferences</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {GOALS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => toggleGoal(g.id)}
                className={`rounded-full px-4 py-2 text-sm ${
                  prefs.goals.includes(g.id) ? 'bg-ink text-cream' : 'border border-line'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
          <label className="mt-6 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={prefs.vegetarian}
              onChange={(e) => setPrefs((p) => ({ ...p, vegetarian: e.target.checked }))}
            />
            Vegetarian identification preferred
          </label>
          <label className="mt-4 block text-xs uppercase tracking-[0.16em] text-ink-soft">
            Ingredients to avoid
          </label>
          <input
            className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2"
            value={avoidText}
            onChange={(e) => setAvoidText(e.target.value)}
          />
          <p className="mt-4 text-xs text-ink-soft">
            Scoring is deterministic: protein, sugar, and substring matches against the extracted ingredient list.
          </p>
        </section>
        <section className="space-y-3">
          {ranked.map((p) => (
            <article key={p.id} className="rounded-2xl border border-line bg-cream p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="font-display text-2xl text-forest">{p.fit}</span>
              </div>
              <p className="text-sm text-ink-soft">
                {p.nutrition.protein} g protein · {p.nutrition.sugar} g sugar / 100 g · {p.ingredients.slice(0, 3).join(', ')}
              </p>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
