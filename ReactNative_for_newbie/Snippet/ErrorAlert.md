<h1 align="center">Alert LV1</h1>

```Javascript
import { Alert } from 'react-native'

const submitHandler = (text) => {
    if(text.length >= 3) {
        setOneState( (stateObj) => {
            return [
                { name: "the new obj", text: text, key: "some hashing func, timestamp or idk" },
                ...stateObj
            ]
        })
    }
    else {
        Alert.alert('Title', 'error message', [
            {text: 'Understood', onPress: () => console.log('I just can do this')}
        ])
    }
}
```