# LEARN-SASS [@NodeSchool](https://nodeschool.io)
Learn the basics of [SASS](https://en.wikipedia.org/wiki/Sass_(stylesheet_language)).
```
$ npm install -g learn-sass
```

## Syntax

### Variables
```css
$font-stack:    Helvetica, sans-serif;  
$primary-color: #333;  

body {  
  font: 100% $font-stack;  
  color: $primary-color;  
}

/* import style from file */
@import 'filename'
```

### Mixins `@mixin` `@include`
```css
@mixin border-radius($radius) {  
  -webkit-border-radius: $radius;  
    -moz-border-radius: $radius;  
     -ms-border-radius: $radius;  
         border-radius: $radius;  
}
 
.box { @include border-radius(10px); }
```

Passing content blocks to a mixin:
```css
$color: white;  
 
@mixin colors($new-color: blue) {  
  background-color: $new-color;  
  @content;  
  border-color: $new-color;  
}  
 
.colors {  
  @include colors {   
    color: $color; /* content */
  } 
}

/* is compiled to:
.colors {  
  background-color: blue;  
  color: white;  
  border-color: blue;  
}
*/
```

### Extend/Inheritance `@extend`
```css
.message {  
  border: 1px solid #ccc;  
  padding: 10px;  
  color: #333;  
}  

.success {  
  @extend .message;  
  border-color: green;  
}  

.error {  
  @extend .message;  
  border-color: red;  
}  

.warning {  
  @extend .message;  
  border-color: yellow;  
}  
```

### Operators `+ - * / %`
```css
.container { width: 100%; }  
 
article[role="main"] {  
  float: left;  
  width: 600px / 960px * 100%;  
}  
 
aside[role="complimentary"] {  
  float: right;  
  width: 300px / 960px * 100%;  
}

/* is compiled to:
.container {  
 width: 100%;  
}  
 
article[role="main"] {  
  float: left;  
  width: 62.5%;  
}  
 
aside[role="complimentary"] {  
  float: right;  
  width: 31.25%;  
} 
*/
```

### Nested Properties
```css
.funky {  
  font: {  
    family: fantasy;  
    size: 30em;  
    weight: bold;  
  }  
}

/* is compiled to:
.funky {  
  font-family: fantasy;  
  font-size: 30em;  
  font-weight: bold; } 
*/
```

### Parent Selector `&`
```css
#main {  
  color: black;  
  a {  
    font-weight: bold;  
    &:hover { color: red; }  
  }  
}

/* is compiled to:
#main {  
  color: black; }  
  #main a {  
    font-weight: bold; }  
    #main a:hover {  
      color: red; }
*/
```

### Interpolation `#{}`
```css
$name: foo;  
$attr: border;  
p.#{$name} {  
  #{$attr}-color: blue;  
}
/* is compiled to:
p.foo {  
  border-color: blue; } 
*/

/* any operations near #{} will be treated as plain CSS */
p {  
  $font-size: 12px;  
  $line-height: 30px;  
  font: #{$font-size}/#{$line-height};  
}
/* is compiled to:
p {  
  font: 12px/30px;
} 
*/
```

### Each Iterator `@each $var in <list or map>`
```css
@each $animal in puma, sea-slug, egret, salamander {  
  .#{$animal}-icon {  
    background-image: url('/images/#{$animal}.png');  
  }  
}

/* is compiled to:
.puma-icon {  
  background-image: url('/images/puma.png'); }  
.sea-slug-icon {  
  background-image: url('/images/sea-slug.png'); }  
.egret-icon {  
  background-image: url('/images/egret.png'); }  
.salamander-icon {  
  background-image: url('/images/salamander.png'); }  
*/
```

### For Loop `@for $var from <start> through/to <end>`
```css
@for $i from 1 through 3 {  
  .item-#{$i} { width: 2em * $i; }  
}

/* is compiled to:
.item-1 {  
  width: 2em; }  
.item-2 {  
  width: 4em; }  
.item-3 {  
  width: 6em; }  
*/
```

### While Loop `@while`
```css
$i: 6;  
@while $i > 0 {  
  .item-#{$i} { width: 2em * $i; }  
  $i: $i - 2;  
}

/* is compiled to:  
.item-6 {  
  width: 12em; }  
.item-4 {  
  width: 8em; }  
.item-2 {  
  width: 4em; }  
*/
```

