
- [Logging in spring boot - Java Brain!](https://www.youtube.com/watch?v=lGrcZsw-hKQ)
- [Static HTML](https://stackoverflow.com/questions/36104914/spring-boot-proper-location-for-html-files)
  - [spring.io guide](https://spring.io/blog/2013/12/19/serving-static-web-content-with-spring-boot)
  ```
  src/main/resources/resources/index.html
  src/main/resources/static/index.html 
  src/main/resources/public/index.html 
  ```
  - Remember the above is in highest to lowest precedence.
  - To check your file run the main class in eclipse and go to http://localhost:8080/index.html
- [CORS or proxy](https://stackoverflow.com/questions/45975135/access-control-origin-header-error-using-axios-in-react-web-throwing-error-in-ch)
  - [CORS way](https://stackoverflow.com/questions/45975135/access-control-origin-header-error-using-axios-in-react-web-throwing-error-in-ch)
- [return an object](https://stackoverflow.com/questions/32905917/how-to-return-json-data-from-spring-controller-using-responsebody/35822500#35822500)
    ```
    with @RestController

    When you return an object be sure to have put getters method on the class
    ```

## Serve ReactJS file

### What I do:
1. build react project ```npm run build```
2. copy all file on ```ReactProjectName\build\``` (should contain index.html) to ```SpringBootProject\src\main\webapp```

---

### ENV way

[Source](https://stackoverflow.com/questions/57040045/how-do-i-serve-a-react-application-from-an-spring-boot-application)

You have to build the React app
1. create .env file in the root of react project (next to package.json)
2. put PUBLIC_URL=/nameContextRoot in .env file (name of context root typically is name of war file)
3. build react project ```npm run build```
4. copy the contents in "build" directory to the spring-boot apps static directory
5. clean and rebuild spring boot project and run it

```Do not forget to build also the Spring Boot project LOL```

```Do not forget to build every time you made some changes to the code```

## Serve index

[Source](https://www.xspdf.com/resolution/58050711.html)
```
By default, Spring Boot looks in my src/main/webapp folder to find my html files and detects index.html
```

