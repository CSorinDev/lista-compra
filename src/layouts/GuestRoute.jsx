import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../contexts/AuthContext'
import Loading from '../components/Loading'

export default function GuestRoute() {
  const { user, loading } = useAuth()

  if (loading) return <Loading />

  if (user) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
