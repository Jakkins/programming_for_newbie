import { createServer } from 'http';
import { getData } from './readFile.js'; 

let counter = 0;
createServer(function (req, res) {
  console.log("Counter: " + counter++);
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log(getData());
  res.end();
}).listen(8080); 