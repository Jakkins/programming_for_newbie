/*
  This server is so useless
*/

import { createServer } from 'http'; // to create socket
import fs from 'fs';                 // to read file from memory
import url from 'url';               // to parse an url

var adr = 'http://bimboscatto:7979/';

createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("req url: " + req.url + "<br>");

  var q = url.parse(adr, true);
  console.log(q.host);

  fs.readFile('package.json', function(err, data) {
    res.write(data);
    return res.end("<br>Hello World");
  });
}).listen(8080); 