/*
    1. The server starts the crawler
    2. The Crawler update the datas
    3. The server send the datas on request
*/

console.log(">Server Started")

import { createServer } from 'http'
import { getData } from '../Crawler/crawler.js' // load the crawler

// start crawler
// fork('./crawler');

// start server
let counter = 0
createServer(function (req, res) {
  console.log("Counter: " + counter++)
  //res.writeHead(200, {'Content-Type': 'application/json'})
  res.writeHead(200, {'Content-Type': 'text/html'})

  let array = getData()
  array.forEach(element => {
    let message = `
    <p> ${element.scadenza} - ${element.tipobando} 
    <br> ${element.dettagli} </p>
    <p> --- </p>`
    res.write(message)
  });
  res.end("")
}).listen(8080)