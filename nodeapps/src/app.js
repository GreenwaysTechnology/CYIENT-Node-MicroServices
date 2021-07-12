const { findAll } = require('./services/Todo.service');

async function main() {
    try {
        const todos =  await findAll();
        console.log(todos)
    }
    catch (err) {
        console.log(err);
    }
}
main();