module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
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
    url: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
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
    tableName: 'Picture',
  });
  Picture.associate = function (db) {
    db.Picture.belongsTo(db.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
  };
  return Picture;
};
