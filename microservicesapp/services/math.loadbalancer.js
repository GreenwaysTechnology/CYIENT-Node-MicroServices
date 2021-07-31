const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222",
    registry : {
        discoverer: "Local",
        strategy : "Random" //load balancer algorthim
    },
});

//back end service
broker.createService({
    name: 'math',
    actions: {
        calculate: {
            handler(ctx) {
                const { a } = ctx.params;
                return `${parseInt(a) + 10} from ${broker.nodeID}`;
            }
        }
    }
})


async function main() {
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
main();


