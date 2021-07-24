const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();


broker.createService({
    name: 'greeter',
    version: 1,
    actions: {
        sayHello: {
            handler() {
                return 'Hello'
            }

        },
        sayHai: {
            handler() {
                return 'Hai'
            }
        },
        sayWelcome: {
            handler() {
                return 'Welcome'
            }
        }
    }
})



async function main() {
    try {
        await broker.start();
        const hello = await broker.call('v1.greeter.sayHello')
        const hai = await broker.call('v1.greeter.sayHai')
        const welcome = await broker.call('v1.greeter.sayWelcome')
        console.log(`${hello} ${hai} ${welcome}`)
    }
    catch (err) {
        console.log(err);
    }
}
main();
