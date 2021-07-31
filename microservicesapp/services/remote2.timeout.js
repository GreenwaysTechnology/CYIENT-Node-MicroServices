const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    nodeID: 'RemoteNode-2',
    transporter: "nats://localhost:4222",
    registry: {
        strategy: "Random"
    },
    requestTimeout: 5 * 1000 // in milliseconds
});

broker.createService({
    name: 'remote2',
    actions: {
        async calculate(ctx) {
            const { a, b } = ctx.params
            // return `${a + b} - ${broker.nodeID} `;
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 4000, `${a + b} - ${broker.nodeID} `)
            })
        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();
