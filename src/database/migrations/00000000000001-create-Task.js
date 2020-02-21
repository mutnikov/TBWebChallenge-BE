module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Task', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    description: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    checked: {
      type: Sequelize.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Task'),
};
