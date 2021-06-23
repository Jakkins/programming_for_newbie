
## Create cert

```bash
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem -subj "/C=IT/ST=Italy/L=The Brands/O=Mosciolo Task Force/OU=SFC/CN=jakkins.who/emailAddress=no"
openssl x509 -req -days 60 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

## Cert problems

- add cert to the list of trusted cert
- **SSL_ERROR_BAD_CERT_DOMAIN**
   - check the validity (expire date and start date for the cert)
- **SEC_ERROR_BAD_SIGNATURE**
  - firefox do not know the Cert Authority
- **MOZILLA_PKIX_ERROR_SELF_SIGNED_CERT**
  - twitter.com has a security policy called HTTP Strict Transport Security (**[HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)**), which means that Firefox can only connect to it securely. You can’t add an exception to visit this site
    - Modify SiteSecurityServiceState.txt



### Location 
```
/usr/lib/mozilla/certificates
/usr/lib64/mozilla/certificates 
```

## Arch Linux 

[Local network hostname resolution](https://wiki.archlinux.org/index.php/Network_configuration#Local_network_hostname_resolution)

[Examples](https://jlk.fjfi.cvut.cz/arch/manpages/man/hosts.5#EXAMPLES)
```
cd /etc
sudo nano ./hosts

# The following lines are desirable for IPv4 capable hosts
127.0.0.1       localhost
# 127.0.1.1 is often used for the FQDN of the machine
127.0.1.1       thishost.mydomain.org  thishost
192.168.1.10    foo.mydomain.org       foo
192.168.1.13    bar.mydomain.org       bar
146.82.138.7    master.debian.org      master
209.237.226.90  www.opensource.org
# The following lines are desirable for IPv6 capable hosts
::1             localhost ip6-localhost ip6-loopback
ff02::1         ip6-allnodes
ff02::2         ip6-allrouters
```