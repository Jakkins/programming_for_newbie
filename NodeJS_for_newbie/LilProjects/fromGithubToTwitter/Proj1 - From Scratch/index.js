const utils = require('./core/utils')
const calculateDatas = require('./core/calculateData')
const createImage = require('./core/createImage')
const publish = require('./core/twitterByToken')

let dateYesterday = new Date(0)

lambda = async (event) => {

    let json_body = null
    try {
        json_body = await utils.fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
    }
    catch( err ) {
        log("> Promise Rejected: fetch failed \n " + err)
        return 'error'
    }

    let json_array = null
    try { json_array = JSON.parse(json_body) }
    catch (e) { 
        log('PARSE ERROR: ' + e)
        return 'error'
    }
        
    let json_obj_yesterday = json_array[json_array.length-2] // Dati ieri
    let json_obj_today = json_array[json_array.length-1] // Dati oggi

    const dateJson = new Date(json_obj_today.data);
    if(utils.compareDates(dateYesterday, dateJson)) {

        let json_result = calculateDatas(json_obj_yesterday, json_obj_today, json_array) // Calc data

        try { 
            await createImage(json_result) // Create image
        }
        catch (e) { 
            log('CREATE IMAGE ERROR: ' + e)
            return 'error'
        }
        
        try { 
            await publish.publishImage('./topublic.png')
            dateYesterday = dateJson // save the date of the last published image
        }
        catch (e) { 
            log('PUBLISH IMAGE ERROR: ' + e) 
            return 'error'
        }

        return 'published'
    }
    else {
        log('dates are equals')
        return 'unpublished';
    }
}

function log(line) {
    console.log(line)
}

lambda()