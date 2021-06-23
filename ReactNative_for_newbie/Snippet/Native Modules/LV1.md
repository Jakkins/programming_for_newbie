
```Everytime you modify the java module you have to recompile them```

## Native Modules - Callback

```Javascript
import {NativeModules, ...} from 'react-native';

function loadApp() {
  NativeModules.Ping.printHelloWorld( null, (msg)=>{
    console.log(msg)
  })
}

export default function App() {
  loadApp()
  return ( ... )
}
```
RNProjName > android > app > src > main > java > com > RNProjName

```Ping.java```
```Java
package com.todos;

import com.facebook.react.bridge.Callback; // important

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class Ping extends ReactContextBaseJavaModule {

    Ping(ReactApplicationContext context) {
        super(context);
    }
    
    @ReactMethod
    public void printHelloWorld(Callback errorCallback, Callback successCallback) {
        try {
            System.out.println("Ma sta roba funziona?");
            String hello = "Hello World";
            successCallback.invoke(hello);
        }
        catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }

    // import { NativeModules } from 'react-native'
    // NativeModules.Ping in JavaScript
    @Override
    public String getName() {
      return "Ping";
    }
}
```
```PingPackage.java```
```Java
package com.todos;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PingPackage implements ReactPackage {

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new Ping(reactContext));                //important
    return modules;
  }
}
```

## Native Modules - Promises

```Javascript
import {NativeModules, ...} from 'react-native';

async function loadApp() {
    let ciao = await NativeModules.Ping.printHelloWorld()
    console.log(ciao)
}

export default function App() {
  loadApp()
  return ( ... )
}
```
RNProjName > android > app > src > main > java > com > RNProjName

```Ping.java```
```Java
package com.todos;

import com.facebook.react.bridge.Promise;       // Important

import com.facebook.react.bridge.NativeModule;
// bla bla normal import bla bla

public class Ping extends ReactContextBaseJavaModule {

    Ping(ReactApplicationContext context) {
        super(context);
    }
    
    @ReactMethod
    public void printHelloWorld(Promise promise) {
        try {
            System.out.println("Ma sta roba funziona?");
            String hello = "Hello World";
            promise.resolve(hello);
        }
        catch (Exception e) {
            promise.reject(e.getMessage());
        }
    }

    @Override
    public String getName() {
      return "Ping";
    }
}
```