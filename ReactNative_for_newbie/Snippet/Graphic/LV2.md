<h1 align="center">Graphic LV2</h1>

### dismiss keyboard

```Javascript
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

export default function App() {
    return (
        <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() }}>
        <TouchableWithoutFeedback/>
    )
}
```

### personalized button

```Javascript
import { TouchableOpacity, Text } from 'react-native'

export default function GeneralButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={[ styles.container, style] onPress={onPress}}>
            <Text>{title}</Text>
        <TouchableOpacity/>
    )
}
```

```Javascript
import { GeneralButton } from './GeneralButton'

export default function App() {
    return (
        <>
            <GeneralButton 
            title={'Login'} 
            style={styles.button} 
            onPress={()=>{
                // bla bla
            }} />
        </>
    )
}
```