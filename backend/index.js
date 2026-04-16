import express from 'express'
import cors from 'cors'
import routes from './routes/routes.js'
import { PORT, CORS_ORIGIN } from './config/config.js'
import sequelize from './database/database.js'
import seed from './database/seeds.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
)

app.use(routes)

async function startServer() {
  try {
    await sequelize.authenticate()
    console.log('Database connected')

    await sequelize.sync() 
    console.log('Database synced')

    await seed()
    console.log('Database seeded')

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (err) {
    console.error('Unable to start server:', err)
  }
}

startServer()
