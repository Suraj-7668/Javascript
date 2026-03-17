const userEmail = "Suraj@gmail.com"

if(userEmail) {
    console.log("got user email")
}else{
    console.log("dont have user")
}


// falsy Value
//  false,  0, -0, " ", undefined, NaN, null, BigInt 0n

// truly  Value
//  "0", 'false', " ", [], {}, function(){}

// check Array empty and not empty
const arr = []
if (arr.length === 0) {
    console.log("Array are empty")
}

// // check Object empty and not empty
const myObj = {

}
if (Object.keys(myObj).length === 0) {
    console.log("Object is empty")
}

// Nullish coalescing Operator (??): null and undefined ke liye use hota hai

let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = undefined ?? 15
let val4 = null ?? 10 ?? 20

console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)

// terniary Operator

// condition ? true : false       ==> Syntax

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80")