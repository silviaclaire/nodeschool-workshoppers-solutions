# COUNT UP TO VERSION 6 OF JAVASCRIPT [@NodeSchool](https://nodeschool.io)
Learn how to use some features from ES6, the next version of JavaScript.
```
npm install -g count-to-6
```

## Syntax

### 1_HELLO ES6

### 2_Template Strings
```javascript
`Hello, ${person}! 1 + 1 = ${1 + 1}!`
```

### 3_Arrow Functions, Part 1
```javascript
x => x + 1; // function (x) { return x + 1; }
(x, y) => x + y;
```

### 4_Arrow Functions and 'this'
```javascript
setImmediate(() => console.log(this.yelp));
```

### 5_Destructuring
```javascript
// destructuring arrays
let numbers = [1, 2, 3];
let [foo, , baz] = numbers; // I don't need the second element

console.log(foo); // 1
console.log(baz); // 3

// destructuring objects
let box = {width: 10, height: 5, depth: 4};
let {width: x, depth} = box;

console.log(x, depth);// 10 4
console.log(width);   // ReferenceError: width is not defined
```

### 6_Spread
```javascript
var numbers = [1, 1, 2, 3, 5, 8];
var max = Math.max(...numbers);
```

### 7_Rest
```javascript
function sum(...args) {
  var result = 0;
  args.forEach(function (value) {
    result += value;
  });

  return result;
}

sum(1, 2, 3); // 6
```

### 8_Default Arguments, Part 1
```javascript
function sayHello(greeting = "Hello", name = "CampJS") {
  console.log(`${greeting} ${name}!`);
}

sayHello();                     // "Hello CampJS!"
sayHello("Hi there");           // "Hi there CampJS!"
sayHello(undefined, undefined); // "Hello CampJS!"
sayHello("Hiya", undefined);    // "Hiya CampJS!"
sayHello(undefined, "JSConf");  // "Hello JSConf!"
sayHello(null, 0); // "null 0!"
```

### 9_Default Arguments, Part 2
```javascript
// default arguments can be expressions
function log(arg, transform = x => x) {
  console.log(transform(arg));
}

log("Hello");                       // => "Hello"
log("Hello", y => y.toUpperCase()); // => "HELLO"

// default argument values can even depend on earlier arguments
function assertEquals5(val, error = `${val} does not equal 5!`) {
  assert.strictEqual(val, 5, error);
}

assertEquals5(3); // "3 does not equal 5!"
```

### 10_Tagged Template Strings
```javascript
// Tagged Template Strings
fn`Hello ${you}! You're looking ${adjective} today!`

// is a special type of function call
fn(["Hello ", "! You're looking ", " today!"], you, adjective);
```

🎉