module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Picture', {
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
    url: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
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
  down: (queryInterface) => queryInterface.dropTable('Picture'),
};
