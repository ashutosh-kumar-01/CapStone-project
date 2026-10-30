export default function PageHeader({ kicker, title, subtitle, action }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {kicker && (
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">{kicker}</p>
        )}
        <h1 className="font-display text-3xl text-ink sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-ink-soft/80">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
