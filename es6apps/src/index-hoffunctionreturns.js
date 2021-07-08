
//Higher order function.

const counter = () => {
    console.log('counter')
    return () => console.log('inc ')
}
counter()()

//curry function

const connect = () => {
    console.log('outer')
    return () => {
        console.log('inner-1')
        return () => {
            console.log('inner-2')
            return () => console.log('inner-3')
        }
    }
}
connect()()()()

// const prepare = value1 => {
//     return (value2) => {
//         return (value3) => {
                let r = value1 * value2
//             return value4 => {
//                 return `${value1} ${value2} ${value3} ${value4}`
//             }
//         }
//     }
// }

const prepare = value1 => value2 => value3 => value4 => `${value1} ${value2} ${value3} ${value4}`

let finalValue = prepare(1)(2)(3)(4)
console.log(finalValue)

