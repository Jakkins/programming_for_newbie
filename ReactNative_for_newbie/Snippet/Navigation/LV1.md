
1. Sometime you will have to close and reopen the app to make the navigation works

## Navigation

```Every screen component has a {navigation} prop passed by the fact that is a Screen```

```Javascript
function HomeScreen({navigation}) {
  return ( <View> </View> )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='float'>
        <Stack.Screen 
          name="Home" options={{ title: 'Wow' }} >
          {props => <HomeScreen {...props} extraData={someData} /> }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
```

```Basic Navigation```

```Javascript
import React from 'react'
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='float'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

// ===========================
// Screens

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}
```

