<h1 align="center">Modules LV2</h1>

```Javascript
import TodoItem from './components/todoItem'
export default function App() {
    return (
        <FlatList
            data={animals}
            renderItem={ ({animal}) => ( 
                <TodoItem item={animal}>
            )}
        />
    )
}
```
```Javascript
export default function TodoItem(props) {
    return (
        <TouchableOpacity onPress={() => pressHandler(props.animal.id)}>
            <Text style={styles1.item}>{props.animal.name}</Text>
        <TouchableOpacity/>
    )
}
```
OR
```Javascript
export default function TodoItem( {animal} ) {
    return (
        <TouchableOpacity onPress={() => pressHandler(animal.id)}>
            <Text style={styles1.item}>{animal.name}</Text>
        <TouchableOpacity/>
    )
}
```

---
## With State

```Javascript
import TodoItem from './components/todoItem'

export default function App() {
    const [animals, setAnimal] = useState([
        {...},
        {...}
    ])

    const pressHandler = (key) => {
        setAnimal( (animals) => {
            return animals.filter(animal => animal.key != key)
        })
    }

    return (
        <FlatList
            data={animals}
            renderItem={ ({animal}) => ( 
                <TodoItem item={animal} pressHandler={pressHandler}>
            )}
        />
    )
}
```
```Javascript
export default function TodoItem(props) {
    return (
        <TouchableOpacity onPress={props.pressHandler(props.animal.id)}>
            <Text style={styles1.item}>{props.animal.name}</Text>
        <TouchableOpacity/>
    )
}
```
OR
```Javascript
export default function TodoItem( {animal, pressHandler} ) {
    return (
        <TouchableOpacity onPress={() => pressHandler(animal.id)}>
            <Text style={styles1.item}>{animal.name}</Text>
        <TouchableOpacity/>
    )
}
```
