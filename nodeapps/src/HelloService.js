
class HelloService {
    constructor() {

    }
    sayHello(name) {
        return `Hello ${name}`
    }
}
module.exports = new HelloService();