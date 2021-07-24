const { ServiceBroker } = require('moleculer');
const ApiGateWay = require('moleculer-web');
const USERS = require('../mock-data/users')

const broker = new ServiceBroker();

//back end service
broker.createService({
    name: "greeter",
    actions: {
        sayHello() {
            return "Hello"
        }
    }
})

//json 
//http://localhost:3000/users/list
broker.createService({
    name: "users",
    actions: {
        list() {
            return USERS
        }
    }
})


//Use Implicit/Default configuration:
//Front End Service
broker.createService(ApiGateWay)
//http://localhost:3000/servicename/methodname
//http://localhost:3000/greeter/sayHello

async function main() {
    await broker.start();
}
main();
