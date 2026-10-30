import { statusLabel, statusTone } from '../lib/utils'

export default function StatusBadge({ status, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] ${statusTone(status)} ${className}`}
    >
      {statusLabel(status)}
    </span>
  )
}
