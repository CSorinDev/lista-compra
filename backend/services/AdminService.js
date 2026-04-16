import User from '../models/User.js'

export default class AdminService {
  static async getAllUsers() {
    try {
      const users = await User.findAll()
      return users
    } catch (err) {
      throw new Error('Error al obtener usuarios')
    }
  }
}