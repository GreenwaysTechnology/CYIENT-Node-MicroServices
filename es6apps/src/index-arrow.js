
//es 5 anonmous function
let greet = function () {
    console.log('greet')
};
greet();
//es 6 arrow version
greet = () => {
    console.log('greet')
};
greet();
//if function body has only one line of code , we can remove {}
greet = () => console.log('greet');
greet();
//args and paramters:mutli parameters and args, with default values

let add = (a = 0, b = 0) => console.log(`a ${a} b ${b}`)
add()
//return values
add = (a = 0, b = 0) => {
    return a + b;
}
console.log(add(1, 2))
//if function only return, we can remove  {} and return statement.
add = (a = 0, b = 0) => a + b;
console.log(add(1, 2))

//single parameter and return value, without default value, remove()

let getUser = user => user;
console.log(getUser('subramanian'))






