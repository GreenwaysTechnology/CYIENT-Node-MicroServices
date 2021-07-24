const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();


broker.createService({
    name: 'greeter',
    version: 1,
    actions: {
        sayHello(ctx) {
            // const name = ctx.params.name;
            const { name } = ctx.params;
            return `Hello ${name}`
        },
        sayHai: {
            //validation:
            params: {
                name: 'string'
            },
            handler(ctx) {
                const { name } = ctx.params;
                return `Hai ${name}`
            }
        }
    }
})



async function main() {
    try {
        await broker.start();
        const hello = await broker.call('v1.greeter.sayHello', { name: 'Subramanian' })
        const hai = await broker.call('v1.greeter.sayHai', { name: 'Subramanian' })
        console.log(`${hello} ${hai}`)

        //with other type
        const res = await broker.call('v1.greeter.sayHai', { name: 123 })
    }
    catch (err) {
        console.log(err);
    }
}
main();
