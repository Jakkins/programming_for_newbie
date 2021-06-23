const myutils = require('./utils')
const Browser = require('./browser')
const SearchEngine = require('./engine.js')

let searchItems = process.argv
if(searchItems[2] && searchItems[3] && searchItems[4]) {

    let browser = getBrowser(searchItems[2])
    let se = getSearchEngine(searchItems[3])
    let sources_arr = myutils.getJsonSync(__dirname + '/sources.json')
    let item = ''
    if(searchItems.length > 4)
        for(let i=4; i<searchItems.length; i++)
            item += searchItems[i] + " "
    browser.launch(se, sources_arr, item)
    
}
else if(searchItems[2]==='help') {
    let info = 'prova'
    console.log('\x1b[36m%s\x1b[0m', info)
    return 1
}
else {
    let error = 'No items in argmuments \n' +
    'Example\n'+
    '$search f d "how to..."'
    myutils.error(error)
}

function getBrowser(initial) {
    if(initial === 'f') return new Browser.Firefox
    else myutils.error('No browser found')
}

function getSearchEngine(initial) {
    if(initial === 'd') return SearchEngine.DuckDuckGo
    else myutils.error('No search engine found')
}