
[Return An Array](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Snippet%20of%20good%20code.md#return-an-array)
<br>[Struct + Typedef combo](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Snippet%20of%20good%20code.md#struct--typedef-combo)
<br>[Return number of files inside a directory](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Snippet%20of%20good%20code.md#return-number-of-files-inside-a-directory)
<br>[Foreach](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Snippet%20of%20good%20code.md#foreach)
<br>[Read from a file line by line](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Snippet%20of%20good%20code.md#read-from-a-file-line-by-line)
<br>[Check if file](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Snippet%20of%20good%20code.md#check-if-file)
<br>[Simple Loading](https://github.com/Jakkins/C_for_newbie/blob/master/fileMD/Snippet%20of%20good%20code.md#simple-loading)


#### enum + union

## Return An Array

```c
void func(char * result, int size) {
	//code
	strncpy(result, "Returned string", size);
}

int main(void) {
	char * buffer = malloc(size);
	func(buffer, size);
	free(buffer);
} 
```
```c
// not recommended, for academic purposes only!
#define SIZE 100
struct Data { char buffer[SIZE]; };	// Heavy on memory

struct Data func() {
	struct Data d;
	strncpy(d.buffer, "Returned string", SIZE);
	return d;	// On the stack there will be a space reserved for that return value
}
```
## Struct + Typedef combo

```c
struct optional_struct_tag {
	type id1;
	type id2;
} optional_variable_definitions;

typedef optional_struct_tag ost;

ost var_struct;  // rather than "struct optional_struct_tag var_struct;"

// combine typedef + struct
typedef struct {
	type id1;
	type id2;
} new_struct_type_name;  // typedef definition = typedef + type + new_type_name
new_struct_type_name identifier;
```

## Return number of files inside a directory

```c
struct dirent **dirent;
int n = scandir(pathD, &dirent, NULL, alphasort);
printf("%d\n", n);
```

## Foreach
```c
#define foreachlist(item, list) \
    for(T * item = list->head; item != NULL; item = item->next)

// How to use

for_each_item(i, processes) {
    i->wakeup();
}
```
```c
#define foreacharray(item, array) \
    for(int keep = 1; count = 0; \
    	size = sizeof (array) / sizeof *(array); \
        keep && count != size; \
        keep = !keep, count++) \
      for(item = (array) + count; keep; keep = !keep)

// How to use

int values[] = { 1, 2, 3 };
foreach(int *v, values) {
    printf("value: %d\n", *v);
}
```
```c
char ** pathsOfFiles = ...;

for(; pathsOfFiles!=NULL; pathsOfFiles++)
{
	printf("%s\n", *pathsOfFiles);
}

```

## Read from a file line by line

```c
unsigned int sizeM = 0;
char * file = getBufferFromPath(&sizeM, pathM);  // fopen -> size -> fread
char * token = strtok(file, "\n");
while(token)
{
	printf("%s\n", token);
	token = strtok(NULL, "\n");
}
```
```c
FILE * modifyFile = fopen(path,"rb");
char * token = malloc(lineSize*sizeof(char));

while(fgets(token, lineSize, modifyFile) != 0)
{
	fwrite(token, lineSize, 1, stdout);
}

// OR

FILE * modifyFile = fopen(path,"rb");
char * token;
char line[lineSize];

while((token = fgets(line, lineSize, modifyFile)) != NULL)
{
	printf("%s", token);
}
```

## Check if file
```c
FILE * openfile(const char * path)
{
    FILE * file = fopen(path,"rb");
    if (file == NULL)
    {
    	fprintf(stderr, "Error in %s\n", path);
        perror("");
        exit(1);
    }
    else
    {
        char onetry[1] = "\0";
        if(0<fread(onetry, 1, 1, file)) {} // if can read is a file
        else
        {
            fclose(file);
            fprintf(stderr, "%s is a directory\n", path);
            exit(1);
        }
        fseek(file, 0, SEEK_SET);
    }
    return file;
}
```
## Simple Loading

```c
int tmp = 0;
for(int i=0; i<size; i++)
{
	loading(i, max, &tmp); 
	// also 
	// loading(i, size, &tmp); if size is the maximum
}

void loading(unsigned int actual, unsigned int max, int * tmp)
{
    int now = (100*actual/max);
    if( now != *tmp && now % 10 == 0)
    {
        *tmp = now;
        printf("%d/100\n", *tmp);
    }
}

```






















