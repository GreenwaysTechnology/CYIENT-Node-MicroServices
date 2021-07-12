
const blockMe = message => console.log(message)
const delay = () => {
    return Promise.reject('somethingwent wrong');
}

blockMe('starting')
delay()
.then(res => console.log(res))
.catch(err=>console.log(err))
blockMe('ending')