[Source](https://stackoverflow.com/questions/26522854/console-log-font-size-in-nodejs)
```
The way console.log works is that the output is sent to stdout or stderr, 
which are the standard stream provided by the OS to the application (nodejs) 
where it writes its output data. 
You can only pass text and ANSI escape codes to control the formatting of the text.

There's no option to control the font-size of the terminal text from within your node.js app.
```

## Ascii Art

### Solution 1
```JavaScript
const text1 = '  ______ __________  _    ____________'
const text2 = ' /  ___// ____/ __ \\  |  / / ____/ __ \\'
const text3 = ' \\__ \\ / __/ / /_/ /  | / / __/ / /_/ /'
const text4 = ' ___/ / /___/ _, _/ | |/ / /___/ _, _/'
const text5 = '/____/_____/_/ |_|  |___/_____/_/ |_| '

console.log('\x1b[33m%s', text1)  //yellow
console.log(text2) 
console.log(text3) 
console.log(text4)
console.log('%s\x1b[0m', text5)
```

## Infos

https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

https://en.wikipedia.org/wiki/ANSI_escape_code#Colors

```
Legenda ANSI escape code:
    - \x1b is the code for the non-printable control character escape

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
```