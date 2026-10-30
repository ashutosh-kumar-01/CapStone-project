import { Link, useParams } from 'react-router-dom'
import Logo from '../components/Logo'
import QrMark from '../components/QrMark'
import StatusBadge from '../components/StatusBadge'
import LabelPreview from '../components/LabelPreview'
import { productByPassport, findingsFor } from '../data/mock'

export default function PublicPassport() {
  const { code } = useParams()
  const product = productByPassport(code)
  if (!product) {
    return (
      <div className="grid min-h-screen place-items-center bg-paper">
        <p>Unknown passport.</p>
      </div>
    )
  }
  const findings = findingsFor(product.id)

  return (
    <div className="min-h-screen bg-paper paper-grid">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <Logo />
        <Link to="/login" className="text-sm text-forest">
          Open desk
        </Link>
      </header>
      <article className="mx-auto mb-16 max-w-3xl rounded-3xl border border-line bg-cream p-6 sm:p-10">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Digital Product Passport</p>
        <div className="mt-2 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl">{product.name}</h1>
            <p className="mt-1 text-ink-soft">{product.brand} · {product.packSize}</p>
          </div>
          <StatusBadge status={product.status} />
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto]">
          <LabelPreview productId={product.id} />
          <div className="flex flex-col items-center rounded-2xl border border-line bg-paper p-4">
            <QrMark size={132} />
            <p className="mt-2 font-mono text-xs">{product.passportId}</p>
          </div>
        </div>
        <dl className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            ['MRP', product.mrp],
            ['Manufacturer', product.manufacturer],
            ['FSSAI', product.fssai],
            ['Best before', product.expiry],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-paper p-3">
              <dt className="text-[10px] uppercase tracking-[0.16em] text-ink-soft">{k}</dt>
              <dd className="text-sm font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <h2 className="mt-8 font-display text-2xl">Latest findings</h2>
        <ul className="mt-3 space-y-2">
          {findings.map((f) => (
            <li key={f.id} className="flex items-center justify-between rounded-xl border border-line px-3 py-2 text-sm">
              <span>{f.field}</span>
              <StatusBadge status={f.status} />
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs leading-5 text-ink-soft">
          Public verification page. Last verified 18 Oct 2026, 09:12 IST. PackPramaan is decision-support software and
          does not replace an authorised Legal Metrology or FSSAI determination.
        </p>
      </article>
    </div>
  )
}
