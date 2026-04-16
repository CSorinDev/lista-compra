import { AuthService } from '../services/AuthService.js'
import crypto from 'crypto' 

export default class AuthController {
  static async register(req, res) {
    try {
      const { name, email, password } = req.body
      const user = await AuthService.register(name, email, password)
      res
        .status(201)
        .json({ message: 'Usuario registrado correctamente', data: user })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body
      const user = await AuthService.login(email, password)

      const csrfToken = crypto.randomBytes(32).toString('hex')

      // Auth token (http only)
      res.cookie('auth_token', user.token, {
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 semana
      })

      // CSRF token
      res.cookie('csrf_token', csrfToken, {
        httpOnly: false,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24, // 1 dia
      })

      res.status(200).json({ message: 'Usuario logueado correctamente' })
    } catch (err) {
      res.status(401).json({ message: err.message })
    }
  }
}
