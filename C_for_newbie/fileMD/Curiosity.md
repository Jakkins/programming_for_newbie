<h2 align="center">Curiosity</h2>

# Master Curiosity

- sizeof is not a function
- [YOU BAS##RD - Function without name](https://stackoverflow.com/questions/840501/how-do-function-pointers-in-c-work) <br>
        - C99 standard does not have anonymous functions

# Curiosity

#### When something happen there are always you, pointers!

```c
(*dir).d_name 
// is the same of
dir->d_name
```

#### malloc

- Do I cast the result of malloc?
        
        It is unnecessary, as void * is automatically and safely promoted to any other pointer type in this case.
        It can hide an error.
    
    ```c
    int * sieve = malloc(length * sizeof *sieve);
    // drops the redundant parentheses with sizeof; they are only needed when the argument is a type name
    // sizeof *sieve = sizeof int
    ```
- strdup() viene usata per creare una copia di una stringa ma utilizza il malloc al suo interno che deve essere liberato dopo da chi utilizza questo metodo

#### memeset

```c
strinFileName = malloc( (numberOfFiles*257) * sizeof(char) );
memset(strinFileName, '\0', 1);
// memeset qui sta salvando il programma
// '\0' is the NULL character
```

#### [CRLF](https://stackoverflow.com/questions/56721688/what-is-crlf-in-hex)

CR is char and equals to 0x0D in hex

LF is char and equals to 0x0A in hex

BUT

```c
const char crlf = '\r\n'; 
```
**Will be compiled to \n in some implementations**

E.g. when compiling by MSVC

> so it will appear only 0xA

#### Exit code

- exit(2), exit(3)...
    - > the program exit returning the given value

#### "There is no real standard C lib"... Well no but actually yes...

- C99
- POSIX (Linux): you can use stat (if you know the filename), or fstat (if you have the file descriptor)
- off_t is POSIX standard and not C standard
- IIRC the standard library defines off_t as an unsigned 64 bit integer

#### String why are you so string?

**The C compiler automatically adds a NULL character '\0' to the character array created**

```c
char str1[5];
str1[0]='a';
str1[1]='b'; // and not like str="ab";
//oppure
char str2[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
char str3[] = {'H', 'e', 'l', 'l', 'o', '\0'};
// oppure
char name1[3] = "Sam";
char name2[] = "Sam";

// I metodi qui sotto usano i puntatori!
// E non gli posso passare le stringhe inizializzate come sopra
// NO memset( prova, 'A', (len)*sizeof(char) );
// NO strcpy( prova, pathFile );
```

char prova[256];   // strlen(prova) = 0

#### [Data_structure_padding](https://en.wikipedia.org/wiki/Data_structure_alignment#Data_structure_padding)

> Ghost memory allocation


#### Abstract Declarators 

#### (int), (void)
- int main(void) {}, main is a function that takes void as argument

#### Buffer doing things

```c
char * hexPositionLastOperation = malloc(8 * sizeof(char)); // should be '9' for string terminator

for(int i=0; i<8; i++) {
    hexPositionLastOperation[i] = filemBuffer[poiterToLastLine+24+i];
    printf("lastline: %c\n", hexPositionLastOperation[i]);
}

printf("lastline: %s\n", hexPositionLastOperation);
```
Output:
```bash
lastline: 0
lastline: 0
lastline: 0
lastline: 0
lastline: 0
lastline: 0
lastline: 0
lastline: 6                 // giusto
lastline: 00000006`�o��     // sbagliato
```

**Resolution** = add '\0' string terminator
```c
hexPositionLastOperation[8] = '\0';
// OPPURE
memset(hexPositionLastOperation, '\0', 9);
```