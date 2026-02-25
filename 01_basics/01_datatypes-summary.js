// Primetive datatype (call by value)
// 7 types primetive datatype

// String, Number, Boolean, Null, Undefined, Symbol,bigInt

// For Example

let str = "Hello"       // Sting
let score = 49          // Number
let isLoggedIn = true   // boolean
let outSideTemp = null  // null 
let Undefined;          // undefined
let bigNumber = 324528957184782n

const id = Symbol('66')        // Symbol Datatype
const anotherId = Symbol('66')

// console.log(id === anotherId)  // symbol datatype 

console.log(" Primetive Datatype")
console.log(typeof str)
console.log(typeof score)
console.log(typeof isLoggedIn)
console.log(typeof outSideTemp)
console.log(typeof bigNumber)
console.log(typeof Undefined)


// Reference  (Non Primetive datatype)

// Array, Objects, Functions

// Non datatype always return => 'typeof == Object'

let heros = ["shaktiman","naagraj","doga"]    // Array Non datatype 

let myObject = {               // Objects Non datatypes
    name: "Suraj",            // Objects always define in curly brakets 
    age: 22,
    rollNumber: 3485723
}

// javascript main function ko ek varieable main value ke tarah assign kr skte hai

let functionValue = function(){}    // Function Non dataytpes

console.log(" ")
console.log("NOn Primetive Datatype")
console.log(typeof heros)
console.log(typeof myObject)
console.log(typeof functionValue)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory manegment 

// 1. Stack => Primitive Datatypes , (varieable ya value ki copy pass hai)


// For Example

let myname = "Suraj rajput"     // Original Value
let anothername = myname        // Value of Copy
anothername = "Suraj singh"     

console.log(myname)
console.log(anothername)

// 2. Heap => Non Primitive Datatype , (varieable ya value ki referenace pass hota hai)

// for Example

let userOne = {
    email: "ssssss@gmail.com",
    password: 9834,
}

let userTwo = userOne
 userTwo.email = "djsfgksjhd@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
