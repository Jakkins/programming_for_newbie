## BeautifulSoup

```python
# class_ is a special keyword in Python
soup.find_all(['article', 'h2'], class_='post-title')
```
## Usefull

Strip does not remove whitespace everywhere, only at the beginning and end.

## Random Stuff

```python
print(os.getcwd())
print(os.listdir())

# escape char
# chr(27), 27esimo carattere della tabella ASCII
# \033c -> octal        https://stackoverflow.com/questions/47503734/what-does-printf-033c-mean
# \x1bv -> hexadecimal
print(chr(27) + "[2J") 
# However the sequence "\x1bc" will not do the same as "\033c"
# Note that in ANSI capable terminals such as the linux terminal, you can clear the screen with
print("\033[2J\033[;H", end='')
# Window, se scrivo clear direttamente sul terminale funziona, tramite comando invece no
subprocess.call("cls", shell=True)
```

```python
print('{} {}'.format(var1, var2))
```