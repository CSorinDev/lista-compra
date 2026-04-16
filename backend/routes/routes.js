import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'
import AdminController from '../controllers/AdminController.js'
import ListController from '../controllers/ListController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = Router()
const baseRoute = '/api'

// health route
router.get(`${baseRoute}/health`, (req, res) => {
  res.status(200).json({ message: 'ok' })
})

// auth routes
router.get(`${baseRoute}/me`, protect, AuthController.me)
router.post(`${baseRoute}/register`, AuthController.register)
router.post(`${baseRoute}/login`, AuthController.login)
router.post(`${baseRoute}/logout`, protect, AuthController.logout)

// list routes
router.post(`${baseRoute}/list`, protect, ListController.createList)

// admin routes
router.get(`${baseRoute}/users`, protect, admin, AdminController.getAllUser)

export default router
