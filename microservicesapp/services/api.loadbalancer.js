const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222",
   
    
});

broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        routes: [
            {
                path: "/api",
                aliases: {
                    "GET add/:a": "math.calculate"
                }
            }
        ]
    }
})

async function init() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
init();