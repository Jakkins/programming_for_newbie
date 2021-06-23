/*
    SIGNATURE: https://developer.twitter.com/en/docs/authentication/oauth-1-0a/creating-a-signature
    REQUEST: https://developer.twitter.com/en/docs/authentication/oauth-1-0a/authorizing-a-request
    LIST OF API: https://developer.twitter.com/en/docs/twitter-api/v1
    https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/uploading-media/media-best-practices
   
    OTHERS:
    https://stackoverflow.com/questions/23670403/upload-images-to-twitter-api-from-node-js
    https://www.codeproject.com/articles/676313/twitter-api-v-with-oauth
    http://garyshortblog.wordpress.com/2011/02/11/a-twitter-oauth-example-in-c
    http://oauth.net/core/1.0/

*/

const fs = require('fs')
const request = require('request')
const utils = require('./utils')

const CONSUMER_KEY = '9sAU8KekmRXVcB0eg4A7CTgnS'
const ACCESS_TOKEN = '1040672175341096960-z83DJXaLL5dXdxEQYtwl1kVWaTf6eG'
const CONSUMER_SECRET = '606uwD75kFzGneOzUS1RID94CWobbzIrZf4biauakD0z71ZjnZ'
const ACCESS_TOKEN_SECRET = 'nnIwmr7K6P5MIawjn6W6vSqA88zZ8zbGLlhkhCvFyi6Mn'
const SIGNKEY = utils.encodeTrueURI(CONSUMER_SECRET) + "&" + utils.encodeTrueURI(ACCESS_TOKEN_SECRET)

publish_image('ciao.png')
//update('ciaooo')


function publish_image(path) {

    let buffer = fs.readFileSync(path)

    let methodUrl = {
        method: 'POST',
        url: 'https://upload.twitter.com/1.1/media/upload.json'
    }
    let oauth = utils.setoauth(CONSUMER_KEY, ACCESS_TOKEN)
    let params = {
        'content-type': 'application/form-data',
        command: 'INIT',
        total_bytes: buffer.byteLength,
        media_type: 'image/png'
    }

    oauth.oauth_signature = genSignature(oauth, methodUrl, params, SIGNKEY)
    let options = genOptions(oauth, methodUrl, params)
    console.log(options)

    request(options, function (error, response) {
        if (error) throw new Error(error)
        console.log('\x1b[33m%s\x1b[0m', '========== END INIT ==========')
        console.log(response.statusCode)
        let json = JSON.parse(response.body)
        console.log(json)

        oauth = utils.setoauth(CONSUMER_KEY, ACCESS_TOKEN)
        let params = {
            'content-type': 'application/form-data',
            multipart: [
                {
                    command: 'APPEND',
                    media_id: json.media_id,
                    segment_index: 0,
                    media_data: buffer.toString('base64')
                }
            ]
        }

        oauth.oauth_signature = genMultipartSignature(oauth, methodUrl, params, SIGNKEY)
        let opt = genOptions(oauth, methodUrl, params)
        console.log(opt)

        request(opt, function (error, response) {
            if (error) throw new Error(error)
            console.log('\x1b[33m%s\x1b[0m', '========== END APPEND ==========')
            console.log(response.statusCode)
            console.log(response.body)
            console.log(response.headers)
        })
    })
}

function update(str) {
    let methodUrl = {
        method: 'POST',
        url: 'https://api.twitter.com/1.1/statuses/update.json'
    }
    let oauth = utils.setoauth(CONSUMER_KEY, ACCESS_TOKEN)
    let params = {
        status: str
    }

    oauth.oauth_signature = genSignature(oauth, methodUrl, params, SIGNKEY)
    let options = genOptions(oauth, methodUrl, params)
    console.log(options)

    request(options, function (error, response) {
        if (error) throw new Error(error)
        console.log('\x1b[33m%s\x1b[0m', '========== END UPDATE ==========')
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.headers)
    })    
}

function genSignature(oauth, methodUrl, params, signingKey) {

    // methodUrl + ordered(params + oauth)
    /*
        For params and oauth

        1. Percent encode every key and value that will be signed.
        2. Sort the list of parameters alphabetically [1] by encoded key [2].
        3. For each key/value pair:
        4. Append the encoded key to the output string.
        5. Append the ‘=’ character to the output string.
        6. Append the encoded value to the output string.
        7. If there are more key/value pairs remaining, append a ‘&’ character to the output string.
    */

    str1 = `${methodUrl.method}&${utils.encodeTrueURI(methodUrl.url)}&`

    sortedArray = []
    for(let i in oauth) sortedArray.push([i, oauth[i]])
    for(let i in params) sortedArray.push([i, params[i]])
    sortedArray.sort()

    let str2 = ''
    for( let i=0; i<sortedArray.length; i++) {
        if(i === sortedArray.length-1) str2 += `${sortedArray[i][0]}=${sortedArray[i][1]}`
        else str2 += `${sortedArray[i][0]}=${sortedArray[i][1]}&`
    }

    let stringToHash = str1.concat(utils.encodeTrueURI(str2))
    return utils.getHmacBase64(stringToHash, signingKey)
} 

function genOptions(oauth, methodUrl, params) {
    
    // The header are just the 7 oauth params
    // , and space
    let headers = {
        'Authorization': `OAuth oauth_consumer_key="${utils.encodeTrueURI(oauth.oauth_consumer_key)}", ` +
            `oauth_token="${utils.encodeTrueURI(oauth.oauth_token)}", ` +
            `oauth_signature_method="${utils.encodeTrueURI(oauth.oauth_signature_method)}", ` +
            `oauth_timestamp="${utils.encodeTrueURI(oauth.oauth_timestamp)}", ` +
            `oauth_nonce="${utils.encodeTrueURI(oauth.oauth_nonce)}", ` +
            `oauth_version="${utils.encodeTrueURI(oauth.oauth_version)}", ` +
            `oauth_signature="${utils.encodeTrueURI(oauth.oauth_signature)}"`
    }

    // Build url with query from params
    sortedArray = []
    for(let i in params) sortedArray.push([i, params[i]])
    sortedArray.sort()
    let str = methodUrl.url + '?'
    // Should I URL encode the value here?
    for( let i=0; i<sortedArray.length; i++) {
        if(i === sortedArray.length-1) str += `${sortedArray[i][0]}=${sortedArray[i][1]}`
        else str += `${sortedArray[i][0]}=${sortedArray[i][1]}&`
    }

    let options = {
        'method': methodUrl.method,
        'url': str,
        'headers': headers
    }

    return options
}

function genMultipartSignature(oauth, methodUrl, params, signingKey) {
    sortedArray = []
    for(let i in oauth) sortedArray.push([i, oauth[i]])
    sortedArray.sort()

    let str2 = ''
    for( let i=0; i<sortedArray.length; i++) {
        if(i === sortedArray.length-1) str2 += `${sortedArray[i][0]}=${sortedArray[i][1]}`
        else str2 += `${sortedArray[i][0]}=${sortedArray[i][1]}&`
    }

    let stringToHash = utils.encodeTrueURI(str2)
    return utils.getHmacBase64(stringToHash, signingKey)
} 

/*
    https://upload.twitter.com/1.1/media/upload.json?command=APPEND&media_data=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&media_id=1322151230471344129&segment_index=0
*/