
[fread](http://www.cplusplus.com/reference/cstdio/fread/) <br>
[error handling](https://www.codingunit.com/c-tutorial-error-handling-exception-handling)

---
[The GNU C Library](https://www.gnu.org/software/libc/manual/html_node/index.html)  <br>
[C file input/output](https://en.wikipedia.org/wiki/C_file_input/output)            <br>
[fopen](https://en.cppreference.com/w/c/io/fopen) <br>
[File Pointer vs File Descriptor](https://stackoverflow.com/questions/2423628/whats-the-difference-between-a-file-descriptor-and-file-pointer) <br>
[fputs vs fprintf](https://stackoverflow.com/questions/5690979/when-should-i-use-fputs-instead-of-fprintf) <br>
[hexdump](https://stackoverflow.com/questions/7775991/how-to-get-hexdump-of-a-structure-data) <br>
[file size](https://stackoverflow.com/questions/238603/how-can-i-get-a-files-size-in-c) <br>
[printf("%02x ", (unsigned char) buffer[j]);](https://stackoverflow.com/questions/23614913/get-the-size-of-a-buffer) <br>
[fread implementation](https://sourceware.org/git/?p=glibc.git;a=blob;f=libio/iofread.c)] <br>
    > fread calls getc internally. <br>
[Language standard (C99)](http://www.open-std.org/jtc1/sc22/wg14/www/docs/n1256.pdf)<br>
[Source Lib C](https://code.woboq.org/userspace/glibc) <br>
[malloc and snprintf](https://stackoverflow.com/questions/1788655/when-to-use-malloc-for-char-pointers) <br>
[strdup](https://en.cppreference.com/w/c/experimental/dynamic/strdup) <br>
[array di stringhe => char * arr[]](https://www.dummies.com/programming/c/how-to-build-an-array-of-pointers-in-c-programming/) <br>
[hex from string to int](https://pubs.opengroup.org/onlinepubs/7908799/xsh/strtol.html)


##### open a file
- open
- fopen
    - > Opens a file indicated by filename and returns a pointer to the file stream associated with that file.
    - > Con i file binari la "mode" di accesso e' diversa: r->rb, w->wb, r+->rb+, ...
    - > All opened files are automatically closed on normal program termination.

##### read a file
- #include <unistd.h>
    - read(int fd, void *buf, size_t nbyte)
        - this function shall attempt to read nbyte bytes from the file associated with the open file descriptor(fd), into the buffer pointed to by buf
    - access() is vulnerable to [TOCTOU attacks](https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use)
    - [What the fuck... LBYL VS EAFP](https://stackoverflow.com/questions/404795/lbyl-vs-eafp-in-java)
    - > TOCTOU race conditions are difficult to avoid and eliminate. One general technique is to use exception handling instead of checking, under the philosophy of EAFP – "It is easier to ask for forgiveness than permission" rather than LBYL – "look before you leap" – in this case there is no check, and failure of assumptions to hold are detected at use time, by an exception
    - > This sort of EAFP depends in part on whether the exceptions you test for are going to occur very often. If they are unlikely, then EAFP is reasonable. If they are common, then LBYL may be better. The answer probably also depends on the exception handling paradigm available. In C, LBYL is necessary
    - > EAFP can also have better security properties (eliminating some race conditions) in multi-threaded environments
    - > Consider creating a temporary file that must have a unique name. The best way to find out whether the chosen file name exists yet is to try creating it - making sure you use options to ensure that your operation fails if the file does already exist (in POSIX/Unix terms, the O_EXCL flag to open()). If you try to test whether the file already exists (probably using access()), then between the time when that says "No" and the time you try to create the file, someone or something else may have created the file.
- fread( void * ptr, size_t size, size_t count, FILE * stream )
    - reads an array of count elements, each one with a size of size bytes, from the stream and stores them in the block of memory specified by ptr
    ```
        f = fread()
        if( feof(f) )
        else if ( ferror(f) )
    ```
- fget()
- fscan()
    - > Opens a file (with a non-Unicode filename on Windows and possible UTF-8 filename on Linux)
- fscanf()  NO

##### write in a file
- fprintf()
- fwrite()

##### read a folder/directory
- dirent.h
- [file list from dir without ls](https://stackoverflow.com/questions/612097/how-can-i-get-the-list-of-files-in-a-directory-using-c-or-c)
- [Open directory using C](https://stackoverflow.com/questions/3554120/open-directory-using-c)
- [dir example](https://stackoverflow.com/questions/5125919/stat-error-no-such-file-or-directory-when-file-name-is-returned-by-readdir)
- [read file name](https://stackoverflow.com/questions/609203/read-file-names-from-a-directory/609236#609236)

##### get
- fgets()
- fgetc()

##### work with string
- strcat()
- strcpy()
- strdup()

##### #include <time.h>
- clock()
- time_t
- clock_t

##### useful method
- feof(file)
- sleep(5);
- fseeko()
- ftello()
```
Come stoppare il programma
char word[1];
scanf("%s", word);
```

##### useful keywords
- bytearray
- hexdump
    ```bash
    hexdump file1
    hexdump -C file1
    ```
- EOF = End Of File
- accesso sequenziale
- file "chiuso": risiede sul disco ma non e' possibile nessuna operazione su di esso 

##### other remarks
- **FILE * is already buffered while file descriptor is not**
    - > You can get the file descriptor from the FILE * using fileno()
    - > You can open a buffered FILE * from a file descriptor using fdopen().
    - There are no performance issues using either.
- 0x55 = 01010101 = U
- 0xaa = 10101010 = ª (Feminine ordinal indicator)
- openfile(str1, str2)              -> 257
- openfile(str1) + openfile(str2)   -> 541
    - > Aprire un file alla volta ha duplicatio il tempo, a differenza di passare tutte e due i file insieme
- fgets is a better (safer) option then scanf
- free (line);  /* free memory allocated by getline */
-  "fgets" is good for (and should only be used for) reading character strings from an input stream, be it a file or the stdin device. "fread" is suited for any data type, such as binary (hex) data. It gives you more rope to hang yourself with, so if you're just wanting to read ascii text, stick with "fgets"
- One thing that's wrong with the fopen()/fclose() method is that you may not be able to open a file for reading even though it exists
- printf("%s\n",name);   //  Flush the stream with '\n'
    - or
    ```
    printf("%s",name);
    fflush(stdout);        //  Flush the stream.
    name[1]='s';           //  Segfault here (undefined behavior)
    ```
    - > Note that fflush is really the right way to do it - a newline is not guaranteed to trigger a flush (and I've been bitten by that behavior before)

```
// A FILE Structure returned by fopen

// "Some believe that nobody in their right mind should make use of the internals of this structure."
// Taken from my stdio.h... The contents of this structure appear to change greatly on other implementations.
// The structure for this is burried under a lot of code.
typedef struct 
{
    unsigned char   *_ptr;
    int     _cnt;
    unsigned char   *_base;
    unsigned char   *_bufendp;
    short   _flag;
    short   _file;
    int     __stdioid;
    char    *__newbase;
#ifdef _THREAD_SAFE
    void *_lock;
#else
    long    _unused[1];
#endif
#ifdef __64BIT__
    long    _unused1[4];
#endif
} FILE;
```
##### Gotta be secure
 - sprintf(target_string,"%d",source_int) 
    - or (better yet, because it's safe from buffer overflows) **snprintf**(target_string, size_of_target_string_in_bytes, "%d", source_int)

##### Gotta go fast
- Ideally you would be able to get your data into a binary format and then use fread to directly read double precision number in. I would expect fread to be a lot faster in that case. (String-to-number conversions are expensive, and a raw binary format will result in a much smaller file)
- [fastest-matlab-file-reading](https://stackoverflow.com/questions/9440592/fastest-matlab-file-reading/9441839#9441839)
- [read file in chunks with and without dynamic memory allocation](https://stackoverflow.com/questions/3463426/in-c-how-should-i-read-a-text-file-and-print-all-strings)
- Declaring the array of fixed size will surely be faster. Each separate dynamic allocation requires finding an unoccupied block and that's not very fast. So if you really care about speed (have profiled) the rule is if you don't need dynamic allocation - don't use it. If you need it - think twice on how much to allocate since reallocating is not very fast too.
- strcat() is rather bad program practice, performance-wise

##### Civil War
[file size](https://wiki.sei.cmu.edu/confluence/display/c/FIO19-C.+Do+not+use+fseek()+and+ftell()+to+compute+the+size+of+a+regular+file) <br>
[file size answer](https://stackoverflow.com/questions/5957845/using-fseek-and-ftell-to-determine-the-size-of-a-file-has-a-vulnerability) <br>
- The reason to not use fstat is that fstat is POSIX, but fopen, ftell and fseek are part of the C Standard (so they are portable)
