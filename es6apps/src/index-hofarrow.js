
const connect = (serverType, action) => {
    if (typeof action === 'function') {
        action(`${serverType} starts`);
    } else {
        //  throw new Error('Unknow type')
        console.log('Please Pass Functions')
    }
}
let webserver = server => console.log(server);
connect('Web Server', webserver)
connect('Mail Server', server => console.log(server))

/////////////////////////////////////////////////////////////////////////////////////
//how to pass two functions : one for success and another for failure

const login = (username, password, success, failure) => {
    if (username === 'admin' && password === 'admin') {
        success('Login success')
    } else {
        failure('Login failed')
    }
}
login('admin', 'admin', response => console.log(response), error => console.log(error))
login('foo', 'foo', response => console.log(response), error => console.log(error))













