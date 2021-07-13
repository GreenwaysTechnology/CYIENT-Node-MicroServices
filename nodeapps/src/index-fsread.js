const fs = require('fs');
//read,write, all fs operations.

const filePath = './src/assets/info.txt';
const options = {
    encoding: 'UTF-8'
}
function block(message){
    console.log(message)
}
block('start')
fs.readFile(filePath, options, (err, data) => {
    if (err) throw err;
    console.log(data);
})
block('end')
