const fs = require('fs');

const readStream = fs.createReadStream('demo.txt', 'utf8');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);
