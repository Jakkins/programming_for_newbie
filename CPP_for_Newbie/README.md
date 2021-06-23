# CPP for Newbie

1. Check [Wise.md](https://github.com/Jakkins/CPP_for_Newbie/blob/master/Wise.md)
2. Good Tutorial
	- [Source 1 - Tutorial from a game engineer of Need For Speed No Limits](https://www.youtube.com/watch?v=18c3MTX0PK0&list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb)
3. If Window10 you'll need to install [MinGW](http://www.mingw.org/)(or other compiler) and add it to your PATH.
	- This is where VS code will be installed: "AppData\Local\Programs\Microsoft VS Code"
		- I'll use "C/C++ for Visual Studio Code" for language support.
4. Check branches

## Compile
Makefile
```
// Really simple makefile

SRC = HelloWorld.cpp Log.cpp
OBJ = $(SRC:.cpp=.o)

all:HelloWorld clean

HelloWorld: $(OBJ)
	g++ $(OBJ) -o HelloWorld.exe

HelloWorld.o:
	g++ -c HelloWorld.cpp

Log.o:
	g++ -c Log.cpp

clean:
	del $(OBJ)
```

(It's possible to use the tasks.json but I stopped trying because I need to compile different projects on the same folder) [[Variables](https://code.visualstudio.com/docs/editor/variables-reference)]

```bash
mingw32-make.exe
# DO NOT mingw32-make.exe .\Makefile
# It's just doesn't work
```
## Run
tasks.json

TO RUN: Ctrl + Shift + B (you can also personalize the shortcut)
```
{
	"version": "2.0.0",
	"tasks": [
		{
			"type": "shell",
			"label": "Run in-folder exe",
			"command": "${fileDirname}\\*.exe",
			"problemMatcher": [],
			"group": {
				"kind": "build",
				"isDefault": true
			}
		}
	]
}
```

To Compile and run a single module:
- C/C++ Compile Run extension (Window)[it's handy]
  - File >> Preferences >> Settings >> Extensions >> Compile Run configuration >> Run-in-external-terminal
- Code Runner (Linux)

## Debug

- launch.json
- GDB
