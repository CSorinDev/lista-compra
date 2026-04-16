import { useActionState } from 'react'
import AuthService from '../services/AuthService'
import { useAuth } from '../contexts/AuthContext'

export default function useLogout() {
  const [state, logoutAction, loading] = useActionState(handleLogout, {
    success: false,
    error: null,
  })
  const { setUser } = useAuth()

  async function handleLogout(prevState, formData) {
    try {
      await AuthService.logout()
      setUser(null)
      return { success: true, error: null }
    } catch (err) {
      return { success: false, error: err.message }
    } 
  }

  return { state, logoutAction, loading }
}