module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('User', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    userName: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: Sequelize.STRING,
    },
    logo: {
      type: Sequelize.STRING,
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
  down: (queryInterface) => queryInterface.dropTable('User'),
};
