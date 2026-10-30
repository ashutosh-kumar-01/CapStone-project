import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AppShell from './layouts/AppShell'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Scan from './pages/Scan'
import ScanResult from './pages/ScanResult'
import History from './pages/History'
import Preferences from './pages/Preferences'
import Compare from './pages/Compare'
import Passport from './pages/Passport'
import PublicPassport from './pages/PublicPassport'
import Versions from './pages/Versions'
import ListingCheck from './pages/ListingCheck'
import Manufacturer from './pages/Manufacturer'
import Assistant from './pages/Assistant'
import Reports from './pages/Reports'
import Rules from './pages/Rules'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function GuestOnly({ children }) {
  const { user } = useAuth()
  if (user) return <Navigate to="/app" replace />
  return children
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={
              <GuestOnly>
                <Login />
              </GuestOnly>
            }
          />
          <Route
            path="/register"
            element={
              <GuestOnly>
                <Register />
              </GuestOnly>
            }
          />
          <Route path="/p/:code" element={<PublicPassport />} />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <AppShell />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="scan" element={<Scan />} />
            <Route path="scans/:scanId" element={<ScanResult />} />
            <Route path="history" element={<History />} />
            <Route path="preferences" element={<Preferences />} />
            <Route path="compare" element={<Compare />} />
            <Route path="passport" element={<Passport />} />
            <Route path="versions" element={<Versions />} />
            <Route path="listing" element={<ListingCheck />} />
            <Route path="manufacturer" element={<Manufacturer />} />
            <Route path="assistant" element={<Assistant />} />
            <Route path="reports" element={<Reports />} />
            <Route path="rules" element={<Rules />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
