const https = require('https');
const { stderr } = require('process');

let dateToday = 0

const html = fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
html.then(doc => {

    const json = JSON.parse(doc)
    console.log(json)
    const dateJson = new Date(json[0].data);

    if(compareDates(dateToday, dateJson)) {
        dateToday = dateJson

        console.log("COVID-19 ITALIA")
        console.log("AGGIORNAMENTO")
        let month = dateJson.getMonth() + 1
        console.log(dateJson.getFullYear() + "/" + month + "/" + dateJson.getDate() + " 17:00")

        console.log("Casi totali: " + json[0].totale_casi + `(+${json[0].nuovi_positivi})`)
        console.log("Deceduti: " + json[0].deceduti)
        console.log("Guariti: " + json[0].dimessi_guariti)
        console.log("Tamponi: " + json[0].tamponi)
        console.log("Terapie intensive: " + json[0].terapia_intensiva)
        console.log("Ricoverati: " + json[0].ricoverati_con_sintomi)
        console.log("Casi testati: " + json[0].casi_testati)

        // cosa devo stampare
            // notiziae IG or Twitter
        // come creo l'immagine
        // coma la pubblico

    }
    else console.log('dates are equals')
})
.catch(err => console.log("ERR: " + err))

// ==================
// Functions
// ==================

function fetch (link) {
    return new Promise( (resolve, reject) => {
        https.get(link, (res) => {
            let html = ''
            res.on('data', (chunk) => { html += chunk })
            res.on('end', () => { resolve(html) })
        })
    }).catch( () => {
        console.log("> Promise Rejected: fetch failed")
   })
}

function compareDates(dateToday, dateJson) {
    console.log(dateJson)
    console.log(dateToday)
    if(dateToday === 0 ) return true
    else if(dateToday.getDay() !== dateJson.getDay())
        if(dateToday.getMonth() !== dateJson.getMonth())
            return true
        else return false
}

// function reviver(value) {
//     const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/; // /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/
//     if (typeof value === "string" && dateFormat.test(value))
//         return new Date(value);
//     return value;
// }