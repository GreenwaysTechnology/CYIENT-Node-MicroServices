const { readFile } = require('./services/FileService')
const path = require('path');


async function main() {
   
    try {
        const filePath = path.join(__dirname, 'assets/info.txt')
        const options = {
            encoding: 'utf-8'
        }
        const data = await readFile(filePath, options)
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}
main()