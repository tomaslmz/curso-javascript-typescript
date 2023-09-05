const read = require('./src/read');
const write = require('./src/write');

write('teste.txt', 'Olá!');

const readFile = async (dir) => {
    const data = await read(dir);

    console.log(data);
}

readFile(__dirname + '/teste.txt');