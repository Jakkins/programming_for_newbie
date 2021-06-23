## Fonts

- Google Font

```JavaScript
import React, { useState } from 'react'
import * as Font form 'expo-font'
import { AppLoading } from 'expo'

// key, value
const getFont = () => Font.loadAsync({
    'nunito-regular': require('./fonts/Nunito-Regular.ttf')
})

export default function App() {
    const[fontsLoaded, setFontsLoaded] = useState(false)
    if(fontsLoaded) return( code )
    else {
        // app is loading
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={()=> setFontsLoaded(true)}
            />
        )
    }
}
```