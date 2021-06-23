const cheerio = require('cheerio')

module.exports.scrape = scrape

function scrape(html) {
    const selector = cheerio.load(html);
    const search = selector(".table-responsive")
    .find("tr")

    const bandi = search
    .map((index, elem) => {
        return elementObj(elem)
    })
    .get();

    console.log(bandi)
}

const elementObj = (elem) => {
    const selector = cheerio.load(elem)
    const head = selector("tr")

    const scadenza = head
    .find(".views-field-field-scadenza")
    .text()
    .trim();

    const tipobando = head
    .find(".views-field-field-tipo-bando")
    .find("div[class='tipobando']")
    .text()
    .trim();

    const dettagli = head
    .find(".views-field-field-tipo-bando")
    .contents()
    .filter( (i, el) => {
        if(el.type === 'text') {
            return el
        }
    })
    .text()
    .trim()

    return {
        scadenza,
        tipobando,
        dettagli
    }
}

// https://stackoverflow.com/questions/31949521/scraping-text-with-cheerio

/*
    Cheerio

    selector === $
*/

/*
    const head = $('.className');
    const body = head.find('.content').text().trim();
    const body = head.children('h3').text();

    $('.listingResult').each((i, element) => {
        const item = $(element).text();
    });
*/

/*
    const head = $('.table-responsive')
    const headText = head.text()
    console.log(headText)
    return headText
*/

/*
    // il contrario di questo
    // tipo contents type = text

    const dettagli = head
    .find(".views-field-field-tipo-bando")
    .children()
    .text()
*/

/* 
    const dettagli = head
    .find(".views-field-field-tipo-bando")
    .filter( (index, el) => {
        return el
    })
    .get()
    .forEach( el => console.log(el))
*/