<h1 align="center">Simple Server With SSL</h1>

check also the dedicated repo: [https://github.com/Jakkins/ServerHTTPS](https://github.com/Jakkins/ServerHTTPS)

## Let's go

[Source]{https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/}

### TODO
- set up server file with OpenSSL
- use the adorable modules of nodejs

## Set Up

Generate **key pair**
```
openssl genrsa -out key.pem
```
Generate CSR
```
openssl req -new -key key.pem -out csr.pem -subj "/C=IT/ST=Italy/L=The Brands/O=Mosciolo Task Force/OU=SFC/CN=jakkins.who/emailAddress=no"
```
Sign the CSR with the private key
```
openssl x509 -req -days 60 -in csr.pem -signkey key.pem -out cert.pem
```
Remove the CSR
```
rm csr.pem
```
Extract public key
```bash
# key.pem = private key
openssl rsa -in key.pem -pubout > pub.pem
OR
openssl rsa -in key.pem -pubout -outform PEM -out pub.pem
OR
openssl rsa -in key.pem -pubout -outform DER -out pub.der
```

<h1 align="center" style="color:red;">OF COURSE THE KEY IS TEST-ONLY</h1>

## NodeJS

```
node server.js
```
[https://127.0.0.1:8000/](https://127.0.0.1:8000/)

## Feed your curiosity

Why use Node instead of Java?