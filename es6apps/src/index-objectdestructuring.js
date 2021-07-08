

// function printEmployee(employee) {

//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`department ${employee.department}`)

// }

// function printEmployee(employee) {
//     //break object property ; destructuring
//     const { id, name, department } = employee;
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`department ${department}`)

// }

////break object property ; destructuring
// function printEmployee({ id, name, department }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`department ${department}`)
// }

const printEmployee = ({ id, name, department }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`department ${department}`)
}

printEmployee({ id: 1, name: 'subramanian', department: 'Training' })
//...................................................................................

// function getStockValues() {
//     return {
//         id: 1,
//         value: 100,
//         symbol: 'Google'
//     }
// }
// console.log(getStockValues())


// function getStockValues(id = 1, value = 1000, symbol = 'Google') {
//     return {
//         id: id,
//         value: value,
//         symbol: symbol
//     }
// }



// function getStockValues(id = 1, value = 1000, symbol = 'Google') {
//     //destructure : left : right === make it one id:id=>id
//     return {
//         id,
//         value,
//         symbol,
//     }
// }
// const getStockValues = (id = 1, value = 1000, symbol = 'Google') => {
//     return {
//         id,
//         value,
//         symbol,
//     }
// }

const getStockValues = (id = 1, value = 1000, symbol = 'Google') => ({
    id,
    value,
    symbol,
})


console.log(getStockValues())
console.log(getStockValues(3, 1000, 'MicroSoft'))
/////////////////////////////////////////////////////////////////////////////////////

class UserService {
    constructor() {

    }
    findAll() {
        return 'findAll users'
    }
    save() {
        return 'save users'
    }
    update() {
        return 'update users'
    }
}
//old way of calling methods
let service = new UserService();

console.log(`${service.findAll()}`)
console.log(`${service.save()}`)
console.log(`${service.update()}`)

//new way of calling

const { findAll, save, update } = new UserService();

console.log(`${findAll()}`)
console.log(`${save()}`)
console.log(`${update()}`)





