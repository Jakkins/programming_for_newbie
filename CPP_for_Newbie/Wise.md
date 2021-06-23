
```
1. Learn Function Oriented Design with F#
2. Learn Object Oriented Design (OOD) with Java
3. Learn Data Oriented Design (DOD) with C.
4. Take everything to C++
```
```
The C++ Core Guidelines C.2 states: "Use class if the class has an invariant; use struct if the data members can vary independently."

Use structs for small stuff, classes for big bois:
- use struct just to struct data
- use class fore more abstractions, inheritance, clear design
```
```
"A declaration sounds like a promise"
```
```
One or more defined symbols using headers.

- use static
- use inline
- just leave the declaration and put the definition on a cpp
```
```
functions take space on the stack, they slow your program.
learn to use "inline".
```
```
if statements slow the program
```
### Headers
```
#include "Common.h"
  #include "Log.h"
#include "Log.h"

-> Multiple definitions of Log
  - use #pragma once
  - Old style:
      #ifndef _LOG_H 
      #define _LOG_H 
      // codice
      #endif
```
```
header files in C standard lib have a the .h extension,
c++ header files do not.
```
```
In Arch (Linux) headers are in ./usr/include/c++/10.1.0/
```
### Debug

- Breakpoint
- Read memory

```
The launch.json file is used to configure the debugger in Visual Studio Code.
```
```
uninitialize memory will be filled with "c" before it is used.
an int before initialization -> 0xcccccccc
```
### Array
```
size = number of byte
count = number of elements
```

### Pointers
```c
const int * a = new int;
  // CAN change what the pointer is pointing to
  // can't change the content
int const * a = new int;
  // equals to above
int * const a = new int;
  // CAN change the content
  // can't change what's the pointer is pointing
const int * const a = new int;
  // can't change anything
```
```
Sometime you need smart pointers, sometime no.
  1. unique pointers
  2. shared pointers
  3. weak pointers
```


