const utils = require('./utils')
const req = require('./TwitterRequest')
const oauth = require('./oauth')

// TwitterByToken = new TwitterByToken() {}
// path = __dirname + path

module.exports.getList = getList
module.exports.publishImage = publishImage

const CONSUMER_KEY = '9sAU8KekmRXVcB0eg4A7CTgnS'
const ACCESS_TOKEN = '1040672175341096960-ETODHz95N0wYg9xIJLGi3X9m7QDCYC'
const CONSUMER_SECRET = '606uwD75kFzGneOzUS1RID94CWobbzIrZf4biauakD0z71ZjnZ'
const ACCESS_TOKEN_SECRET = 'd1EsfTp7M68D2Sql2j70QkhLW77oseJeQeadwuUMqLqvL'
const signingKey = utils.encodeTrueURI(CONSUMER_SECRET) + "&" + utils.encodeTrueURI(ACCESS_TOKEN_SECRET)

function getList() {
    let paramtmp = utils.setparam('GET', 'https://api.twitter.com/1.1/statuses/user_timeline.json', CONSUMER_KEY, ACCESS_TOKEN)
    oauth.sign(paramtmp, signingKey)
    req.user_timeline(paramtmp)
}

/*
    Image 5MB = MAX 5242880 bytes
    GIF 15MB
    Video 15MB
*/
function publishImage(path) {
    let paramtmp = utils.setparam('POST', `https://upload.twitter.com/1.1/media/upload.json`, CONSUMER_KEY, ACCESS_TOKEN)
    req.publish_image(paramtmp, signingKey, path)
}