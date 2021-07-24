const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();


broker.createService({
    name: 'hello',
    version: 1,
    actions: {
        sayHello() {
            return 'Hello Legacy'
        }
    }
})
broker.createService({
    name: 'hello',
    version: 2,
    actions: {
        sayHello() {
            return 'Hello new Feature'
        }
    }
})


async function main() {
    try {
        await broker.start();
        const helloV1 = await broker.call('v1.hello.sayHello')
        console.log(`Service Response : ${helloV1}`);
        const helloV2 = await broker.call('v2.hello.sayHello')
        console.log(`Service Response : ${helloV2}`);

    }
    catch (err) {
        console.log(err);
    }
}
main();
