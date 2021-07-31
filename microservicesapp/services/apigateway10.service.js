const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const broker = new ServiceBroker();


broker.createService({
    name: "users",
    actions: {
        list: {
            rest: "GET /",
            handler(ctx) {
                return USERS;
            }
        },
        get: {
            rest: "GET /:id",
            handler(ctx) {
                return USERS.filter(user => user.id == ctx.params.id)
            }
        }
    }
})

broker.createService({
    name: "admin",
    actions: {
        getAdmin() {
            return 'admin'
        }
    }
})

//Frond End Service
//entry url configuration and action configuration - frond to back end configuration

broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        //cors
        cors: {
            methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD"],
            origin: "*"
        },
        //global middlewares
        use: [
            cookieParser()
        ],

        routes: [
            {
                path: "/admin",
                aliases: {
                    "GET admin": "admin.getAdmin"
                }

            },
            {
                path: "/api",
                //router middelware 
                use: [
                    compression(),
                    //error handler
                    function (err, req, res, next) {
                        //
                        this.logger.error('Errors')
                        this.sendError(res, res, err);
                    }
                ],

                aliases: {

                },
                autoAliases: true
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