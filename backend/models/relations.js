import User from './User.js'
import List from './List.js'

User.belongsToMany(List, {
  through: 'User_Lists',
  foreignKey: 'userId',
  as: 'lists',
})
List.belongsToMany(User, {
  through: 'User_Lists',
  foreignKey: 'listId',
  as: 'users',
})
