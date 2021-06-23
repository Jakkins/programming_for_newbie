var request = require('request');

function req(params) {
    check(params)
    var options = {
        'method': params.method,
        'url': params.url,
        'headers': {
            'Authorization': 
            `OAuth oauth_consumer_key="${params.oauth_consumer_key}",` +
            `oauth_nonce="${params.oauth_nonce}",` +
            `oauth_signature="${params.oauth_signature}",` +
            `oauth_signature_method="${params.oauth_signature_method}",` +
            `oauth_timestamp="${params.oauth_timestamp}",` +
            `oauth_token="${params.oauth_token}",` +
            `oauth_version="${params.oauth_version}"`
        }
    }
    request(options, function (error, response) {
        if (error) throw new Error(error)
        console.log(response.headers)
        console.log(response.body)
    })
}

function check(params) {
    for( let key in params)
        if(params[key] === null || params[key] === undefined)
            console.log('\x1b[31m%s\x1b[0m', 'ERROR: null or undefined parameter')
}

module.exports = req