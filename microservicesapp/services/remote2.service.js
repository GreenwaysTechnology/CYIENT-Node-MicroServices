
    const { ServiceBroker } = require('moleculer');

    const broker = new ServiceBroker({
         nodeID:'Cyient-Server-2',
         transporter:'nats://localhost:4222'
    });

    broker.createService({
        name: 'adder',
        actions: {
            add: {
                params: {
                    a: 'number',
                    b: 'number'
                },
                handler(ctx) {
                    const { a, b } = ctx.params
                    return `${a + b} - ${broker.nodeID}`;
                }

            }
        }
    });

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