const https = require('https');
const fs = require('fs');

// https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404?gi=9cf4d4dcc394
// utils.asyncForEach(json.objs, (obj, index, array) => {} )
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

function getJsonSync(path) {
    let datas = fs.readFileSync(path)
    return JSON.parse(datas)
}

const fetch = (link) => {
    return new Promise( (resolve, reject) => {
        https.get(link, (res) => {
            console.log(link)
            let html = ''
            res.on('data', (chunk) => { html += chunk })
            res.on('end', () => { resolve(html) })
        })
    }).catch( () => {
        console.log("> Promise Rejected: fetch failed")
   })
}

module.exports.asyncForEach = asyncForEach
module.exports.getJsonSync = getJsonSync
module.exports.fetch = fetch
