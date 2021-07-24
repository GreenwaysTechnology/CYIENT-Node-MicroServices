const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();


broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello Service'
        }
    }
})


broker.createService({
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai Service'
        }
    }
})


broker.createService({
    name: 'welcome',
    actions: {
        sayWelcome() {
            return 'Welcome Service'
        }
    }
})

async function main() {
    try {
        await broker.start();
        const hello = await broker.call('hello.sayHello')
        const hai = await broker.call('hai.sayHai')
        const welcome = await broker.call('welcome.sayWelcome')
        console.log(`Hello Service : ${hello}`);
        console.log(`Hai Service : ${hai}`);
        console.log(`Welcome Service : ${welcome}`);

    }
    catch (err) {
        console.log(err);
    }
}
main();
