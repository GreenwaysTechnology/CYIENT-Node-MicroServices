
const getUser = () => {
    console.log('Get User is called');
    //biz logic
    return new Promise((resolve, reject) => {
        let user = { id: 1, name: 'admin', password: 'admin' }
        let error = { code: 404, message: 'User not found' }
        //user = null;
        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, error);
        }
    })
};

const login = user => {
    console.log('login is called');
    return new Promise((resolve, reject) => {
        //login logic
        let status = 'Login success';
        let error = { code: 404, message: 'Login failed' }
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, status);
        }
        else {
            setTimeout(reject, 1000, error);
        }
    })

}
const showPage = status => {
    console.log('Show page is called');
    return new Promise((resolve, reject) => {
        //login logic
        let adminPage = 'Admin Page';
        let guestPage = 'Guest Page'
        if (status === 'Login success') {
            setTimeout(resolve, 1000, adminPage);
        }
        else {
            setTimeout(reject, 1000, guestPage);
        }
    });

}


// getUser(user => {
//     login(user, status => {
//         showPage(status, page => {
//             console.log(page);
//         }, errorPage => {
//             console.error(errorPage)
//         })
//     }, err => {
//         console.error(err);
//     });
// }, err => {
//     console.error(err);
// });

getUser()
    .then(user => {
        login(user)
            .then(status => {
                showPage(status)
                    .then(page => {
                        console.log(page)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err));
//////
getUser()
    .then(user => {
        return login(user) //return Promise
    })
    .then(status => {
        return showPage(status)//return Promise
    })
    .then(page => console.log(page))
    .catch(err => console.log(err));

/////
getUser()
    .then(user => login(user))
    .then(status => showPage(status))
    .then(page => console.log(page))
    .catch(err => console.log(err));

//Using destrucing syntax: method reference
const { log } = console;;
getUser()
    .then(login)
    .then(showPage)
    .then(log)
    .catch(log);