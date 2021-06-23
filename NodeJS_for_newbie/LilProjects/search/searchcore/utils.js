const fs = require('fs')

function error(str) {
    console.error('\x1b[31m%s\x1b[0m', str)
    return 1
}

function getJsonSync(path) {
    let datas = fs.readFileSync(path)
    return JSON.parse(datas)
}


module.exports.error =error
module.exports.getJsonSync =getJsonSync