const router = require('express').Router();

const fs = require('fs');
const { resolve } = require('path');

const dirPath = resolve(__dirname);

fs.readdirSync(dirPath)
  .filter((fileName) => fileName !== 'index.js')
  .forEach((f) => router.use(`/${f.replace('.js', '')}`, require(`./${f}`)));

module.exports = router;
