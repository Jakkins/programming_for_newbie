fetch('resources/jsons/pages/8C5E697E-351F-47F4-852E-DDF6348CB867.json')
.then( (response) => { 
    console.log(response.status)
    return response.json(); 
})
.then( (data) => { appendData(data); })
.catch( (err) => { console.log(err); });

function appendData(data) {
    var mainContainer = document.getElementById("content");
    var div = document.createElement("div");
    div.innerHTML = 'Capire come usare questi json mi e\' rimasto complicato<br><br>'
    div.innerHTML += openJsonObj(data, 0)
    mainContainer.appendChild(div);
}

function openJsonObj(values, spaceNumber) {
    let output = ''
    let space = ''
    for(let i=0; i<spaceNumber; i++) space += '&nbsp;&nbsp;&nbsp;&nbsp;'
    spaceNumber += 1
    for( let key in values ){
        if(typeof(values[key]) === 'object')
            output += space + key + ' - ' + values[key] + ' {<br>' + openJsonObj(values[key], spaceNumber)
        else output += space + key + ' - ' + values[key] + '<br>'
    }
    return output += space + '}<br>'
}
