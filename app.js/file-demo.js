const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello Node');
const data = fs.readFileSync('demo.txt', 'utf8');

console.log(data);
