const request = require('request')
const fs = require('fs')
const utils = require('./utils')
const oauth = require('./oauth')

// Una richiesta diversa ogni API

/*
    Get User Timeline
*/
function user_timeline(params) {
    check(params)
    console.log(params)
    let options = {
        method: params.method,
        url: params.url,
        headers: {
            'Authorization': `OAuth oauth_consumer_key="${params.oauth_consumer_key}",` +
                `oauth_token="${params.oauth_token}",` +
                'oauth_signature_method="HMAC-SHA1",' +
                `oauth_timestamp="${params.oauth_timestamp}",` +
                `oauth_nonce="${params.oauth_nonce}",` +
                'oauth_version="1.0",' +
                `oauth_signature="${params.oauth_signature}"`
        }
    }
    doReq(options)
}

/*
    Publish Image
*/
function publish_image(params, signingKey, path) {

    let buffer = fs.readFileSync(path)

    // Loading INIT params
    // params.Name = 'img'
    params.command = 'INIT'
    params.total_bytes = buffer.byteLength
    params.media_type = 'image/png'
    // params['content-type'] = 'multipart/form-data'
    oauth.sign(params, signingKey) // SIGN
    console.log(params)

    let options = genOption(params)

    request(options, function (error, response) {
        if (error) throw new Error(error)
        console.log('\x1b[33m%s\x1b[0m', '========== END INIT ==========')
        console.log(response.statusCode)
        let json = JSON.parse(response.body)
        console.log(json)

        // TODO authenticate APPEND REQUEST
        // Forse devo ricalcolare un nuovo timestamp ed un nuovo nonce
        
        // new timestamp, new nonce
        let params2 = utils.setparam(params.method, params.url, params.oauth_consumer_key, params.oauth_token)

        // Loading APPEND params
        params2.command = 'APPEND'
        params2.media_id = json.media_id
        params2.segment_index = 1
        params2.media = buffer
        oauth.sign(params2, signingKey) // oauth_signature
        console.log(params2)

        options = genOption(params2)

        options.headers['content-type'] = 'multipart/form-data'

        console.log(options.headers)

        request(options, function (error, response) {
            if (error) throw new Error(error)
            console.log('\x1b[33m%s\x1b[0m', `========== END APPEND ${params2.segment_index} ==========`)
            console.log(response.body)
            // console.log(response.headers)
            console.log(response.statusCode)
        })

    })
}

// =============================================================
// Utilities

function doReq(options) {
    request(options, function (error, response) {
        if (error) throw new Error(error)
        console.log('\x1b[33m%s\x1b[0m', '==========          ==========')
        console.log('\x1b[33m%s\x1b[0m', '========== RESPONSE ==========')
        console.log(response.headers)
        console.log(response.statusCode)
        console.log(response.body)
    })
}

function check(params) {
    for (let key in params)
        if (params[key] === null || params[key] === undefined)
            console.log('\x1b[31m%s\x1b[0m', 'ERROR: null or undefined parameter ' + key)
}

/*
    PUT ALL PARAMS ON THE QUERY BUT OAUTH PARAMS
*/
function genOption(params) {
    let copy = JSON.parse(JSON.stringify(params))

    // Generate headers
    let headers = {
        'Authorization': `OAuth oauth_consumer_key="${copy.oauth_consumer_key}",` +
            `oauth_token="${copy.oauth_token}",` +
            `oauth_signature_method="${copy.oauth_signature_method}",` +
            `oauth_timestamp="${copy.oauth_timestamp}",` +
            `oauth_nonce="${copy.oauth_nonce}",` +
            `oauth_version="${copy.oauth_version}",` +
            `oauth_signature="${copy.oauth_signature}"`
    }

    let url = copy.url
    let options = {
        'method': copy.method,
        'url': null,
        'headers': headers
    }
    delete copy.method
    delete copy.url
    delete copy.oauth_consumer_key
    delete copy.oauth_token
    delete copy.oauth_signature_method
    delete copy.oauth_timestamp
    delete copy.oauth_nonce
    delete copy.oauth_version
    delete copy.oauth_signature

    var sortedArray = []
    for (let i in copy) // Push each JSON Object entry in array by [key, value]
        sortedArray.push([i, copy[i]])
    sortedArray.sort()

    for (let i = 0; i < sortedArray.length; i++) {
        if (i === 0) url += `?${sortedArray[i][0]}=${sortedArray[i][1]}&`
        else if (i === sortedArray.length - 1) url += `${sortedArray[i][0]}=${sortedArray[i][1]}`
        else url += `${sortedArray[i][0]}=${sortedArray[i][1]}&`
    }

    options.url = url

    console.log('\x1b[34m%s\x1b[0m', '========== BEGIN OPTIONS FOR REQ ==========')
    console.log(options)
    console.log('\x1b[34m%s\x1b[0m', '========== END OPTIONS FOR REQ ==========')
    return options
}

module.exports.user_timeline = user_timeline
module.exports.publish_image = publish_image


/*
    {
        method: 'PUT',
        preambleCRLF: true,
        postambleCRLF: true,
        uri: 'http://service.com/upload',

        multipart: [
            {
                'content-type': 'application/json',
                body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
            },
            { body: 'I am an attachment' },
            { body: fs.createReadStream('image.png') }
        ],

        // OR
        // alternatively pass an object containing additional options

        multipart: {
            chunked: false,
            data: [
                {
                'content-type': 'application/json',
                body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
                },
                { body: 'I am an attachment' }
            ]
        }
    }
*/

/*
    var options = {
        'method': 'POST',
        'url': 'https://upload.twitter.com/1.1/media/upload.json?command=APPEND&media=[object Object]&media_id=1321950395153920000&segment_index=1',
        'headers': {
            'Authorization': 
                'OAuth oauth_consumer_key="9sAU8KekmRXVcB0eg4A7CTgnS",
                oauth_token="1040672175341096960-ETODHz95N0wYg9xIJLGi3X9m7QDCYC",
                oauth_signature_method="HMAC-SHA1",
                oauth_timestamp="1604012386",
                oauth_nonce="1604012386566uUP15Q5a0PlqRN3inNO",
                oauth_version="1.0",
                oauth_signature="qCx8hLFy%2BPNnYA6Jt2KM%2ByKhYWo%3D"'
  }
*/