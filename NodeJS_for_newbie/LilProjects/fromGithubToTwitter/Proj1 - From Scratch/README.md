<h1 align="center">fromGithHubeToTwitter</h1>

```diff
- NOT FINISHED
```

## TwitterByToken

### Sources

- [Twitter API v1](https://developer.twitter.com/en/docs/twitter-api/v1)
- [OPS - request is deprecated?](https://github.com/request/request/issues/3142)
  - [OPS 2](https://www.npmjs.com/package/request#oauth-signing)

## OAuth 1.0a API requests
- Application Identifier/Auth : oauth_consumer_key and secret
- User Identifier/Auth : oauth_token and secret

## Request VS Signature

```JavaScript
/*
    WHAT WORKED
*/
let signatureBaseString = `${params.method}&${utils.encodeTrueURI('https://upload.twitter.com/1.1/media/upload.json')}&` +
    `command%3D${params.command}%26` + // I actually used a query param to calculate the signature...
    `oauth_consumer_key%3D${params.oauth_consumer_key}%26` + 
    `oauth_nonce%3D${params.oauth_nonce}%26` +
    `oauth_signature_method%3DHMAC-SHA1%26` +
    `oauth_timestamp%3D${params.oauth_timestamp}%26` + 
    `oauth_token%3D${params.oauth_token}%26` +
    'oauth_version%3D1.0'

// with OR without 'content-type': 'application/x-www-form-urlencoded', on the header object
let options = {
    method: 'POST',
    url: 'https://upload.twitter.com/1.1/media/upload.json?command=INIT',
    headers: {
        'Authorization': `OAuth oauth_consumer_key="${params.oauth_consumer_key}",`+
        `oauth_token="${params.oauth_token}",` +
        'oauth_signature_method="HMAC-SHA1",'+
        `oauth_timestamp="${params.oauth_timestamp}",` +
        `oauth_nonce="${params.oauth_nonce}",` +
        'oauth_version="1.0",'+
        `oauth_signature="${params.oauth_signature}"`
    }
}

// url della richiesta DEVE essere https://upload.twitter.com/1.1/media/upload.json?command=INIT
// url della signature DEVE essere https://upload.twitter.com/1.1/media/upload.json
// nella signature l'url e' senza query e i parametri sono in ordine alfabetico
```
## 401 - Could not authenticate you

- [Source](https://stackoverflow.com/questions/19343141/twitter-api-returned-a-401-unauthorized-an-error-occurred-processing-your-req)
  - change permissions
  -  difference in clock times between you and Twitter's server

## Canvas

```JavaScript
// ==============================================================
const canvas = Canvas.createCanvas(700, 250);   // Crea il canvas
const ctx = canvas.getContext('2d');

const background = await Canvas.loadImage('./wallpaper.jpg');
ctx.drawImage(background, 0, 0, canvas.width, canvas.height); // draw background
// ==============================================================
```

### AWS Lambda
```Javascript
const https = require('https')

let dateYesterday = new Date(0)

exports.handler = async (event) => {
    
    const json_body = await fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
    
    const json_array = JSON.parse(json_body)
    let json_obj_ieri = json_array[json_array.length-2] // Dati ieri
    let json_obj_oggi = json_array[json_array.length-1] // Dati oggi
    
    const dateJson = new Date(json_obj_oggi.data);
    if(compareDates(dateYesterday, dateJson)) {
        dateYesterday = dateJson
        return 'pubblicato'
    }
    else console.log('dates are equals')
    
    return 'non ha pubblicato'
}
```

## Altro 

```Javascript
let copyOfJsonObj = JSON.parse(JSON.stringify(jsonObj))
```

## Check

https://medium.com/@pandeysoni/how-to-create-oauth-1-0a-signature-in-node-js-7d477dead170

https://mattdesl.svbtle.com/generative-art-with-nodejs-and-canvas

https://twittercommunity.com/t/post-media-upload-json-always-returns-media-parameter-is-missing/27962/2

https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/overview

https://flaviocopes.com/canvas-node-generate-image/

https://discordjs.guide/popular-topics/canvas.html

```Javascript
function runthis() {
    console.log('INIT');
    let initparams = {
        'command': 'INIT',
        'media_type': 'video/jpeg',
        'total_bytes': buffer.byteLength,
        'media_category': 'tweetvideo'
    }

    var self = this;
    
    T.post('media/upload', initparams, function (error, response, body) {
        upload_append(response.media_id_string, initparams);
    })
}

function upload_append(media_id_string, initparams) {

    var buffer_length = 5000000;
    var buffer = Buffer.alloc(buffer_length);
    var bytes_sent = 0;
  
    // open and read video file
    fs.open('ciao.jpeg', 'r', function(error, file_data) {
  
        var bytes_read, data,
        segment_index = 0,
        segments_completed = 0;
    
        // upload video file in chunks
        while (bytes_sent < initparams.total_bytes) {
    
            console.log('APPEND');
    
            bytes_read = fs.readSync(file_data, buffer, 0, buffer_length, null);
            data = bytes_read < buffer_length ? buffer.slice(0, bytes_read) : buffer;
            
    
            T.post('media/upload', 
            {
                command: 'APPEND',
                media_id: media_id_string,
                segment_index: segment_index,
                media_data: data.toString('base64')
            },
            function () {
                segments_completed = segments_completed + 1;
        
                console.log('segment_completed');
                if (segments_completed == segment_index) {
                    console.log('Upload chunks complete');
                    upload_finalize(media_id_string);
                }
            });
            
            bytes_sent = bytes_sent + buffer_length;
            segment_index = segment_index + 1;
        }
    })
}

function upload_finalize (media_id_string) {

    console.log('FINALIZE');
  
    var self = this;
  
    T.post('media/upload', 
    {
        'command': 'FINALIZE',
        'media_id': media_id_string
    },
    function(error, response, body) {
      
    });
}
```