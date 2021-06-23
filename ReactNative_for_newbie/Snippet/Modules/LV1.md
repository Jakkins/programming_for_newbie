<h1 align="center">Modules LV1</h1>

## Components

```Javascript
// ./components/header
export default function Header() {
    return (
        <View>
            <Text>Ciao<Text/>
        <View/>
    )
}
```
```Javascript
import Header from './components/header'
export default function App() {
    return (
        <Header />
    )
}
```

## Methods

```Javascript
import {validateToken} from '../myutils/validateToken';
async function bho() {
    validateToken(json.token)   
}
```
```validateToken.js```
```Javascript
export async function validateToken(token) {
    let string = await AsyncStorage.getItem('server')
    let serverJson = JSON.parse(string)
    try {
        let res = await fetch(serverJson.url + '/todos')
        for(let key in res)
            console.log(key)
    }
    catch (err) { console.log(err) }
}
```