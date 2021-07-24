
const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();

broker.createService({
    name: 'entry'
})

async function main() {
    broker.loadService('./services/math.service');
    try {
        await broker.start()
        const res = await broker.call('math.add', { a: 10, b: 10 })
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }

}
main();