module.exports = (sequelize, DataTypes) => sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  logo: DataTypes.STRING,
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
}, {
  tableName: 'User',
});
