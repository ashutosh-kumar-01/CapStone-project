import { createContext, useContext, useMemo, useState } from 'react'
import { DEMO_USERS } from '../data/mock'

const AuthContext = createContext(null)
const KEY = 'packpramaan.user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || 'null')
    } catch {
      return null
    }
  })

  const value = useMemo(
    () => ({
      user,
      login(email, password) {
        const found = DEMO_USERS.find(
          (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
        )
        if (!found) return { ok: false, error: 'Unknown email or password. Use a demo account.' }
        const session = { id: found.id, name: found.name, email: found.email, role: found.role }
        localStorage.setItem(KEY, JSON.stringify(session))
        setUser(session)
        return { ok: true }
      },
      register({ name, email, role }) {
        const session = {
          id: `u-${Date.now()}`,
          name,
          email,
          role: role || 'consumer',
        }
        localStorage.setItem(KEY, JSON.stringify(session))
        setUser(session)
        return { ok: true }
      },
      logout() {
        localStorage.removeItem(KEY)
        setUser(null)
      },
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
