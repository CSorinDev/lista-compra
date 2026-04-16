import ListService from '../services/ListService.js'

class ListController {
  static async createList(req, res) {
    try {
      const { name } = req.body
      const userId = req.user.id
      const newList = await ListService.createList(name, userId)
      res.status(201).json(newList)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
}

export default ListController