
# Twitter Auth 1.0a

0. [Sources](#sources)
1. Connect to API
   - App Auth    
      oauth_consumer_key
      oauth_consumer_secret
   - User Auth, OAuth 1.0a API requests
      oauth_token
      oauth_token_secret
2. [Create Signature](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/creating-a-signature)
    - [Nonce](#nonce)
3. [Create Request](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/authorizing-a-request)
4. [Problems](#problems)

### Sources

- https://developer.twitter.com/en/docs/twitter-api/v1
- https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-update
- Nonce
  - https://stackoverflow.com/questions/40068193/how-to-use-a-generated-nonce-in-nodejs-and-do-validation-without-a-database-call

## How

### Signature 

The signature base string should contain exactly 2 ampersand ‘&’.
```The ‘%’ characters in the parameter string should be encoded as %25 in the signature base string.```

### Signing key

The signing key is simply the ```percent encoded``` consumer secret, followed by an ampersand character ‘&’, followed by the ```percent encoded``` token secret

### Nonce

```strip out all non-word characters```

A Nonce could be a string with timestamp and some random chars until reach **32 bytes of length**
```JavaScript
// 1603751872756p5mzvzXkXwZbTO5jvuv
let nonce = genNonce(new Date().getTime().toString())
```

## Problems

```{"errors":[{"code":135,"message":"Timestamp out of bounds."}]}```

1. Twitter want timestamp in seconds not millis
2. Set your clock

> Make sure that your clock is synced with NTP
```
$ timedatectl set-ntp true
$ timedatectl set-local-rtc 1 // not recommended
```
```
System clock synchronized: yes                        
         NTP service: active                     
         RTC in local TZ: yes
```

Check the timestamp and your system clock

[EU Servers](https://www.ntppool.org/zone/europe)
```
timedatectl set-time "2020-10-26 22:58:00"
```
