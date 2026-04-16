import { useActionState } from 'react'
import AuthService from '../services/AuthService'

export default function useLogin() {
  const [state, loginAction, loading] = useActionState(handleLogin, {
    success: false,
    error: null,
  })

  async function handleLogin(prevState, formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    if (!email || !password) {
      return { success: false, error: 'Todos los campos son obligatorios' }
    }

    try {
      await AuthService.login(email, password)
      return { success: true, error: null }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  return { state, loginAction, loading }
}