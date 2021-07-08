
//Higher order function.

function counter() {
    console.log('counter')
    // function inc() {
    //     console.log('inc ')
    // }
    // //inc()
    // return inc;
    return function () {
        console.log('inc ')
    }
}
// let func = counter();
// func()
// inc()
counter()()

//curry function

function connect() {
    console.log('outer')
    return function () {
        console.log('inner-1')
        return function () {
            console.log('inner-2')
            return function () {
                console.log('inner-3')
            }
        }
    }
}
connect()()()()