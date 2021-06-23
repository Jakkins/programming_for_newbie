const fs = require('fs')
const utils = require('./utils')
const path = require('path');

let datas = ''
function start() {
    console.log(">Crawler Started")
    const pathJSON = path.join(__dirname, 'links.json')
    let json = utils.getJsonSync(pathJSON) // Read links from file
    json.objs.forEach(obj => {
        scrape(obj.link, obj.scrap_rules)
    })
}

async function scrape(link, rulesPath) {
    const html = await utils.fetch(link)
    try {
        const pathRules = path.join(__dirname, rulesPath)
        let rules = require(pathRules)
        datas = rules.scrape(html)
    } catch (err) {
        throw err
    }
}

start()

function getData() {
    return datas
};

module.exports.getData = getData;
module.exports.start = start;
