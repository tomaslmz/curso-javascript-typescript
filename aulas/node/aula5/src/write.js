const fs = require('fs').promises;
const path = require('path');

module.exports = (name, content) =>  {
    const pathFile = path.resolve(__dirname, '..', name);

    fs.writeFile(pathFile, content, { flag: 'w' });
}