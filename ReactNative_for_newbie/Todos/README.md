
- [Network](#network)
  - [TESTING](#testing)
  - [TypeError: Network request failed](#typeerror-network-request-failed)
  - [HTTP Libs](#http-libs)
  - [Useful packages](#useful-packages)
- [Security](#security)
- [JSON](#json)
- [Navigation](#navigation)
- [Tutorials](#tutorials)
- [Update to track](#update-to-track)

## Network

- [How use fetch](https://jakearchibald.com/2015/thats-so-fetch/)
  - [fetch-api-vs-xmlhttprequest](https://stackoverflow.com/questions/35549547/fetch-api-vs-xmlhttprequest)
- [Check Network Connection](https://stackoverflow.com/questions/52163801/react-native-typeerror-network-request-failed-with-fetch)
  ```Javascript
  npm install @react-native-community/netinfo --save
  ```
- [react-native-network-info](https://www.npmjs.com/package/react-native-network-info)
  
Other
- [connecting-react-native-to-localhost](https://revs.runtime-revolution.com/connecting-react-native-to-localhost-65e7ddf43d02?gi=ad2762554514)

### TESTING

```Testing without HTTPS```

NodeJS config
```Javascript
const server = createServer(function (req, res) {...})
server.listen(8080, () => {...}) // { address: '::', family: 'IPv6', port: 8080 }
```
On the react native project modify the AndroidManifest.xml and add: android:usesCleartextTraffic="true"
```XML
<?xml version="1.0" encoding="utf-8"?>
<manifest ...>
    <uses-permission android:name="android.permission.INTERNET" />
    <application
        ...
        android:usesCleartextTraffic="true"
        ...>
        ...
    </application>
</manifest>
```

### TypeError: Network request failed

- [Only HTTPS](https://stackoverflow.com/questions/51902629/how-to-allow-all-network-connection-types-http-and-https-in-android-9-pie)
- certificate not trusted
- [127.0.0.1 is the emulator not the host, use 10.0.2.2 (no https -.-)](https://stackoverflow.com/questions/5528850/how-do-you-connect-localhost-in-the-android-emulator)

### HTTP Libs

- fetch
- XMLHttpRequest
- axios
- superagent

### Useful packages

- [realm](https://realm.io/)

## Security

- [Secure Storage](https://reactnative.dev/docs/security#secure-storage)
- [react-native-keychain](https://github.com/oblador/react-native-keychain)
  - [Example](https://stackoverflow.com/questions/45547657/what-is-the-best-way-to-store-private-data-in-react-native)
  - [Example 2](https://medium.com/react-native-training/securing-your-react-native-app-using-keychain-6de10850d203)

Nearly deprecated:
- [react-native-secure-storage](https://github.com/oyyq99999/react-native-secure-storage)
  - this contains info to install ```RNSecureStoragePackage```
- [react-native-encrypted-storage](https://github.com/emeraldsanto/react-native-encrypted-storage)
- 
## JSON

```This works```
```Javascript
// fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
fetch('https://osh6s061df.execute-api.eu-west-2.amazonaws.com/stagebho/daje')
.then(function (response) {
    return response.json()
    //return response.text()
})
.then(function (data) {
    console.log(data);
})
.catch(function () {
    console.log('Booo');
})
```
```This return a strange value```
```Javascript
fetch('https://osh6s061df.execute-api.eu-west-2.amazonaws.com/stagebho/daje')
.then(function (response) {
    console.log(response.json()) // WHY ????????????
})
.then(function (data) {
    console.log(data);
})
.catch(function () {
    console.log('Booo');
})
```

```Javascript
/*
  res.status
  res.headers
  res.body
  res.blob()
  res.json()
*/
```

## Navigation

```Javascript
npm install @react-navigation/native --save
npm install @react-navigation/stack --save
```

- [react navigation](https://reactnavigation.org/docs/getting-started)
- [stack-navigator](https://reactnavigation.org/docs/stack-navigator#!)
  - [react-native-navigation-example](https://www.positronx.io/react-native-navigation-example-tutorial/)

## Tutorials

- [Navigators - React 5](https://www.youtube.com/watch?v=28Xr22XDcDg)
  - drawers
  - stacks
  - tabs

## Update to track


1. Open up ```android/app/src/main/java/[...]/MainApplication.java```
  - Add ```import li.yunqi.rnsecurestorage.RNSecureStoragePackage;``` to the imports at the top of the file
  - Add ```new RNSecureStoragePackage()``` to the list returned by the ```getPackages()``` method
2. Append the following lines to ```android/settings.gradle```:
    ```
    include ':react-native-secure-storage'
    project(':react-native-secure-storage').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-secure-storage/android')
    ```
3. Insert the following lines inside the dependencies block in ```android/app/build.gradle```:
    ```
    implementation project(':react-native-secure-storage')
    ```
