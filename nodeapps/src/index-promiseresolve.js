
//callback based
// const delay = action => {
//     setTimeout(action, 0)
// }
// delay(res=>console.log(res))

const blockMe = message => console.log(message)
const delay = () => {
    return Promise.resolve('Hello');
}

blockMe('starting')
delay().then(res => console.log(res))
blockMe('ending')