
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

let getSizeDirSync_1_0 = url => {
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
            sizeBytes += getSizeDirSync_1_0(check_this_path)
        }
    })
    return sizeBytes
}

function prova(url) {
    fs.stat(url, (err, stats) => {
        if (stats.isFile()) {
            sizeBytes = stats.size
        }
        if (stats.isDirectory()) {
            dir_inside_url.push = {
                url: path.join(url, element),
                size: getSizeDirSync_1_0(path.join(url, element))
            }
        }
    })
}

/**
 * 
 * https://www.coreycleary.me/executing-arrays-of-async-await-javascript-functions-in-series-vs-concurrently/
 * 
 * @param {*} url 
 * @param {*} files_list 
 * @param {*} sizeBytes 
 * @param {*} dir_inside_url 
 */
function getSizeSubDirs(url, files_list, sizeBytes, dir_inside_url) {
    files_list.forEach(element =>
        dir_inside_url.push(prova(path.join(url, element)))
    )
    console.log(dir_inside_url)
}

async function main() {
    let url = "/home/sam"
    let files_list = fs.readdirSync(url)
    let dir_inside_url = []
    let sizeBytes = 0

    await getSizeSubDirs(url, files_list, sizeBytes, dir_inside_url)

    // console.log(dir_inside_url)
    console.log(url + ' ' + sizeBytes)
    dir_inside_url.forEach(obj => {
        console.log('\t' + obj.size + ' ' + obj.url)
    })
}
main()











/*
let getKeys = obj => {
    let keys = []
    for(let k in obj) {
        if(obj.hasOwnProperty(k)) {
            console.log(obj[k])
        }
        keys.push(k)
    }
    return keys
}
*/