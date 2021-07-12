//Promise Composition

function getValue1() {

    //return Promise.resolve(1)
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, 1);
    })
}
function getValue2() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 15000, 2);
    })
}
function getValue3() {
    return Promise.resolve(3)
}
function getValue4() {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 6000, "error");
    // })
    return Promise.resolve(4)

}

// Promise.all([getValue1(), getValue2(), getValue3(),getValue4()])
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err);
//     });

async function main() {

    try {
        const res = await Promise.all([getValue1(), getValue2(), getValue3(), getValue4()])
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}
main();