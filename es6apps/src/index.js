function add(a = 1, b = 2) {
    return a + b;

}
console.log(add())
//store the function into variable
let adder = add;

console.log(adder())