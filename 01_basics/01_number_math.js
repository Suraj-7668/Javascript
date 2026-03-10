const score = 400
console.log(score)

let balance = new Number(100)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

let number = 123.4525
// console.log(number.toPrecision(4))

let hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))


// +++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++
  
console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(5.82369))
console.log(Math.ceil(5.82369))
console.log(Math.floor(5.82369))

console.log("Minmum number ",Math.min(4,8,3,4,8,2))
console.log("Maximum number ",Math.max(4,8,3,4,8,2))

// Math.random always given value 0 to 1
console.log(Math.random())
console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log((Math.floor(Math.random() * max - min + 1)) + min)