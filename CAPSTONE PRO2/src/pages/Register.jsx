import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('consumer')

  function submit(e) {
    e.preventDefault()
    register({ name: name || 'New user', email: email || 'user@packpramaan.ai', role })
    navigate('/app')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <form onSubmit={submit} className="w-full max-w-md rounded-3xl border border-line bg-cream p-8">
        <Logo />
        <h1 className="mt-6 font-display text-3xl">Create a desk login</h1>
        <p className="mt-2 text-sm text-ink-soft">Frontend prototype — accounts stay in this browser only.</p>
        <label className="mt-6 block text-xs uppercase tracking-[0.16em] text-ink-soft">Name</label>
        <input
          className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2.5"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="mt-4 block text-xs uppercase tracking-[0.16em] text-ink-soft">Email</label>
        <input
          className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2.5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="mt-4 block text-xs uppercase tracking-[0.16em] text-ink-soft">Role</label>
        <select
          className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2.5"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="consumer">Consumer</option>
          <option value="manufacturer">Manufacturer / packaging</option>
          <option value="admin">Admin / inspector</option>
        </select>
        <button type="submit" className="mt-6 w-full rounded-full bg-ink py-3 font-semibold text-cream">
          Continue
        </button>
        <p className="mt-4 text-center text-sm text-ink-soft">
          Already have a demo seat?{' '}
          <Link className="text-forest underline" to="/login">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  )
}
