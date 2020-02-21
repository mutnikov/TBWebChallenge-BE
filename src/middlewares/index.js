const fs = require('fs');
const { resolve } = require('path');

const dirPath = resolve(__dirname);

module.exports = fs
  .readdirSync(dirPath)
  .filter((fileName) => fileName !== 'index.js')
  .reduce(
    // eslint-disable-next-line global-require,import/no-dynamic-require
    (res, f) => ({ ...res, [f.replace('.js', '')]: require(`./${f}`) }),
    {},
  );
