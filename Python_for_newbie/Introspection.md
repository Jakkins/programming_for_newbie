# Introspection

[dir command](https://docs.python.org/3/library/functions.html#dir)
```python
from Xlib import display

def printArr(arr):
	for a in arr:
		print(f'{a} 		{type(a)}')
		
def printSep(str):
	print(f'\n############################')
	print(f'{str}\n')

printSep('display')
printArr(dir(display))

printSep('display.Display()')
printArr(dir(display.Display()))

printSep('display.Display().screen()._data')
printArr(display.Display().screen()._data)
```
