const EventEmitter = require('events');

class CustomerService extends EventEmitter {
    constructor() {
        super();
        //register custom events
        this.on('sales', data => { console.log(data) });
    }
    //biz
    buy(product) {
        this.emit('sales', product) //emit event and send data
    }
}
let customerService = new CustomerService();
customerService.buy({ id: 1, name: 'Node.js In Action', category: 'book', price: 100 })
customerService.buy({ id: 2, name: 'libuv.js In Action', category: 'book', price: 100 })
