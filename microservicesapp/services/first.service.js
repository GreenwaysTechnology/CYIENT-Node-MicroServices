const { ServiceBroker } = require('moleculer')

//ServiceBroker object creation
const broker = new ServiceBroker();

//create Service : Service represents biz functionality.

broker.createService({
    name: 'first',
    actions: {
        sayFirst() {
            console.log('sayFirst is called')
            return 'I am First Micro Service'
        }
    }
})

//access/call service methods
function mainUsingPromises() {
    broker.start()
        .then(() => {
            console.log('Broker is ready!!')
            //invoke service
            broker.call('first.sayFirst')
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log('Broker failed to start!!')
        });
}

async function main() {
    try {
       await broker.start();
       const res = await broker.call('first.sayFirst')
       console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}
main();
