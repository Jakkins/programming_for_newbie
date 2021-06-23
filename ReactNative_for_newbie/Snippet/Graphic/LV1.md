<h1 align="center">Graphic LV1</h1>

- codepen?

### Euristic

- No <Button /> use <TouchableOpacity />
  
### CSS

- flex
  - flexDirection: 'row'
- border
  - borderColor: '#bbb'
  - borderWidth: 1
  - borderStyle: 'dashed'
  - borderRadius: 10
- backgroundColor
  - backgroundColor: 'coral'
  - backgroundColor: '#ddd'

### Obj

```Javascript
<TextInput placeholder='e.g. Sam' />
```

### View

- this View contains a FlexBox by default so I can do this:
    ```Javascript
    const styles = StyleSheet.create({
        viewcss: {
            //flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        text1: {
            flex: 2
        },
        text2: {
            flex: 2
        }
    })
    ```
    - alignItems: align using 2 axis

