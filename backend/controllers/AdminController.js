import AdminService from '../services/AdminService.js'

export default class AdminController {
  static async getAllUser(req, res) {
    try {
      const users = await AdminService.getAllUsers()
      res.status(200).json({ data: users })
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener usuarios', error })
    }
  }
}
