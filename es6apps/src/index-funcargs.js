
//message is called arg
function sayHello(message) {
    console.log(message)
}
//Hello is parameter
sayHello('Hello')

//a, b are variables- arg variables
//default args ; if undefined is supplied you can replace with default values
function multiply(a = 0, b = 0) {
    let c = a * b;
    console.log(`Multiply Res ${c}`)
}
multiply(10, 10)
multiply(); // undefined,undefined

//i want to design function which must take more args, which i dont know in advance
// variable args -  var...args

//rest operator
function  log(...message){
    console.log(message)
}
log('app')
log('app', 'error')
log('app', 'error', 'in myfile.txt')