import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export default function GuestRoute() {
  const { user, loading } = useAuth()

  if (loading) return null // O un spinner de carga

  if (user) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
