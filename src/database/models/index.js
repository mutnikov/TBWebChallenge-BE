const fs = require('fs');
const { resolve } = require('path');
const { isEmpty } = require('lodash');
const Sequelize = require('sequelize');

const dirPath = resolve(__dirname);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
);

const models = {};

const files = fs.readdirSync(dirPath);

files
  .filter((fileName) => fileName.endsWith('.model.js'))
  .forEach((modelFileName) => {
    const model = sequelize.import(resolve(`${dirPath}/${modelFileName}`));

    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (
    models[modelName].associate
        && isEmpty(models[modelName].associations)
  ) {
    models[modelName].associate(models);
  }
});


module.exports = models;
