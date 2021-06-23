
## Twitter 

[Use Twit package in NodeJS](https://dzone.com/articles/how-to-use-twitter-api-using-nodejs)


## AWS Lambda

Sulle AWS di Amazon il codice e' diverso

```JavaScript
const https = require('https');
let dateToday = 0

// ==================
// Handler
// ==================

exports.handler = async (event) => {
    
    const html = await fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
    
    const json = JSON.parse(html)
    const dateJson = new Date(json[0].data);

    if(compareDates(dateToday, dateJson)) {
        dateToday = dateJson

        console.log("COVID-19 ITALIA")
        console.log("AGGIORNAMENTO")
        console.log(dateJson.getFullYear() + "/" + dateJson.getMonth() + "/" + dateJson.getDay() + "17:00")

        console.log("Casi totali: " + json[0].totale_casi + `(+${json[0].nuovi_positivi})`)
        console.log("Deceduti: " + json[0].deceduti)
        console.log("Guariti: " + json[0].dimessi_guariti)
        console.log("Tamponi: " + json[0].tamponi)
        console.log("Terapie intensive: " + json[0].terapia_intensiva)
        console.log("Ricoverati: " + json[0].ricoverati_con_sintomi)
        console.log("Casi testati: " + json[0].casi_testati)

        // cosa devo stampare
        // come creo l'immagine
        // coma la pubblico
        return 'pubblicato'
    }
    else console.log('dates are equals')
    
    return 'non ha pubblicato';
};

// ==================
// Functions
// ==================

async function fetch (link) {
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
```