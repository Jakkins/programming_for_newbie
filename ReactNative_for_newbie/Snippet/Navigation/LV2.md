
### Authentication flows

```Redirect from Login page to Home page```

```Javascript
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LogInRoutes from './routes/LogInRoutes'
import HomeRoutes from './routes/HomeRoutes'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
        <Stack.Screen name="LogInRoutes" component={LogInRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```
```Javascript
export default function HomeRoutes({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="TodoScreen" component={TodoScreen} />
        <Stack.Screen name="ScreenProva" component={ScreenProva} />
      </Stack.Navigator>
  )
}
```
```Javascript
export default function LogInRoutes({navigator}) {
  return (
    <Stack.Navigator>
        <Stack.Screen name="LogScreenMenu" component={LogScreenMenu} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
    </Stack.Navigator>
  )
}
```
```Javascript
export default function TodoScreen({navigation}, {rootNav}) {
    return (
        <View style={logScreenCSS.view}>
            <Text>TodoScreen</Text>
            <TouchableOpacity 
            style={LogInCSS.button}
            onPress={() => navigation.navigate('ScreenProva') } >
                <Text style={LogInCSS.text}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={LogInCSS.button}
            onPress={() => navigation.navigate('LogInRoutes') } >
                <Text style={LogInCSS.text}>Send</Text>
            </TouchableOpacity>
        </View>
    )
}
```