<h1 align="center">AndroidJre</h1>

### Resolution to ```ClassNotFoundException: javax.xml.bind.annotation.XmlSchema``` for sdkmanager or avdmanager

I have found 3 possibilities:
1. Find an 1.8 version of Java (Java 8)
2. Download Android Studio and use it
3. Use the jre downloaded with Android Studio

Set the path of JAVA_HOME to 
```bash
export JAVA_HOME=/path/to/jre/
```

## Commands

```bash
# The "android" command is deprecated.
# For manual SDK, AVD, and project management, please use Android Studio.
# For command-line tools, use tools/bin/sdkmanager and tools/bin/avdmanager
```

## Other Problems

### ```Error: Package path is not valid```

[Source](https://github.com/NativeScript/NativeScript/issues/5667)
```bash
$ cd $ANDROID_HOME/tools/bin
$ ./sdkmanager "system-images;android-25;google_apis;x86"
```
------
### ```PANIC: Missing emulator engine program for 'x86' CPU.```

[Source](https://www.stkent.com/2017/08/10/update-your-path-for-the-new-android-emulator-location.html)

```bash
### Do not use ${ANDROID_SDK_ROOT}/tools/emulator
### Use ${ANDROID_SDK_ROOT}/emulator/emulator
which emulator
```
------
### ```emulator: ERROR: A snapshot operation for 'Pixel_2_API_30' is pending and timeout has expired. Exiting..```

```bash
rm ~/.android/avd/Pixel_2_API_30.avd/*.lock
emulator -avd Pixel_2_API_30
```