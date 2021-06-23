const https = require('http')
const fs = require('fs')
const app = require('./app/app')

const port = process.env.PORT || 3000

const options = {
    key: fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/cert.pem')
}

// https://127.0.0.1:3000
// the listener of the server is executed whenever it got a new request
const server = https.createServer(options, app)

server.listen(port, () => {
    console.log("IP: " + server.address().address) 
    console.log("PORT: " + server.address().port) 
})