
- [Window](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Setup%20Environment.md#window)
- [Linux](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Setup%20Environment.md#linux)
- [Unit Test C](https://stackoverflow.com/questions/65820/unit-testing-c-code)
- [Infos](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Setup%20Environment.md#infos)
	- [List of compilers](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Setup%20Environment.md#list-of-compilers)
	- [Unit test framework](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Setup%20Environment.md#unit-test-framework)

## Window

- MinGW64

##### Come compilare
```bash
gcc filedistance/filedistance.c -o prove/filedistance
```
Come compilare nella programmazione modulare
```bash
gcc filedistance/source/filedistance.c filedistance/source/distance.c -o prove/filedistance
```
oppure
```bash
gcc filedistance/source/*.c -o prove/filedistance 
```
Oppure usare il makefile
```
C:\MinGW\bin\mingw32-make.exe
```

## Linux

#### CodeBlocks

[Dark Theme for Menus (NOT Editor)](https://askubuntu.com/questions/630893/set-dark-theme-for-menubar-etc-not-editor-codeblocks)

File >> Properties >> Advanced >> GNU GCC Compiler

[What is the Code::Blocks project directory tree scheme?](https://stackoverflow.com/questions/21273755/what-is-the-codeblocks-project-directory-tree-scheme)

Project >> Project tree >> Categorize by file type
<br>Project >> Project tree >> Display folder as on disk
<br>Project >> Set programs' arguments

To fix cursor [strange behaviour](http://forums.codeblocks.org/index.php?topic=15812.0): Settings >> Editor >> Choose >> "FreeMono Regular"

Line counter Width: Settings >> Editor >> Margin and caret >> Caret >> Width >> 1 (or whatever)

#### Unit Testing
```bash
sudo pacman -S cmocka 
```
[Unknown Type Name?](https://stackoverflow.com/questions/55614090/cmockery-compilation-unknown-type-name-jmp-buf)
<br>[Link cmocka to gcc](https://stackoverflow.com/questions/33260973/how-do-i-link-with-cmocka)
```c
// These 4 before cmocka.h
#include <stdarg.h>
#include <stddef.h>
#include <stdint.h>
#include <setjmp.h>

#include <cmocka.h>

#include <stdio.h>

int main(int argc, char * argv[])
{
    printf("Hello Test\n");
    assert_string_equal("Hello World", "Hello World");
    return 0;
}
```
Makefile
```
# ADD to SRC_TEST all the files needed
SRC_TEST = main.c
OBJ_TEST = $(SRC_TEST:.c=.o)

# ==== TEST ====

.PHONY: test
.PHONY: run_test
.PHONY: build_test
.PHONY: clean_test
.PHONY: prep_test

test: run_test clean_test

run_test: build_test
	./test.elf

build_test: prep_test
	gcc -L/use/lib -o test $(OBJ_TEST) -lcmocka

prep_test: 
	$(foreach i, $(SRC_TEST), gcc -c ./tests/$i ;)

clean_test:
	$(RM) $(OBJ_TEST) test.elf
```
## Infos

##### List of compilers:
- GCC
- Clang
- MSVC
##### Unit test framework 
- [cmocka](https://www.youtube.com/watch?v=GYBtduwyhaM)
