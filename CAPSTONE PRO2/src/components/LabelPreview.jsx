const palettes = {
  'prd-kesar-dal': { bg: '#c45a1a', band: '#e7c56a', name: 'KESAR', sub: 'TOOR DAL' },
  'prd-peak-bar': { bg: '#1b1a18', band: '#6b3a1f', name: 'PEAKFUEL', sub: 'PROTEIN BAR' },
  'prd-amrit-ghee': { bg: '#f3d27a', band: '#8a4b12', name: 'AMRIT', sub: 'COW GHEE' },
}

export default function LabelPreview({ productId, view = 'front', highlight, className = '' }) {
  const p = palettes[productId] || palettes['prd-kesar-dal']
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-line shadow-sm ${className}`}>
      <div
        className="aspect-[4/5] w-full"
        style={{
          background:
            view === 'nutrition'
              ? 'linear-gradient(180deg,#faf6ee,#e7dcc8)'
              : `linear-gradient(160deg, ${p.bg}, #12241c)`,
        }}
      >
        {view !== 'nutrition' ? (
          <div className="flex h-full flex-col justify-between p-4 text-cream">
            <div>
              <div className="text-[10px] tracking-[0.3em] opacity-70">PACKAGED COMMODITY</div>
              <div className="mt-6 font-display text-3xl leading-none">{p.name}</div>
              <div className="mt-1 text-sm tracking-[0.2em]">{p.sub}</div>
            </div>
            <div className="rounded-lg px-3 py-2 text-ink" style={{ background: p.band }}>
              <div className="text-[10px] uppercase tracking-widest">Principal display</div>
              <div className="font-semibold">{view.toUpperCase()} PANEL</div>
            </div>
          </div>
        ) : (
          <div className="p-4 font-mono text-[11px] leading-5 text-ink">
            <div className="mb-2 font-sans text-xs font-semibold tracking-widest">NUTRITION INFORMATION</div>
            <div className="flex justify-between border-b border-ink/20 py-1"><span>Energy</span><span>kcal</span></div>
            <div className="flex justify-between border-b border-ink/20 py-1"><span>Protein</span><span>g</span></div>
            <div className="flex justify-between border-b border-ink/20 py-1"><span>Carbohydrate</span><span>g</span></div>
            <div className="flex justify-between border-b border-ink/20 py-1"><span>Total sugars</span><span>g</span></div>
            <div className="flex justify-between py-1"><span>Fat</span><span>g</span></div>
          </div>
        )}
        {highlight && (
          <div
            className="pointer-events-none absolute rounded-md border-2 border-gold bg-gold/20"
            style={{
              left: `${highlight.x}%`,
              top: `${highlight.y}%`,
              width: `${highlight.w}%`,
              height: `${highlight.h}%`,
            }}
          />
        )}
      </div>
    </div>
  )
}
