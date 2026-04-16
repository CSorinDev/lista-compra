import List from '../models/List.js'

class ListService {
  static async createList(name, userId) {
    if (!name || !userId)
      throw new Error('Todos los campos son obligatorios')

    const newList = await List.create({
      name,
      userId,
    })
    return newList
  }
}

export default ListService
