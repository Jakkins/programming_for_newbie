const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const jwt = require('jsonwebtoken')

const port = process.env.PORT || 3000

/*
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem -subj "/C=IT/ST=Italy/L=The Brands/O=Mosciolo Task Force/OU=SFC/CN=jakkins.who/emailAddress=no"
openssl x509 -req -days 60 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
*/

const key = fs.readFileSync('key.pem')
const cert = fs.readFileSync('cert.pem')
const pub = fs.readFileSync('key.pub')
const options = { key, cert };

// https://127.0.0.1:3000
app.use('/daje', (req, res, next) => {
    console.log('what the heck')
    try {
        const token = jwt.sign(
            { username: 'wow' },
            key,
            { 
                algorithm: 'RS256',
                expiresIn: 60 * 60
            }
        )
        res.status(200).send(token)
    }
    catch (err) {
        console.log(err)
    }
})

app.use('/get', (req, res, next) => {
    try {
        const decode = jwt.verify(
            "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndvdyIsImlhdCI6MTYwMjk3NDEzNCwiZXhwIjoxNjAyOTc3NzM0fQ.UScvqVVkKXCkugEIEK_n2Bht-JRDGbMaVjXVviAGF-ObpD3Sa3HiQiBaLYb9Af8Enb1UCLQc6NDhyeltkOWtgzZ0hyDOGZIiMZ1OXvsEIkaVoAEMrYDiBxvdRNHhCe20OGrDEPcdqmHtPP-VyxKoe85dvmCE1lYATZ3Twk-RMHtSz_GOJik9-NyMC2InzivChQnxSdANySyusd9HKpYT8ioWkyV52CXOe_bWST0TN4LUJTpu5AzzTA8K4bvmqW5dCn_70g4tC75by5HCVuPhKUo5r3ai3Azk4qDWEI-fxSHKQFhodK7Ww2OxtzHos0FjaFmUKEGaJSLPH3Q74BhjaQ", 
            pub,
            {algorithm: 'RS256'}
        )
        console.log(decode)
        res.status(200).send(decode)
    }
    catch (err) {
        console.log(err)
    }
})

const server = https.createServer(options, app)

server.listen(port);