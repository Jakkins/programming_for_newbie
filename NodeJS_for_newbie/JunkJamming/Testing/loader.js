const try1 = require('./try1.js')
const try2 = require('./try2.js')
const try3 = require('./try3.js')

function ciao() {
    let numero = 0
    try1(numero)
    try2(numero)
    try3(numero)
}

function ora() {
    console.log('1UP')
}

module.exports = ciao
module.exports.ora = ora