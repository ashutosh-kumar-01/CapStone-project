export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}

export function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function statusTone(status) {
  if (status === 'pass') return 'text-pass border-pass bg-pass/10'
  if (status === 'fail') return 'text-fail border-fail bg-fail/10'
  return 'text-review border-review bg-review/10'
}

export function statusLabel(status) {
  if (status === 'pass') return 'Pass'
  if (status === 'fail') return 'Fail'
  return 'Review'
}
