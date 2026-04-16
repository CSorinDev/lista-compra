import { useActionState } from 'react'
import AuthService from '../services/AuthService'
import { useNavigate } from 'react-router'

export default function useRegister() {
  const navigate = useNavigate()
  const [state, registerAction, loading] = useActionState(handleRegister, {
    success: false,
    error: null,
  })

  async function handleRegister(prevState, formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    if (!name || !email || !password) {
      return { success: false, error: 'Todos los campos son obligatorios' }
    }

    try {
      await AuthService.register(name, email, password)
      return { success: true, error: null }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  return { state, registerAction, loading }
}
