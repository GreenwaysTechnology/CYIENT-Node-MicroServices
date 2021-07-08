//Higher order function: function as parameter.
//a =x
function add(a, b) {
    return a + b;
}
//passing values; via variables and hard coded values

//via variables
let x = 1;
let y = 10;
console.log(add(x, y));
console.log(add(10, 3))
/////////////////////////////////////////////////////////////////////////////////////

//action=webserver
function connect(serverType, action) {
    if (typeof action === 'function') {
        action(`${serverType} starts`);
    } else {
        //  throw new Error('Unknow type')
        console.log('Please Pass Functions')
    }
}

let webserver = function (server) {
    console.log(server)
};
connect('Web Server', webserver)

connect('Mail Server', function (server) {
    console.log(server)
})

connect('Database Server', 'test')
/////////////////////////////////////////////////////////////////////////////////////
//how to pass two functions : one for success and another for failure

function login(username, password, success, failure) {
    if (username === 'admin' && password === 'admin') {
        success('Login success')
    } else {
        failure('Login failed')
    }
}
login('admin', 'admin', function (response) {
    console.log(response)
}, function (error) {
    console.log(error)
})

login('foo', 'foo', function (response) {
    console.log(response)
}, function (error) {
    console.log(error)
})













