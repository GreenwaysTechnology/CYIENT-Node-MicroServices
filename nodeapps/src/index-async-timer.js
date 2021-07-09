//

// function blockMe(message){
//    console.log(message)
// }

const blockMe = message => console.log(message)

const delay = action => {
    //non blocking api
    setTimeout(action, 5000)
}

blockMe('starting')
delay(() => console.log('i am delayed function!!!!'))
blockMe('ending')
