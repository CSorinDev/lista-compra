import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const List = sequelize.define('List', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  items: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
})

export default List
