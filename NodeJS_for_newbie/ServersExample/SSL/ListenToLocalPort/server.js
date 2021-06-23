const text1 = '  ______ __________  _    ____________'
const text2 = ' /  ___// ____/ __ \\  |  / / ____/ __ \\'
const text3 = ' \\__ \\ / __/ / /_/ /  | / / __/ / /_/ /'
const text4 = ' ___/ / /___/ _, _/ | |/ / /___/ _, _/'
const text5 = '/____/_____/_/ |_|  |___/_____/_/ |_| '

console.log('\x1b[33m%s', text1)  //yellow
console.log(text2) 
console.log(text3) 
console.log(text4)
console.log('%s\x1b[0m', text5)

// --------------------------------------------------------------

const https = require('https')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 4000

key =  fs.readFileSync('key.pem')
cert =  fs.readFileSync('cert.pem')

const options = {
   key: key,
   cert: cert
}

const server = https.createServer(options, (req, res) => {
	res.writeHead(200)
	console.log(req.ip, req.method, req.url)
	console.log('headers:', req.headers)
    res.end("weee")
})

server.listen(port, hostname, () => {
    console.log(`Server running https://${hostname}:${port}/`)
})
