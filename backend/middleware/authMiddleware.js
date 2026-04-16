import User from '../models/User.js'

export const protect = async (req, res, next) => {
  try {
    const userId = req.cookies.auth_token

    if (!userId) {
      return res.status(401).json({ message: 'No autorizado, inicia sesión' })
    }

    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
    })

    if (!user) {
      return res.status(401).json({ message: 'Sesión no válida' })
    }

    req.user = user
    next()
  } catch (err) {
    res.status(401).json({ message: 'Error de autenticación' })
  }
}

export const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    res.status(403).json({ message: 'Acceso denegado: se requiere ser administrador' })
  }
}
