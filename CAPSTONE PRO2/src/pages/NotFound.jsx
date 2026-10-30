import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-paper">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">404</p>
        <h1 className="mt-2 font-display text-4xl">This page is not on the label.</h1>
        <Link to="/" className="mt-6 inline-block text-forest">
          Back to PackPramaan
        </Link>
      </div>
    </div>
  )
}
