<h1 align="center">Refactoring LV1</h1>

Before
```Javascript
{
    animals.map((item) => {
        return (
            <Text style={styles1.item} key={item.key}>{item.name}</Text>
        )
    })
}
```
After
```Javascript
{
    animals.map(item => (
            <Text style={styles1.item} key={item.key}>{item.name}</Text>
        )
    )
}
```
OR
```Javascript
animals.map( item => <Text style={styles1.item} key={item.key}>{item.name}</Text> )
```

---