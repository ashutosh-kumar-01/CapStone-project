import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { useAuth } from '../context/AuthContext'
import { DEMO_USERS } from '../data/mock'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('consumer@packpramaan.ai')
  const [password, setPassword] = useState('demo')
  const [error, setError] = useState('')

  function submit(e) {
    e.preventDefault()
    const res = login(email, password)
    if (!res.ok) {
      setError(res.error)
      return
    }
    navigate(location.state?.from || '/app')
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-ink p-10 text-cream lg:flex">
        <Logo light />
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Demo desk</p>
          <h1 className="mt-3 font-display text-4xl">Three roles. One evidence trail.</h1>
          <p className="mt-4 max-w-md text-cream/65">
            Consumer scans, manufacturer pre-checks a draft, inspector reviews findings. Password for every demo
            account is <span className="text-gold">demo</span>.
          </p>
        </div>
        <p className="text-xs text-cream/40">SIH26034 · Legal Metrology (Packaged Commodities) Rules, 2011</p>
      </div>
      <div className="flex items-center justify-center bg-paper px-6 py-12">
        <form onSubmit={submit} className="w-full max-w-md">
          <div className="lg:hidden">
            <Logo />
          </div>
          <h2 className="mt-6 font-display text-3xl">Sign in</h2>
          <p className="mt-2 text-sm text-ink-soft">
            No account yet?{' '}
            <Link className="text-forest underline" to="/register">
              Create one
            </Link>
          </p>
          <label className="mt-8 block text-xs uppercase tracking-[0.16em] text-ink-soft">Email</label>
          <input
            className="mt-1 w-full rounded-xl border border-line bg-cream px-3 py-2.5 outline-none focus:border-forest"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mt-4 block text-xs uppercase tracking-[0.16em] text-ink-soft">Password</label>
          <input
            type="password"
            className="mt-1 w-full rounded-xl border border-line bg-cream px-3 py-2.5 outline-none focus:border-forest"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="mt-3 text-sm text-fail">{error}</p>}
          <button type="submit" className="mt-6 w-full rounded-full bg-ink py-3 font-semibold text-cream">
            Enter PackPramaan
          </button>
          <div className="mt-6 space-y-2">
            {DEMO_USERS.map((u) => (
              <button
                key={u.email}
                type="button"
                onClick={() => {
                  setEmail(u.email)
                  setPassword(u.password)
                }}
                className="flex w-full items-center justify-between rounded-xl border border-line bg-cream px-3 py-2 text-left text-sm hover:border-forest"
              >
                <span>
                  {u.name}
                  <span className="ml-2 text-xs uppercase tracking-widest text-gold">{u.role}</span>
                </span>
                <span className="text-xs text-ink-soft">{u.email}</span>
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  )
}
