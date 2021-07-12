
const blockMe = message => console.log(message)
const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('Login Failed')
    }
}

blockMe('starting')
login('admin', 'admin')
    .then(res => console.log(res))
    .catch(err => console.log(err));
login('foo', 'bar')
    .then(res => console.log(res))
    .catch(err => console.log(err));
blockMe('ending')