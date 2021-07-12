//nested callbacks ; the output of one callback will be input to the another callback.

const getUser = (resolve, reject) => {
    console.log('Get User is called');
    //biz logic
    let user = { id: 1, name: 'admin', password: 'admin' }
    let error = { code: 404, message: 'User not found' }
    //user = null;
    if (user) {
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(reject, 1000, error);
    }
};

const login = (user, resolve, reject) => {
    console.log('login is called');

    //login logic
    let status = 'Login success';
    let error = { code: 404, message: 'Login failed' }
    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, status);
    }
    else {
        setTimeout(reject, 1000, error);
    }

}
const showPage = (status, resolve, reject) => {
    console.log('Show page is called');

    //login logic
    let adminPage = 'Admin Page';
    let guestPage = 'Guest Page'
    if (status === 'Login success') {
        setTimeout(resolve, 1000, adminPage);
    }
    else {
        setTimeout(reject, 1000, guestPage);
    }

}


getUser(user => {
    login(user, status => {
        showPage(status, page => {
            console.log(page);
        }, errorPage => {
            console.error(errorPage)
        })
    }, err => {
        console.error(err);
    });
}, err => {
    console.error(err);
});