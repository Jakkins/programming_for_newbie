1. [Java SE Development Kit (JDK)](https://jdk.java.net/archive/)
   ```
   export JAVA_HOME=/opt/android-studio/jre/
   ```
2. NodeJS
3. Python
4. [Android Studio SDK](https://wiki.archlinux.org/index.php/Android#Android_Studio)
     - For command-line tools, use 
       - tools/bin/sdkmanager
       - tools/bin/avdmanager
     - Add
        ```
        export ANDROID_HOME=~/path/to/AndroidSdk
        export PATH=$ANDROID_HOME/emulator:$PATH
        export PATH=$ANDROID_HOME/tools:$PATH
        export PATH=$ANDROID_HOME/tools/bin:$PATH
        export PATH=$ANDROID_HOME/platform-tools:$PATH
        ```
5. Set ANDROID_HOME environment variable