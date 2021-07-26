const fs = require('fs')
const path = require('path')

let validPath = url => {
    try {
        fs.existsSync(url)
        fs.accessSync(url, fs.constants.R_OK | fs.constants.W_OK)
        return true
    } catch (error) {
        // console.log(JSON.stringify(error, null, 2))
        // console.log(error.code)
        return false
    }
}

let getSizeDirRecursiveSync_1_0 = url => {
    if (validPath(url) === false) return '0'
    let sizeBytes = 0
    let files = fs.readdirSync(url) // trovo i file dentro una cartella
    files.forEach(element => {     // per ogni file, controllo se file o cartella

        // se join con un symlink rotto il programma crasha
        let check_this_path = path.join(url, element)
        if (validPath(check_this_path) === false) {
            return 0// equivalent to continue
        }

        let stats = fs.statSync(check_this_path)
        if (stats.isSymbolicLink()) {

        }
        else if (stats.isFile()) {
            sizeBytes += stats.size
        }
        else if (stats.isDirectory()) {
            sizeBytes += getSizeDirRecursiveSync_1_0(check_this_path)
        }
    })
    return sizeBytes
}

module.exports = { 
    getSizeDirRecursiveSync_1_0: getSizeDirRecursiveSync_1_0
}