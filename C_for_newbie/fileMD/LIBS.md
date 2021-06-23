
### stdio.h

- [ffffff after every hex value using printf with %x](https://stackoverflow.com/questions/7496657/when-printing-hex-values-using-x-why-is-ffffff-printed-after-each-value)
```c
int printf (const char *format, ... );
int sprintf (char *str, const char *format, ... );
int fprintf (FILE *stream, const char *format, ... );
int fputs (const char *str, FILE *stream );
size_t fwrite (const void *ptr, size_t size, size_t count, FILE *stream );
```
Examples
```c
fprintf(stdout, "Size: %d\n", *size);
fwrite(buffer, *size, 1, stdout);
```
### dirent.h

- [dirent.h for Window to download](http://www.two-sdg.demon.co.uk/curbralan/code/dirent/dirent.html)
