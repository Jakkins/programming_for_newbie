'use strict'; // force to use keyword to declare a variable

import fs from 'fs';

let links = '';

fs.readFile("links.json", function(err, data) {
    if (err) throw err; 
    links = JSON.parse(data);
});

export function getData() {
    console.log("Getting Data");
    return links;
}