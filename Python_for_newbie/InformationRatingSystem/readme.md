# Bho

## TODO

remove everithing inside \n \n

```
IRS: Information Rating System
IRE: Information Rating Engine
```

https://docs.python-guide.org/
```bash
pip install tk
pip install requests
pip install bs4
pip install lxml
```

## Clean html

https://www.youtube.com/watch?v=sa-TUpSx1JA
```python
str1 = str1.replace('  ', ' ')
str1 = str1.split('  ')
```

```python
Jsoup.clean(yourText, whitelist)
''.join(soup.findAll(text=True))
```

## What is

- NumPy

    NumPy è una libreria open source (Python), che aggiunge supporto a grandi matrici e array multidimensionali insieme a una vasta collezione di funzioni matematiche di alto livello per poter operare efficientemente su queste strutture dati. È stato creato nel 2005 da Travis Oliphant basandosi su Numeric di Jim Hugunin.

- Pandas

    Pandas è una libreria software scritta per il linguaggio di programmazione Python per la manipolazione e l'analisi dei dati. In particolare, offre strutture dati e operazioni per manipolare tabelle numeriche e serie temporali.

- Matplotlib

    Matplotlib è una libreria per la creazione di grafici per il linguaggio di programmazione Python e la libreria matematica NumPy. Fornisce API orientate agli oggetti che permettono di inserire grafici all'interno di applicativi usando toolkit GUI generici, come WxPython, Qt o GTK. C'è anche una interfaccia "pylab" procedurale basata su una macchina degli stati (come OpenGL) progettata per assomigliare a quella di MATLAB.

- SciPy

    SciPy è una libreria open source di algoritmi e strumenti matematici (Python)
    Contiene moduli per l'ottimizzazione, per l'algebra lineare, l'integrazione, funzioni speciali, FFT, elaborazione di segnali ed immagini, solver ODE e altri strumenti comuni nelle scienze e nell'ingegneria.


# Stat file

```
Unix Time in seconds: 
    1609434141
    1609432176.6340365
Unix Time in millis: 
    1609434136000
```

```python
import pathlib
p = pathlib.Path(filename)
stat_info = p.stat()

print('{}:'.format(filename))
print('  Dimnsione      :', stat_info.st_size)
print('  Permessi       :', oct(stat_info.st_mode))
print('  Proprietario   :', stat_info.st_uid)
print('  Dispositivo    :', stat_info.st_dev)
print('  Creato         :', time.ctime(stat_info.st_ctime))
print('  Ultima modifica:', time.ctime(stat_info.st_mtime))
print('  Ultimo accesso :', time.ctime(stat_info.st_atime))
```
## Regex

https://regex101.com/

https://stackoverflow.com/questions/9662346/python-code-to-remove-html-tags-from-a-string
```python
# metacharacters . ^ $ * + ? { } [ ] \ | ( )
# Character Classes [a-z]
# <(.*)>|\n+
# (\r?\n|\r) ---> remove new line
# <[a-zA-Z0-9 "=/:!-\[\]\.|]*/?>
# <[a-zA-Z0-9 \.\]\\[{()}^$|?*+:!-=_]*/?>
# <(\w*)> ---> \w = [a-zA-Z0-9_] ---> <header> <ls> <h2>
# <(\w*)> ---> <[a-zA-Z0-9_]*>
# <.{3}> ---> <div>
import re
x = re.findall("ai", txt)
x = re.search("\s", txt)
x = re.split("\s", txt)
x = re.sub("\s", "9", txt)
```
- findall: 	Returns a list containing all matches
- search: 	Returns a Match object if there is a match anywhere in the string
- split: 	Returns a list where the string has been split at each match
- sub: 	Replaces one or many matches with a string
```
For the sake of completeness, it should be noted that there are four different new line characters in Unicode: \u000a or \n, which is a line feed; \u000d or \r, which is a carriage return; \u2028, a line separator; and \u2029, a paragraph separator.
```

```python
# ?:  is for non capturing group
# ?=  is for positive look ahead
# ?!  is for negative look ahead
# ?<= is for positive look behind
# ?<! is for negative look behind
```

select "ciao io sono" e non "https://ciaoiosono"
```Python
# seleziona tutti i paragrafi dove non c'e' scritto color
# [^\n]*color[^\n]*
# seleziona tutto tranne i CRLF all'inizio e alla fine
# [^\n]*[^\n]*
```

### File regex

```python
import re

text = open("text.txt", "r").read()

text = re.sub("[^\n]*/?=?[/]*[^\n]*", "", text)
# text = re.sub("\s*<.*>\s*", " ", text)
# text = re.sub(" +", " ", text)

open("text2.txt", "w").write(text).close()
```

```python
open('inforge.txt', 'w').write(response).close()
```