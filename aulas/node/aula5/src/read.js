const fs = require('fs').promises;

module.exports = (dir) => fs.readFile(dir, 'utf8');