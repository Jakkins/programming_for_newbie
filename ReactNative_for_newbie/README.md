<h1 align="center">React Native</h1>

- [Sites](#sites)
- [Useful](#useful)
- [Start](#start)
  - [Create project](#create-project)
  - [Gradle](#gradle)
  - [Other](#other)
  - [Emulator](#emulator)
- [Problems](#problems)
- [Publishing](#publishing)
  - [Signing your apk/aab](#signing-your-apkaab)

## Sites

- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Codepen](https://codepen.io/)
- https://codesandbox.io/
- https://www.youtube.com/watch?v=R2eqAgR_KlU&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=14

## Useful

```bash
# path of setting.json
~/.config/Code - OSS/User/settings.json

# https://code.visualstudio.com/docs/getstarted/themes
"workbench.colorTheme": "Abyss",
"editor.tokenColorCustomizations": {
    "[Abyss]": {
        "comments": "#ff990088",
        "keywords": "#adfaffe7",
        "strings": "#fff131",
        "functions": "#ff5100e3"
    }
},  
```

## Start

- [Linux Installation](https://github.com/Jakkins/ReactNative_for_newbie/blob/master/LinuxInstallation.md)
- [Window Installation](https://github.com/Jakkins/ReactNative_for_newbie/blob/master/WindowInstallation.md)

### Create project
```bash
npx react-native init AwesomeProject
```
### Gradle
Check your Gradle version

Version of your gradle
```bash
gradle --version
```
Version of the wrapper
```bash
cd ./AwesomeProject/android/
./gradlew -version
```
Change Gradle wrapper version:
```bash
./gradlew wrapper --gradle-version 6.7.1
# or change the url in gradle-wrapper.properties
```
Then
```bash
cd ./AwesomeProject
npm install
# start the packager
npx react-native start | npm run-script start
# start emulator
npx react-native run-android 
  OR npm run-script android
    # wait for:
      # License for package Android SDK Platform 29 accepted.
      # Preparing "Install Android SDK Platform 29 (revision: 5)".
      # "Install Android SDK Platform 29 (revision: 5)" ready.
      # "Install Android SDK Platform 29 (revision: 5)" complete.
      # "Install Android SDK Platform 29 (revision: 5)" finished.
      # Task :react-native-gesture-handler:compileDebugJavaWithJavac
      # Task :react-native-community_masked-view:compileDebugJavaWithJavac
      # Task :react-native-screens:compileDebugJavaWithJavac
      # and other packages if you have any
npm audit fix

npm install --save react
npm install --save react-native-safe-area-context
npm install --save @react-native-community/masked-view
npm install --save react-native-reanimated
npm install --save react-native-gesture-handler 
npm install --save react-native-screens 

npm install --save react-native-safe-area-view 
npm install --save @react-navigation/drawer
npm install --save typescript

npm install --save react-native-keychain 
```

### Other
- [emulator-acceleration for linux](https://developer.android.com/studio/run/emulator-acceleration?utm_source=android-studio#vm-linux)
- Prettier (VSCode plugin)
- [Security](https://reactnative.dev/docs/security)

### Emulator 

```
avdmanager create avd --name Emulator1 -k ~/.android/avd
```

## Problems

```has unmet peer dependency```

Example
```bash
warning "@react-native-community/eslint-config > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning " > @react-navigation/stack@5.12.8" has unmet peer dependency "@react-native-community/masked-view@>= 0.1.0".
warning " > @react-navigation/stack@5.12.8" has unmet peer dependency "react-native-gesture-handler@>= 1.0.0".
warning " > @react-navigation/stack@5.12.8" has unmet peer dependency "react-native-safe-area-context@>= 0.6.0".
warning " > @react-navigation/stack@5.12.8" has unmet peer dependency "react-native-screens@>= 2.0.0-alpha.0 || >= 2.0.0-beta.0 || >= 2.0.0".
```
```diff
++++++ Resolution ++++++
```
```bash
yarn add typescript --dev
yarn add react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
---

```ClassNotFoundException: javax.xml.bind.annotation.XmlSchema```

[Source](https://stackoverflow.com/questions/49630165/how-to-configure-unity-2017-4-to-target-android-and-avoid-build-failures-on-osx/49630166#49630166) or [fix sdkmanager](https://stackoverflow.com/questions/47150410/failed-to-run-sdkmanager-list-with-java-9/47150411#47150411)
```diff
++++++ Resolution ++++++
you have to make sure /usr/libexec/java_home points to the JDK 8 installation.
OR if you need to install the SDKs
You can install Android Studio IDE and use it to install Android SDK
```
- [Java 1.8 AKA Java 8](https://tecadmin.net/install-oracle-java-8-ubuntu-via-ppa/)
- [Arch Linux - Java 8](https://wiki.archlinux.org/index.php/Java#Other_implementations)
    ```
    sudo pacman -S jdk8-openjdk 
    ```

```Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7```

```Could not initialize class org.codehaus.groovy.runtime.InvokerHelper```
```diff
++++++ Resolution ++++++
1. update Java JDK
2. in android > gradle > wrapper > gradle-wrapper.properties use version 6.3 or above (https://gradle.org/releases/) 
[e.g. https\://services.gradle.org/distributions/gradle-6.6-all.zip]
```
---
[Accept the license](https://stackoverflow.com/questions/54273412/failed-to-install-the-following-android-sdk-packages-as-some-licences-have-not)

```Warning: License for package Android SDK Build-Tools 28.0.3 not accepted.```

also Android SDK Platform 29 not accepted.
```diff
++++++ Resolution ++++++
open Android Studio > Configure > SDK Manager > install missing SDK

+++ OR

GNU/Linux Distributions:
yes | ~/Android/Sdk/tools/bin/sdkmanager --licenses

macOS:
export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/jdk/Contents/Home
yes | ~/Library/Android/sdk/tools/bin/sdkmanager --licenses

Windows:
%ANDROID_HOME%/tools/bin/sdkmanager --licenses
```

---

```/bin/sh: /opt/android-sdk/platform-tools/adb: No such file or directory```

```diff
++++++ Resolution ++++++
Check ANDROID_HOME path should be: /path/to/Android/Sdk
```

---

```Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup```

```diff
++++++ Resolution 1 ++++++
chmod 755 android/gradlew 
```

```diff
++++++ Resolution 2 (probabily window) ++++++
set JAVA_HOME to point to jdk-8u271 or jdk8-openjdk
```

---

```File ~/.android/repositories.cfg could not be loaded```
```diff
++++++ Resolution ++++++
mkdir -p .android && touch ~/.android/repositories.cfg
```
---
```emulator: ERROR: A snapshot operation for 'Pixel_2_API_30' is pending and timeout has expired. Exiting...```

```emulator: ERROR: Running multiple emulators with the same AVD is an experimental feature. Please use -read-only flag to enable this feature.```

```diff
++++++ Resolution ++++++
cd ~/.android/avd/Pixel_2_API_30.avd/
rm ./*.lock
```

---

[Source](https://stackoverflow.com/questions/36330551/why-is-this-call-to-a-react-native-native-module-blocking-the-ui)

```Call to a react-native native module blocks the UI```

```diff
++++++ Resolution ++++++
Wrap the method's code in a Thread object
```
```Java
@ReactMethod
public void someMethod(final String path, final Promise promise) {
    new Thread(new Runnable() {
        public void run() {
            // code
        }
    }).start();
}
```

## Publishing

```bash
./gradlew tasks
```

- assembleRelease to build an apk that I want to share with other people.
- installRelease when I want to test a release build on a connected device.
- bundleRelease when I am uploading my app to the Play Store.

Create simple APK
```bash
cd android
./gradlew bundleRelease
./gradlew assembleRelease
```

### Signing your apk/aab