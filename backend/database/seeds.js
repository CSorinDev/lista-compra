import User from '../models/User.js'
import bcrypt from 'bcrypt'
import { ADMIN_PASSWORD, ADMIN_EMAIL } from '../config/config.js'

export default async function seed() {
  try {
    const isAdmin = await User.findOne({
      where: { email: ADMIN_EMAIL },
    })
    if (isAdmin) return
  } catch (err) {
    console.log(err)
  }

  try {
    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10)

    await User.create({
      name: 'Admin',
      email: ADMIN_EMAIL,
      password: hashedPassword,
      role: 'admin',
    })
  } catch (err) {
    console.log(err)
  }
}
 