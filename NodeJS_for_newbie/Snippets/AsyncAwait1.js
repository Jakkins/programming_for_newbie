const https = require('https');

// -------------------------------------------------------------------------
// Promise + Asyc with https.get
// Promise doens't change state until resolve, or reject
const fetch = (link) => {
    return new Promise( (resolve, reject) => {
        https.get(link, (res) => {
            console.log(link)
            let html = ''
            res.on('data', (chunk) => { html += chunk })
            res.on('end', () => { resolve(html) })
        })
    })
}

const doRequests = async() => {
    const html = await fetch('https://www.google.com/')
    console.log(html)
    console.log('Helloooooooo')
    // return html
}
doRequests()
// doRequests().then(console.log)

// -------------------------------------------------------------------------