import bcrypt from 'bcrypt'
import { User } from '../models/User.js'

export class AuthService {
  static async register(name, email, password) {
    if (!name || !email || !password)
      throw new Error('Todos los campos son obligatorios')

    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) throw new Error('Este correo ya está registrado')

    try {
      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      })
    } catch (err) {
      throw new Error('Error al registrar usuario')
    }
  }

  static async login(email, password) {
    if (!email || !password)
      throw new Error('Todos los campos son obligatorios')

    const existingUser = await User.findOne({ where: { email } })
    if (!existingUser) throw new Error('Credenciales incorrectas')

    const matchingPassword = await bcrypt.compare(
      password,
      existingUser.password
    )
    if (!matchingPassword) throw new Error('Credenciales incorrectas')

    return existingUser
  }
}
