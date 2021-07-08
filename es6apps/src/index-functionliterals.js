function add(a = 1, b = 2) {
    return a + b;

}
console.log(add())
//store the function into variable
let adder = add;

console.log(adder())
/////////////////////////////////////////////////////////////////////////////////////
//Syntax 2:

//anonmous function

let greet = function () {
    console.log('greet')
};
greet();

//anonmous functions with params and args
let multiply = function (a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    return a * b;
};
console.log(multiply(3,5))

