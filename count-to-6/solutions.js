/**
 * SOLUTIONS for
 * COUNT UP TO VERSION 6 OF JAVASCRIPT @NodeSchool
 */

// 1_HELLO ES6
console.log('HELLO ES6')

// 2_Template Strings
console.log(`Hello, ${process.argv[2]}!
Your name lowercased is "${process.argv[2].toLowerCase()}".`
)

// 3_Arrow Functions, Part 1
var inputs = process.argv.slice(2)
var result = inputs.map(s => s[0]).reduce((soFar,s) => soFar + s)

console.log(`[${inputs}] becomes "${result}"`)

// 4_Arrow Functions and 'this'
var foot = {
  kick: function () {
    this.yelp = "Ouch!"
    setImmediate(() => console.log(this.yelp))
  }
}
foot.kick()

// 5_Destructuring
let args = process.argv.slice(2)
let result = {}; // needs semicolon here for seperating next line

[, result.username, result.email] = args
console.log(result)

// 6_Spread
var min = Math.min(...process.argv.slice(2))

console.log(`The minimum of [${process.argv.slice(2)}] is ${min}`)

// 7_Rest
module.exports = (...args) => {
  var sum = args.reduce((soFar, value) => soFar + value, 0)
  return sum / args.length
};

// 8_Default Arguments, Part 1
module.exports = (x = 0, y = 1) => (x + y) / 2;

// 9_Default Arguments, Part 2
module.exports = (string, bangs = string.length) => string + "!".repeat(bangs)

// 10_Tagged Template Strings
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)

function html(pieces, ...substitutions) {
  var result = pieces[0]
  for (var i = 0; i < substitutions.length; ++i) {
    result += escape(substitutions[i]) + pieces[i + 1]
  }

  return result
}

function escape(s) {
  return s.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/'/g, "&apos;")
          .replace(/"/g, "&quot;")
}

// You've finished all the challenges! Hooray!