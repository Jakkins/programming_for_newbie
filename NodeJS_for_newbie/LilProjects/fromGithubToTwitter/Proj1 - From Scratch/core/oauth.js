/*
    Create the base signature string
    1. Create the method&URL string
    2. sort all the other params to create the second_string
    3. concat the first string with second_string and sign it with signingKey
*/
const utils = require('./utils')

/*
    Alphabetic order it's required!
    - oauth_consumer_key
    - oauth_nonce
    - oauth_signature_method
    - oauth_timestamp
    - oauth_token
    - oauth_version
*/
function sign(params, signingKey) {

    let copy = JSON.parse(JSON.stringify(params))

    let str1 = `${copy.method}&${utils.encodeTrueURI(copy.url)}&`
    delete copy.method
    delete copy.url
    delete copy.oauth_signature

    var sortedArray = []
    for(let i in copy) // Push each JSON Object entry in array by [key, value]
        sortedArray.push([i, copy[i]])
    sortedArray.sort()

    let str2 = ''
    for( let i=0; i<sortedArray.length; i++) {
        if(i === sortedArray.length-1) str2 += `${sortedArray[i][0]}=${sortedArray[i][1]}`
        else str2 += `${sortedArray[i][0]}=${sortedArray[i][1]}&`
    }

    let stringToHash = str1.concat(utils.encodeTrueURI(str2))
    console.log(stringToHash)
    params.oauth_signature = utils.encodeTrueURI(utils.getHmacBase64(stringToHash, signingKey))
}

module.exports.sign = sign

/* 
    let stringToHash =  `oauth_consumer_key%3D${params.oauth_consumer_key}%26` + 
    `oauth_nonce%3D${params.oauth_nonce}%26` +
    `oauth_signature_method%3DHMAC-SHA1%26` +
    `oauth_timestamp%3D${params.oauth_timestamp}%26` + 
    `oauth_token%3D${params.oauth_token}%26` +
    'oauth_version%3D1.0'
*/

/*
    GET&https%3A%2F%2Fapi.twitter.com%2F1.1%2Fstatuses%2Fuser_timeline.json&
    oauth_consumer_key%3D9sAU8KekmRXVcB0eg4A7CTgnS%26
    oauth_nonce%3D1604002494629iwHeenW3jRB3XLjdSma%26
    oauth_signature%3Dnull%26 <------------------------------------------
    oauth_signature_method%3DHMAC-SHA1%26
    oauth_timestamp%3D1604002494.629%26
    oauth_token%3D1040672175341096960-ETODHz95N0wYg9xIJLGi3X9m7QDCYC%26oauth_version%3D1.0
*/