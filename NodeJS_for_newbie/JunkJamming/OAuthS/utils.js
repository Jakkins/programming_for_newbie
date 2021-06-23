const https = require('https')
const crypto = require('crypto')

function fetch (link) {
    return new Promise( (resolve, reject) => {
        https.get(link, (res) => {
            let html = ''
            res.on('data', (chunk) => { html += chunk })
            res.on('end', () => { resolve(html) })
        })
    })
}

function compareDates(dateToday, dateJson) {
    if(dateToday === 0 ) return true
    else if(dateToday.getDate() !== dateJson.getDate())
        if(dateToday.getMonth() !== dateJson.getMonth())
            return true
        else return false
}

function encodeTrueURI(str) {
    return encodeURIComponent(str)
        .replace(/\!/g, "%21")
        .replace(/\*/g, "%2A")
        .replace(/\'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29");
}

function getNonce32Bytes(timestamp) {
    let nonce = timestamp
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(let i=nonce.length; i<32; i++) 
        nonce += possible.charAt(Math.floor(Math.random() * possible.length));
    return nonce
}

function getHmacBase64(string, key){
    var hmac = crypto.createHmac('sha1', key);
    hmac.update(string); 
    return hmac.digest('base64'); 
}

function setoauth(oauth_consumer_key, oauth_token) {
    let date = new Date()
    let timestamp = date.getTime() / 1000 // millis to sec
    let nonce = getNonce32Bytes(date.getTime().toString())
    let oauth = {
        oauth_consumer_key: oauth_consumer_key,
        oauth_token: oauth_token,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: timestamp,
        oauth_nonce: nonce,
        oauth_version: '1.0'
    }
    return oauth
}
module.exports.fetch = fetch
module.exports.compareDates = compareDates
module.exports.encodeTrueURI = encodeTrueURI
module.exports.getNonce32Bytes = getNonce32Bytes
module.exports.getHmacBase64 = getHmacBase64
module.exports.setoauth = setoauth