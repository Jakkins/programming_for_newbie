const crypto = require('crypto')
const req = require('./TwitterRequest')

let date = new Date()
let timestamp = date.getTime() / 1000 // millis to sec
let nonce = genNonce(date.getTime().toString())

// oauth_consumer_key = Application Identifier/Auth
// oauth_token        = User Identifier/Auth (OAuth 1.0a API requests)
let params = {
    method: 'GET',
    url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
    oauth_consumer_key: '9sAU8KekmRXVcB0eg4A7CTgnS',
    oauth_token: '1040672175341096960-ETODHz95N0wYg9xIJLGi3X9m7QDCYC',
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_nonce: nonce,
    oauth_version: '1.0',
    oauth_signature: null
}

let str = genSignatureBaseString(params)

let ConsumerKeySecret = '606uwD75kFzGneOzUS1RID94CWobbzIrZf4biauakD0z71ZjnZ'
let AccessTokenSecret = 'd1EsfTp7M68D2Sql2j70QkhLW77oseJeQeadwuUMqLqvL'
let signingKey = encodeTrueURI(ConsumerKeySecret) + "&" + encodeTrueURI(AccessTokenSecret)
params.oauth_signature = encodeTrueURI(getHmac(str, signingKey))

req(params)

// ========================================================================================
// Funzioni

function getHmac(string, key){
    var hmac = crypto.createHmac('sha1', key)
    hmac.update(string)
    return hmac.digest('base64')
}

function encodeTrueURI(str) {
    return encodeURIComponent(str)
        .replace(/\!/g, "%21")
        .replace(/\*/g, "%2A")
        .replace(/\'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29");
}

function genNonce(timestamp) {
    let nonce = timestamp
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(let i=nonce.length; i<32; i++) 
        nonce += possible.charAt(Math.floor(Math.random() * possible.length));
    return nonce
}

function genSignatureBaseString(params) {
    return `${params.method}&${encodeTrueURI(params.url)}&` +
    `oauth_consumer_key%3D${params.oauth_consumer_key}%26` + 
    `oauth_nonce%3D${params.oauth_nonce}%26` +
    `oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D${params.oauth_timestamp}%26` + 
    `oauth_token%3D${params.oauth_token}%26` +
    'oauth_version%3D1.0'
}