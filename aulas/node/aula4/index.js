const fs = require('fs').promises;
const path = require('path');

async function getFiles(rootDir) {
    rootDir = rootDir || './';
    
    const files = await fs.readdir(rootDir);

    readFiles(files, rootDir);
}

async function readFiles(files, rootDir) {
    // files.forEach(async (file) => {
        // const fileFullPath = path.resolve(rootDir, file);
        // const stats = await fs.stat(fileFullPath);

        // if(stats.isDirectory()) {
        //     getFiles(fileFullPath);
        // }

        // console.log(file);
    // });

    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(stats.isDirectory()) {
            getFiles(fileFullPath);
            continue;
        }

        console.log(file)
    }
}

getFiles(path.resolve('../'));

