
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

// const { log } = console;;
// getUser()
//     .then(login)
//     .then(showPage)
//     .then(log)
//     .catch(log);

async function main() {

    try {
        const user = await getUser();
        const status = await login(user);
        const page = await showPage(status);
        console.log(user, status, page);
    }
    catch (err) {
        console.log(err);
    }

}
main()