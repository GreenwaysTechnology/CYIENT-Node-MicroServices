//state initalization: hardcoded,after object creations,during object creation.

function Employee(id = 1, name = 'subramanian') {
    //hardcoded
    this.id = id //1;
    this.name = name //'subramanian'
    //instance methods
    this.calculateSalary = function () {
        return 10;
    }
}
let emp = new Employee();
console.log(`Id : ${emp.id} Name : ${emp.name} Salary :  ${emp.calculateSalary()}`)

emp = new Employee();
emp.id = 9999;
emp.name = 'Karthik'
console.log(`Id : ${emp.id} Name : ${emp.name} Salary :  ${emp.calculateSalary()}`)

emp = new Employee(34, 'Ram');
console.log(`Id : ${emp.id} Name : ${emp.name} Salary :  ${emp.calculateSalary()}`)


class Customer {
    constructor(id = 1, name = 'Subramanian') {
        this.id = id;
        this.name = name;
    }
    calculateInvoice() {
        return 10;
    }
}

let cust = new Customer();
console.log(`Id : ${cust.id} Name : ${cust.name} Invoice :  ${cust.calculateInvoice()}`)

cust = new Customer();
cust.id = 9999
cust.name = 'John'
console.log(`Id : ${cust.id} Name : ${cust.name} Invoice :  ${cust.calculateInvoice()}`)

cust = new Customer(56, 'Jerry');
console.log(`Id : ${cust.id} Name : ${cust.name} Invoice :  ${cust.calculateInvoice()}`)

let product = {
    id: 1,
    name: 'Phone'
};
console.log(`Product id ${product.id} name ${product.name}`);
product.id = 9000;
product.name = 'Building Materials'
console.log(`Product id ${product.id} name ${product.name}`);
