<h2 align="center">Reminder!</h2>

### ASCII table

| Links | Size |
| ------------- | ------------- |
| [ASCII](https://en.wikipedia.org/wiki/ASCII)  | 0 -> 127 (0x00 to 0x7F)  |
| [ISO/IEC 8859](https://en.wikipedia.org/wiki/ISO/IEC_8859) | 8859-1, 8859-2, ..., 8859-15  |
| [Windows-1252 superset of ISO/IEC 8859-1](https://en.wikipedia.org/wiki/Windows-1252) | 0 -> 255 |
| IANA's ISO-8859-1 | 0 -> 255 |



### char
```
If you work with strings  -> you could use char
If you work with binaries -> you must use unsigned char
```
### Arrays arent assignable.

**BIG NO**
```c
char name[] = getFileName(pathFile);

char getFileName(pathFile) {
    char * fileName = "file1";
    fileArgName = malloc( strlen(fileName)*sizeof(char) );
    strcpy(fileArgName, fileName);
    return *fileArgName
}
```


### function returns address of local variable

- > una variabile locale finisce nello stack che viene pulito a funzione terminata
- > usa malloc
