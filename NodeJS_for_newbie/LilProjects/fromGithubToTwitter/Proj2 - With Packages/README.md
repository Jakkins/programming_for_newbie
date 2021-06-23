<h1 align="center">fromGithHubeToTwitter with twit</h1>

```this solution is working in 2020/11/3```

## packages

- [twit](https://www.npmjs.com/package/twit)
- [canvas](https://www.npmjs.com/package/canvas)

[Daje](https://stackoverflow.com/questions/64195764/twitter-media-upload)

## Info

- API Key & Secret
  - consumer_key
  - consumer_secret
- Access Token & Secret
  - access_token
  - access_token_secret

## Jam

```Javascript
function checkTwit() {
    let stream = T.stream('statuses/sample')

    stream.on('tweet', function (tweet) {
        console.log(tweet)
    })

    stream.on('disconnect', function (disconn) {
        console.log('disconnect')
    })

    stream.on('connect', function (conn) {
        console.log('connecting')
    })

    stream.on('reconnect', function (reconn, res, interval) {
        console.log('reconnecting. statusCode:', res.statusCode)
    })
}
```