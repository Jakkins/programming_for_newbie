let utils = require('./utils')
let pathsARR = ['/home/sam/Github', '/home/sam/Android', '/home/sam/000-readme', '/home/sam/Desktop']

/*
    Promise funziona solo con funzioni asincrone 
    perché le funzioni asincrone ritornano appunto una Promise
*/

Promise.all(
    [
        utils.getSizeDirRecursiveSync_1_0(pathsARR[0]),
        utils.getSizeDirRecursiveSync_1_0(pathsARR[1]),
        utils.getSizeDirRecursiveSync_1_0(pathsARR[2]),
        utils.getSizeDirRecursiveSync_1_0(pathsARR[3])
    ]
)
    .then(results => {
        console.log(results)
    })
    .catch(error => console.error(error))

/*
    DO THIS WORK?

    LET'S SEE
*/
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo1');
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'foo2');
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo3');
})

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
})

/*
    OR
*/
function myFunc(arg, resolve) {
    console.log(`arg was => ${arg}`)
    resolve()
}

function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(myFunc, 2500, 'f1', resolve)
    })
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(myFunc, 1500, 'f2', resolve)
    })
}

function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(myFunc, 500, 'f3', resolve)
    })
}

// call the function to return a Promise or won't work
Promise.all([f1(), f2(), f3()]).catch(error => console.error(error))
