const mysql = require('mysql2/promise');
require('dotenv').config();

const dbName = process.env.DB_NAME;

mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
}).then((connection) => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then(() => {
    console.info('Database create or successfully checked');
    process.exit(0);
  });
});
