import { Link } from 'react-router-dom'

export default function Logo({ light = false, to = '/' }) {
  return (
    <Link to={to} className="flex items-center gap-2.5 group">
      <span
        className={`grid h-9 w-9 place-items-center rounded-xl border ${
          light ? 'border-gold/60 bg-ink text-gold' : 'border-ink bg-ink text-gold'
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden>
          <path d="M6 22V10l10-4 10 4v12l-10 4-10-4Z" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M11 16.2 14.2 19.4 21 12.4"
            stroke="#7CB892"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[17px] tracking-tight ${light ? 'text-cream' : 'text-ink'}`}>
          PackPramaan
        </span>
        <span className={`block text-[10px] uppercase tracking-[0.22em] ${light ? 'text-gold/80' : 'text-ink-soft/70'}`}>
          AI · Proof of pack
        </span>
      </span>
    </Link>
  )
}
