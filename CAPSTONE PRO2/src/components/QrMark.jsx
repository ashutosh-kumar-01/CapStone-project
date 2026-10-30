export default function QrMark({ size = 120 }) {
  const cells = 11
  const bits = Array.from({ length: cells * cells }, (_, i) => ((i * 7) % 5) !== 2)
  const cell = size / cells
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rounded-lg bg-cream p-1">
      {bits.map((on, i) => {
        const x = (i % cells) * cell
        const y = Math.floor(i / cells) * cell
        if (!on) return null
        return <rect key={i} x={x} y={y} width={cell * 0.92} height={cell * 0.92} fill="#12241c" />
      })}
    </svg>
  )
}
