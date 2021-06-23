<h1 align="center">Lists LV2</h1>

```Javascript
const [animals, setAnimal] = useState([
    {...},
    {...}
])

const pressHandler = (id) => {
    // "id" is the one being pressed 
    setAnimal( (animals) => {
        return animals.filter(animal => animal.id != id)
    })
}

return ( 
    <View style={styles1.container}>
        <FlatList
            data={animals}
            renderItem={ ({item}) => ( 
                // NEW
                <TouchableOpacity onPress={() => pressHandler(item.id)}>
                    <Text style={styles1.item}>{item.name}</Text>
                <TouchableOpacity/>
            )}
        />
    </View>
)
```
---
## Add an obj to a state

```Javascript
const submitHandler = (text) => {
    setOneState( (stateObj) => {
        return [
            { name: "the new obj", text: text, key: "some hashing func, timestamp or idk" },
            ...stateObj
        ]
    })
}
```