export default class AuthService {
  static async register(name, email, password) {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Error al registrar usuario')
      }

      return data
    } catch (err) {
      throw err
    }
  }

  static async login(email, password) {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Error al iniciar sesión')
      }

      return data
    } catch (err) {
      throw err
    }
  }
}