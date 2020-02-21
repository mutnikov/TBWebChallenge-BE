module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    checked: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'Task',
  });
  Task.associate = function (db) {
    db.Task.belongsTo(db.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
  };
  return Task;
};
