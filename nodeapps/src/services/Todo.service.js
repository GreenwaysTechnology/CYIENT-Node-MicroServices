const TODOS = require('../mock-data/todo')

class TodoService {
    //api:async
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, TODOS)
        });
    }
    //add apis
    save(todo) {

    }
    findByid(id) {

    }
    fetchCompletedTodos() {

    }
    remove(id){

    }
    update(id){
        
    }
}
module.exports = new TodoService();