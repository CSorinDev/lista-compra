import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'
import AdminController from '../controllers/AdminController.js'

const router = Router()
const baseRoute = '/api'

// health route
router.get(`${baseRoute}/health`, (req, res) => {
  res.status(200).json({ message: 'ok' })
})

// auth routes
router.post(`${baseRoute}/register`, AuthController.register)
router.post(`${baseRoute}/login`, AuthController.login)
router.post(`${baseRoute}/logout`, AuthController.logout)
router.get(`${baseRoute}/me`, AuthController.me)

// admin routes
router.get(`${baseRoute}/users`, AdminController.getAllUser)

export default router
