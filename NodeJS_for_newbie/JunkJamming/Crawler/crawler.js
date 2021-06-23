/*
    1. Read Links
    2. Get body foreach link
    3. Parse the body foreach rule
    4. Add scraped datas as json array to obj
*/

const fs = require('fs');
const utils = require('./IOUtils');

let datas = ''
const scraped = async () => {
    console.log(">Crawler Started");
    let json = utils.getJsonSync('./links.json');  // Read links from file

    json.objs.forEach(obj => {
        scrape(obj.link, obj.scrap_rules)
    })
}

async function scrape(link, rulesPath) {
    const html = await utils.fetch(link)
    try {
        let rules = require(rulesPath)
        let tmp = rules.scrape(html)
        datas =+ tmp
        console.log(tmp)
    } catch (err) {
        if (err.code == 'MODULE_NOT_FOUND') 
            console.log("Module not found")
        else {
            console.log("Rules not loaded")
            throw err
        }
    }
}

scraped();

function getData() {
    console.log(datas);
};

module.exports.getData = getData;
