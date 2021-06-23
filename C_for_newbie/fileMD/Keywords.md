
### static

- Inside a function
	- **It's initialized only once**, not everytime the function is called
	- The variable will retains it's value across that c file (lifetime)
- At the function level
	- Static global variable, file scope
	- Static function, file scope
	
### union

Just like struct but store only one field at a time <br>
Usages: <br>
- save space for members that are mutually exclusive
- access individual bytes/bits (embedded programming)
- variable format record

### define = macro

### typedef

### extern

main.c
```c
#include <stdio.h>
void caller(void);  // from bho.c
int x = 1;

int main(void) {
	caller();
	return 0;
}
```
bho.c
```c
#include <stdio.h>
extern int x;

void caller(void) {
	printf("%d\n", x);
}
```
output
```bash
$ gcc main.c bho.c
$ ./a.exe
1
```

### const

### volatile

### enum

### lvalue & rvalue

> All l-values are r-values but not all r-values are l-values.

- lvalue = locator value

### stack vs heap

Stack Memory Allocation, **allocation happens in function call stack, whenever the function call is over the memory for the variableS is deallocated.**
```c
int main(void) { 
   int a, b[10], n = 20; 
   int c[n]; 
} 
```

Heap Allocation, **the memory is allocated during execution of instructions written by programmers** <br>
The name heap has nothing to do with heap data structure
```c
int main() { 
   int *ptr  = new int[10]; 
} 
```

### memory leaks

Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate. <br>
Memory leak occurs when programmers create a memory in heap and forget to delete it.

#### useful keywords
- [best practices / good coding practices](https://www.youtube.com/watch?v=SpKlQTbOuZQ)
- advanced concepts
- compat code

### Sources

> Lv. 1->100 code difficult 

[code LV 1](https://www.youtube.com/watch?v=kz2lQdYXsKE&list=PLn3A1FGnKiUzerbdW4Zdp3-urUG27-TKV)

### Definition

[lvalue & rvalue](https://www.geeksforgeeks.org/lvalue-and-rvalue-in-c-language/) <br>
[stack vs heap](https://www.geeksforgeeks.org/stack-vs-heap-memory-allocation/)




