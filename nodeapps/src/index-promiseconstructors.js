//callback code
const login = (username, password, resolve, reject) => {
    if (username === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')

    }
}
login('admin', 'admin', status => console.log(status), error => console.log(error))

const auth = (username, password) => {
    return new Promise((resolve, reject) => {
        if (username === 'admin' && password === 'admin') {
            setTimeout(resolve, 2000, 'login success-Promise')
        } else {
            setTimeout(reject, 2000, 'login failed-Promise')
        }
    });
}
auth('admin', 'admin')
    .then(res => console.log(res))
    .catch(err => console.log(err));

