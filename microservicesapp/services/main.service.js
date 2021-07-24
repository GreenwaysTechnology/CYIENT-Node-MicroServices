
const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();


async function main() {
    broker.loadService('./services/math.service');
    //loading multiple services
    //broker.loadServices(folder="services",fileMask="**/*.service")
    //load all services from the current loader
    //broker.loadServices("./")

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