const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    nodeID: 'MainServer',
    transporter: "nats://localhost:4222",
});

broker.createService({
    name: 'main',
    actions: {
        async begin(ctx) {
            const { a, b,timeout } = ctx.params
            let res = await ctx.call('remote1.calculate', { a, b },{
                    timeout: timeout,
                    fallbackResponse() {
                        //return data from caching server
                        return `The Result is From cachining Server ${0}`
                    }
             })
            console.log(`Result Got From Remote Services ${res}`)
        }
    }
})

//rest service to call main service

async function init() {
    await broker.start()
    broker.repl()
}
init();


async function init() {
    await broker.start()
    broker.repl()
}
init();