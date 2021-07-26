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
function myFunc(arg) {
    console.log(`arg was => ${arg}`)
}

function f1() {
    setTimeout(myFunc, 2500, 'f1')
}

function f2() {
    setTimeout(myFunc, 1500, 'f2')
}

function f3() {
    setTimeout(myFunc, 500, 'f3')
}

Promise.all([f1, f2, f3])
    .then(results => {
        console.log(results)
    })
    .catch(error => console.error(error))

