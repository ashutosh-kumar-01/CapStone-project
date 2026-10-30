import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  ScanLine,
  History,
  SlidersHorizontal,
  GitCompare,
  QrCode,
  Layers3,
  Globe,
  Factory,
  MessageSquareText,
  FileBarChart,
  Shield,
  BookOpen,
  LogOut,
} from 'lucide-react'
import Logo from '../components/Logo'
import { useAuth } from '../context/AuthContext'

const NAV = [
  { to: '/app', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/app/scan', label: 'Scan pack', icon: ScanLine },
  { to: '/app/history', label: 'Scan history', icon: History },
  { to: '/app/preferences', label: 'Food-fit profile', icon: SlidersHorizontal },
  { to: '/app/compare', label: 'Compare', icon: GitCompare },
  { to: '/app/passport', label: 'Trust passport', icon: QrCode },
  { to: '/app/versions', label: 'Pack versions', icon: Layers3 },
  { to: '/app/listing', label: 'Online vs pack', icon: Globe },
  { to: '/app/manufacturer', label: 'Pre-check', icon: Factory, roles: ['manufacturer', 'admin'] },
  { to: '/app/assistant', label: 'Why was this flagged?', icon: MessageSquareText },
  { to: '/app/reports', label: 'Reports', icon: FileBarChart },
  { to: '/app/rules', label: 'Rule library', icon: BookOpen },
  { to: '/app/admin', label: 'Inspector desk', icon: Shield, roles: ['admin'] },
]

export default function AppShell() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const links = NAV.filter((item) => !item.roles || item.roles.includes(user?.role))

  return (
    <div className="min-h-screen bg-paper paper-grid">
      <div className="flex min-h-screen">
        <aside className="sticky top-0 hidden h-screen w-[260px] shrink-0 flex-col border-r border-line bg-ink text-cream lg:flex">
          <div className="border-b border-white/10 px-5 py-5">
            <Logo light to="/app" />
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin">
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `mb-0.5 flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition ${
                    isActive ? 'bg-gold/15 text-gold' : 'text-cream/70 hover:bg-white/5 hover:text-cream'
                  }`
                }
              >
                <item.icon size={16} />
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="border-t border-white/10 p-4">
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-[11px] uppercase tracking-[0.16em] text-gold/80">{user?.role}</p>
            <button
              type="button"
              onClick={() => {
                logout()
                navigate('/')
              }}
              className="mt-3 inline-flex items-center gap-2 text-sm text-cream/60 hover:text-cream"
            >
              <LogOut size={14} /> Sign out
            </button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-paper/90 px-4 py-3 backdrop-blur lg:hidden">
            <Logo to="/app" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">{user?.role}</span>
          </header>
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-8">
            <Outlet />
          </main>
          <nav className="sticky bottom-0 z-20 flex gap-1 overflow-x-auto border-t border-line bg-paper px-2 py-2 lg:hidden">
            {links.slice(0, 5).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex min-w-[72px] flex-col items-center rounded-lg px-2 py-1 text-[10px] ${
                    isActive ? 'text-forest' : 'text-ink-soft'
                  }`
                }
              >
                <item.icon size={16} />
                {item.label.split(' ')[0]}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
