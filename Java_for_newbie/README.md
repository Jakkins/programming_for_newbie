This is an IntelliJ (src/, .idea, .iml, ...) + Git (.gitignore) repository

# Java_for_newbie

- [Java](#java)
- [Gradle](#gradle)
  - [Gradle FIX](#gradle-fix)
  - [JavaFX & Gradle](#javafx--gradle)
  - [Run App With Gradle](#run-app-with-gradle)
- [Android App](#android-app)
- [VSCode and Java](#vscode-and-java)
  - [VSCode and Debug](#vscode-debug)
- [IntelliJ IDEA](#intellij-idea)
- [Project Ideas](#project-ideas)

## Java

[Ideas for project](https://github.com/Jakkins/Java_for_newbie#project-ideas)
<br>[What is Gradle?](https://medium.com/jay-tillu/what-is-gradle-why-google-choose-it-as-official-build-tool-for-android-adafbff4034)

## Gradle

### Run App With Gradle

Add id 'application'.
Add mainClassName = 'Main'.
```
plugins {
    id 'java'
    id 'application'
}

mainClassName = 'Main'
```

### Gradle fix

- [Android Studio Could not initialize class org.codehaus.groovy.runtime.InvokerHelper](https://stackoverflow.com/questions/35000729/android-studio-could-not-initialize-class-org-codehaus-groovy-runtime-invokerhel)
```
Install Java SDK version: 14 or above

In gradle-wrapper.properties please use grade version 6.3 or above.
Project Dir >> gradle >> wrapper >> gradle-wrapper.proprierties
  >> distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-bin.zip
```
### JavaFX & Gradle

- [Setup Gradle for JavaFX](https://openjfx.io/openjfx-docs/#gradle)
  - [javafx-gradle-plugin](https://github.com/openjfx/javafx-gradle-plugin)

## Android App

[Android.com - Guide & Doc](https://developer.android.com/guide)
<br>[Frameworks list](https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks)

## VSCode and Java

[Good Source](https://dev.to/bobman38/moving-from-eclipse-to-vscode-by-a-java-developer-4ji7)
<br>[Some things are impossible, or just take much time](https://github.com/Microsoft/vscode-cpptools/issues/1201#issuecomment-422374300)

Extensions:
- Language Support for Java(TM) by Red Hat
- Debugger for Java by Microsoft
  - **Use "Run" above the main function**

## VSCode Debug

VS Code will search for JDK in this order:
1. File >> Preferences >> Settings >> Extensions >> Home
  - first workspace then user
2. the JDK_HOME environment variable
3. the JAVA_HOME environment variable
4. on the current system path

[Source](https://marketplace.visualstudio.com/items?itemName=redhat.java)
```
setting.json

"java.home": "C:\\Dev\\jdk-14.0.2",
"java.configuration.runtimes": [
        {
          "name": "JavaSE-14",
          "path": "C:\\Dev\\jdk-14.0.2",
          "default": true
        },
      ]

```
- [Java Debug Issue](https://github.com/microsoft/vscode-java-debug/issues/637#issuecomment-525121005)
- ["console": "internalConsole"](https://code.visualstudio.com/docs/java/java-debugging)

---

Add jar file without Maven or Gradle:
  - [VSCode Java and setting.json](https://stackoverflow.com/questions/50232557/visual-studio-code-java-extension-howto-add-jar-to-classpath)
    - [work-with-jar-files-directly](https://github.com/microsoft/vscode-java-pack/blob/master/release-notes/v0.9.0.md#work-with-jar-files-directly)

**settings.json** to add jar
```json
{
    "java.project.referencedLibraries": {
        "include": [
            "/home/sam/libs/jsoup-1.13.1.jar"
        ]
    }
}
```
---

### Can be useful
File >> Preference >> Settings === settings.json (Global)

For example
```
File >> Preference >> Settings >> Features >> Terminal >> terminal.external.linuxExec >> konsole === "terminal.external.linuxExec": "konsole" on settings.json (Global)
```
File >> Preference >> Settings >> Extensions >> Java Debugger >> java.debug.settings.console >> externalTerminal or internalConsole (to me the debugger work only with this option)

## Intellij IDEA

- [JavaFX FIX](https://stackoverflow.com/questions/52682195/how-to-get-javafx-and-java-11-working-in-intellij-idea)
- [InvocationTargetException, modules...](https://www.hellojava.com/a/51121.html)

Templates >> Application
```
--module-path="C:\Path\To\Your\JavaFX\lib" --add-modules=javafx.controls,javafx.fxml,javafx.base,javafx.media,javafx.graphics,javafx.swing,javafx.web

Example
--module-path C:/Users/Sam/.jdks/javafx-sdk-14.0.2.1/lib --add-modules=javafx.controls,javafx.fxml
```

### [Setup Gradle for JavaFX](#javafx--gradle)

- Edit Configurations >> Templates >> Gradle >> Tasks >> Write "run"

## Project Ideas
- [java.net.URLConnection mini tutorial](https://stackoverflow.com/questions/2793150/how-to-use-java-net-urlconnection-to-fire-and-handle-http-requests)
