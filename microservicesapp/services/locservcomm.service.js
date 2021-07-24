
const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();

//local services

broker.createService({
    name: 'math',
    actions: {
        add: {
            params: {
                a: 'number',
                b: 'number'
            },
            handler(ctx) {
                const { a, b } = ctx.params
                //invoke services
                return ctx.call('adder.add', { a: a, b: b });
            }

        }
    }
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
                return a + b;
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