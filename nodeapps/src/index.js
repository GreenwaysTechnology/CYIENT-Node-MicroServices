const blockMe = message => console.log(message)

const delay = action => {
    //non blocking api
    let response = 'Data from server'
    setTimeout(action, 5000,response)
}

blockMe('starting')
delay(response => console.log(response))
blockMe('ending')
