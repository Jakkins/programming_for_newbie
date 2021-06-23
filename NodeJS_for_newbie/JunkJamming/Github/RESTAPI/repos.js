/*
    To list all the repos, included the private ones, 
    you have to create a token with that type of permission.
    On https://github.com/settings/tokens/
    select the "repo" option.
*/

// TODO checkServerIdentity
// https://nodejs.org/api/https.html#https_https_request_options_callback

const https = require('https');

// '/users/{user_name}/repos'
const options = {
    host: 'api.github.com',
    port: 443,
    path: '/user/repos',
    headers: {
        'User-Agent': 'curl/7.72.0',
        'Accept': '*/*',
        'Authorization': 'token ohyousilly'
    },
};

console.log('> Sending Request');
const req = https.request(options, (res) => {
    // console.log('statusCode:', res.statusCode);
    // console.log('headers:', res.headers);
    let data = '';
    res.on('data', (d) => {
        data += d;
    });

    res.on('end', () => {
        let json = JSON.parse(data);
        //console.log(JSON.stringify(json, null, 2));
        json.forEach(element => {
            console.log("\t" + element.name);
        });
    });
});
  
req.on('error', (e) => {
    console.error(e);
});
req.end();


//XMLHttpRequest is a built-in object in web browsers.
// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/*
    NOT deprecated
    curl -H "Authorization: token thetokenisreadonlyanyway" https://api.github.com

    DEPRECATED username:password
    curl -u Jakkins:token https://api.github.com/user
    curl -u Jakkins:token https://api.github.com/user/repos
*/