<h1 align="center">Lists LV1</h1>

```Javascript
import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { styles1 } from '../styles'

export default function App() {

    const [animals, setAnimal] = useState([
        { name: 'Fido', key: '1' },
        { name: 'Crash', key: '2' },
        { name: 'Sky', key: '3' },
        { name: 'Bobby', key: '4' },
        { name: 'Bubu', key: '5' }
    ])

    return ( // return js themeplate
        <View style={styles1.container}>
            <Text>Testo a caso</Text>
            {
                animals.map((item) => {
                    return (
                        // key item is mandatory
                        <Text style={styles1.item} key={item.key}>{item.name}</Text>
                    )
                })
            }
        </View>
    )
}
```
OR
```Javascript
/*
    FlatList 
        - automatically search for the key property
            - expect "key" not "id", or use keyExtractor
        - doesn't load all the datas, 
        it loads datas only when you reach the bottom while scrolling
        - other properties
            - numColumns() 
*/
return ( 
    <View style={styles1.container}>
        <FlatList
            data={animals}
            renderItem={ ({item}) => ( // return JSX
                <Text style={styles1.item}>{item.name}</Text>
            )}
        />
    </View>
)
```