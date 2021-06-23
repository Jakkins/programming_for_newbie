

### From LogIn to Home

```
Every time you change a state, the app will update
```

This don't work: ```<Stack.Screen name="LogIn" component={LogIn} isSignedIn={isSignedIn} setSigned={setSigned}/>```

App
```Javascript
export default function App() {
  const [isSignedIn, setSigned] = useState(false)
  return (
    <NavigationContainer>
      { isSignedIn ? <HomeNav /> : <LogInNav isSignedIn={isSignedIn} setSigned={setSigned}/> }
    </NavigationContainer>
  )
}
```
LogInNav
```Javascript
function LogInNav({isSignedIn, setSigned}) {
  return(
    <Stack.Navigator>
      <Stack.Screen name="LogIn">
        {()=> <LogIn isSignedIn={isSignedIn} setSigned={setSigned} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
```
LogIn
```Javascript
function LogIn({isSignedIn, setSigned}) {
  return (
    <>
        <TouchableOpacity onPress={() => { setSigned(true) }}>
            <Text>Send</Text>
        </TouchableOpacity>
    </>
  )
}
```
#### Simpler Code

```Javascript
export default function App() {
  const [isSignedIn, setSigned] = useState(false)
  return (
    <NavigationContainer>
        <Stack.Navigator>
            { isSignedIn ? (
                <HomeNav />
            ) : (
                <Stack.Screen name="LogIn">
                    {()=> <LogIn isSignedIn={isSignedIn} setSigned={setSigned} />}
                </Stack.Screen>
            )}
        </Stack.Navigator>
    </NavigationContainer>
  )
}
```