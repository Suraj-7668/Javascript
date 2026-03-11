// Array 

let myArr = [1,2,3,4,5]
console.log(typeof myArr)
// console.log(myArr[2])

let number = new Array(1,2,3,4,5,6,7)
// console.log(number[4])

const myStr = ["Delhi","Kolkata","Bengaluru","Lucknow"]
// console.log(myStr[2])

// Array Methods

myArr.push(6)                                  // push method, add value in the array (value add in last index of array)
// console.log("Push method: ", myArr)
myArr.pop()                                    // dont requied any parameter because pop method delete value in last index of array
// console.log("POP method: ", myArr)

myArr.unshift(9)                              // this method add value in array starting index of array
// console.log(myArr)
myArr.shift()                                 // this method like pop, it is delete a element of array of in starting index of array
// console.log(myArr)

// console.log(myArr.includes(8))               // check value in array (present nad not present)
// console.log(myArr.indexOf(4))                // check value store in which index of array

// Slice and splice method

console.log("A",myArr)

let myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B", myArr)

// Splice method original array ko change kar deta hai, 
// Example => (Original array - splice(1,3))
let myn2 = myArr.splice(1,3)
console.log(myn2)
console.log(myArr)