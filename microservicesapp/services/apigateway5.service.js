const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')

const broker = new ServiceBroker();


broker.createService({
    name: "users",
    actions: {
        list() {
            return USERS
        },
        get(ctx) {
            console.log(ctx.params)
            return USERS.filter(user => user.id == ctx.params.id)
        },
        create(ctx) {
            console.log(ctx.params)
            return 'User Created'
        },
        update(ctx) {
            return 'User updated'
        },
        remove(ctx) {
            return 'User removed'
        }

    }
})

//Frond End Service
//entry url configuration and action configuration - frond to back end configuration

broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        routes: [
            {
                path: "/api",
                aliases: {
                    "REST users": "users",
                    "GET myapi"(req, res) {
                        // res.end("Hello This is my api")
                        res.end(JSON.stringify(USERS));
                    }
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