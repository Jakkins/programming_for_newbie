<h1 align="center">Todos + SSL</h1>

Now I'll start to use made-up modules to avoid waste of time, I guess

- [First search](#first-search)
  - [WARNING: what if jwt is stolen](#warning-what-if-jwt-is-stolen)
- [MongoDB](#mongodb)
  - [MongoDB Arch Linux Installation](#mongodb-arch-linux-installation)
- [Documentation](#documentation)
- [Generate Keys & Cert](#generate-keys--cert)
- [BHO](#bho)

## First search

[simplilearn.com](https://www.simplilearn.com/tutorials/nodejs-tutorial/jwt-authentication)

- JSON Web Token (JWT)
- Postman
- const express = require("express");
- const jwt = require("jsonwebtoken");
- HTTP header or POST parameter

```
npm install --save express jsonwebtoken
```
[Playlist Source](https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q)
- RESTful API
- nodemon (--save-dev)
  - nodemon.json
```
package.json -> "scripts": { "start": "nodemon server.js" }

npm start -> nodemon server.js
```
- morgan (--save) (HTTP request logger middleware for node.js) [on any requests being made, it generates logs automatically]
- [body-parser (--save)](https://www.npmjs.com/package/body-parser)
  - [JSON body parser](https://www.npmjs.com/package/body-parser#bodyparserjsonoptions)
  - Raw body parser
  - Text body parser
  - URL-encoded form body parser
- CORS errors
- [MongoDB](http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)
  - MongoDB Atlas
  - [Default Index: _id](https://docs.mongodb.com/manual/indexes/#default-id-index)
- [Mongoose](https://mongoosejs.com/docs/index.html)
  - Schema
    - A SchemaType says what type a given path should have
  - Model
- Multer (--save) [parse incoming body like body-parser]
- Middleware
  - app.use()
    - morgan('dev')
    - express.static()
    - bodyParser.json(), ... 
- Type of data
  - form-data
  - raw
    - json (Content-Type)
  - binary
- NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)
- [JWT](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32)
  - default (HMAC SHA256)
  - RSA SHA256 -> { algorithm: 'RS256'}
- node.bcrypt.js
- node-jsonwebtoken
  - [https://jwt.io/](https://jwt.io/)
- Header
  - Authorization
    - Bearer
  - req.headers.authorization to get the token
- njwt

---
### WARNING: [what if jwt is stolen](https://stackoverflow.com/questions/34259248/what-if-jwt-is-stolen)

---
- node.bcrypt.js (--save) [to hash passwords]
- salt the password
  - dictionary tables
- [HTTP Representational state transfer (REST)](https://en.wikipedia.org/wiki/Representational_state_transfer)
  - GET
  - HEAD
  - POST
  - PUT
  - PATCH
  - DELETE
  - CONNECT
  - OPTIONS
  - TRACE
- [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
  - CREATE
  - READ
  - UPDATE
  - DELETE
- [SOAP](https://en.wikipedia.org/wiki/SOAP)

## MongoDB

### MongoDB Arch Linux Installation

[wiki arch](https://wiki.archlinux.org/index.php/MongoDB)

```bash
cd somedir
git clone https://aur.archlinux.org/mongodb-bin.git
# don't really know if I'll use these
git clone https://aur.archlinux.org/mongodb-tools-bin.git
cd mongodb-bin
```
---
```
makepkg -si
```
OR
```
makepkg
sudo pacman -U mongodb-bin-4.4.1-1-x86_64.pkg.tar.xz --verbose
```
---
THEN
```bash
systemctl enable --now mongodb
# Created symlink 
# /etc/systemd/system/multi-user.target.wants/mongodb.service 
# -> 
# /usr/lib/systemd/system/mongodb.service
```
```
mongo
exit
```
[check storage path](https://stackoverflow.com/questions/12738322/what-is-the-default-database-path-for-mongodb)
```
db.serverCmdLineOpts()
```

## Documentation

```JavaScript
UsersModel.find({ _id: id }) -> returns an array
UsersModel.findOne({ _id: id }) -> returns an obj
```
```JavaScript
newUser.validate( (err) => { ... }) -> returns a JSON obj
```
Like:
```json
{
    "errors": {
        "password": { things }
    },
    "_message": "Users validation failed",
    "message": "Users validation failed: password: Path `password` is required."
}
```

## [Generate Keys & Cert](https://github.com/Jakkins/NodeJS_for_newbie/tree/master/NodeJS2%20-%20Server/SimpleSSLServer#set-up)

## BHO

```bash
node --trace-warnings server.js
```