
adobexd

step 1
    - html, css3, JS (JQuery)

Il dinamismo sta nella pagina statica :O

step 2
    - modulo to take json
        - php ajax(?)

COMMENTA IL CODICE!!!


## insight

[default values](https://www.w3schools.com/cssref/css_default_values.asp) 

[resize on scroll](https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp)

[What is the difference between window, screen, and document in Javascript?](https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript)
  - document can also be window.document, screen can be window.screen, and window can be window.window (or window.window.window)

- codepen
- jsfiddle.net

- mix-blend-mode
- clip-path
- overflow: hidden; & text-overflow: ellipsis;

[Why scripts at the end of body tag](https://stackoverflow.com/questions/30653081/why-scripts-at-the-end-of-body-tag)

## better use 
    - flex
    - justify-content

## [center absolute div inside body](https://stackoverflow.com/questions/15322519/how-do-i-center-vertically-and-horizontally-a-div-inside-the-body-element-withou)

display:table and display:table-cell are bad, stay away from them. 

Here is a very common way to center a div inside <body>. 
It positions the element's top and left sides at the 50% point within body 
and then ```subtract 1/2 the width and height from the margin-top and margin-left```.

```css
.box {
  background-color: black;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  margin-left: -10px;
  /* -1/2 width */
  margin-top: -10px;
  /* -1/2 height */
}
```
```html
<body>
  <div class="box">

  </div>
</body>
```