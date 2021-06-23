let log = (line) => {
    console.log(line)
}
console.log('\x1b[91m%s\x1b[0m', `------------------------------`)
/*
    fs.mkdir() - fs.mkdirSync()
    fs.readdir() - fs.readdirSync()
    fs.open() - fs.openSync() -> file descriptor
    fs.lstat() - fs.lstatSync()


    fs.stat()
    fs.access()
*/
const fs = require('fs')
const path = require('path')

let dir = process.argv[2] // node node_disksize C:\

fs.readdir(dir, 'utf-8', (err, files) => {
    if(err) throw err
    for(let i=0; i<files.length; i++) {
        let pathtmp = path.join(dir, files[i])
        fs.lstat(pathtmp, (err, stats) => {
            if(err) {
                console.log('\x1b[31m%s\x1b[0m', `busy|locked \t\t\t ${files[i]}`)
            }
            else {
                if(stats.isDirectory()) {
                    launcher(pathtmp) // lancia il calcolo per ogni cartella presente in parallelo
                }
                else if(stats.isFile()) {
                    if(stats.size > 1024) {
                        let zize = stats.size / 1024 // byte -> KB
                        log( stats.size + " KB" + "        " + files[i])
                    } 
                    else if(stats.size > 1024*1024) {
                        let zize = stats.size / 1024 / 1024 // byte -> MB
                        log( stats.size + " MB" + "        " + files[i])
                    } 
                    else log( stats.size + " Byte" + "        " + files[i])
                }
                else console.log('\x1b[93m%s\x1b[0m', `${pathtmp}`) // dati che non sono ne file ne cartelle
            }
        })
    }
})

async function launcher(pathDir) {
    let sizeResult = 0
    let files = fs.readdirSync(pathDir, 'utf-8')
    for(let i=0; i<files.length; i++) {
        let pathtmp = path.join(pathDir, files[i])
        try {
            let stat = fs.lstatSync(pathtmp)
            if(stat.isDirectory()) {
                let internalDirSize = await calculateSizeDirectoryAsync(pathtmp)
                sizeResult += internalDirSize
            }
            else if(stat.isFile()) sizeResult += stat.size
        }
        catch(e) {  }
    }
    printResult(sizeResult, pathDir)
}

async function calculateSizeDirectoryAsync(pathDir) {
    let sizeResult = 0
    let files = fs.readdirSync(pathDir, 'utf-8')

    for(let i=0; i<files.length; i++) {
        let pathtmp = path.join(pathDir, files[i])
        try {
            let stat = fs.lstatSync(pathtmp)
            if(stat.isDirectory()) {
                let newsize = await calculateSizeDirectoryAsync(pathtmp)
                sizeResult += newsize 
            }
            else if(stat.isFile()) sizeResult += stat.size 
        }
        catch(e) {  }
    }
    return sizeResult
}

function printResult(sizeResult, pathDir) {
    if(sizeResult > 1024*1024*1024) { 
        sizeResult = sizeResult / 1024 / 1024 / 1024 // byte -> GB
        sizeResult = sizeResult.toFixed(1);
        console.log('\x1b[36m%s\x1b[0m', `${sizeResult} GB        ${pathDir}`)
    } 
    else if(sizeResult > 1024*1024) {
        let zize = sizeResult / 1024 / 1024 // byte -> MB
        zize = zize.toFixed(1);
        log( zize + " MB" + "        " + pathDir)
    } 
    else if(sizeResult > 1024) {
        let zize = sizeResult / 1024 // byte -> KB
        zize = zize.toFixed(1);
        log( zize + " KB" + "        " + pathDir)
    } 
    else log( sizeResult + " Byte" + "        " + pathDir)
}

/*
mmmmmmh

function calculateSizeDirectory(pathDir, callback) {
    let sizeResult = 0
    fs.readdir(pathDir, 'utf-8', (err, files) => {
        if(err) {  
            // C:\Windows\Temp
        }
        else {
            let flag1 = false
            let flag2 = false
            for(let i=0; i<files.length; i++) {
                let pathtmp = path.join(pathDir, files[i])
                fs.lstat(pathtmp, (err, stats) => {
                    if(err) {  }
                    else if(stats.isDirectory()) {
                        calculateSizeDirectory(pathtmp, (err, size) => {
                            sizeResult += size
                            if(i == files.length-1) callback(sizeResult)
                        })
                    }
                    else { 
                        sizeResult += stats.size 
                        if(i == files.length-1) callback(sizeResult)
                    }
                });
            }
        }
    })
}

*/