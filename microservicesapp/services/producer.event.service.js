const { ServiceBroker } = require('moleculer')
const ApiGateWayService = require("moleculer-web");

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
})

broker.createService({
    name: 'producer',
    actions: {
        sayHello(ctx) {
            const { message } = ctx.params;
            ctx.emit('producer.message', `${message} from ${ctx.nodeID}`);
        }
    }
})

broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        routes: [
            {
                path: "/api",
                aliases: {
                    "GET events/:message": "producer.sayHello"
                },
                autoAliases: true
            }
        ]
    }
})

async function main() {
    try {
        await broker.start()
        //        broker.repl();
    }
    catch (err) {
        console.log(err)
    }
}

main()