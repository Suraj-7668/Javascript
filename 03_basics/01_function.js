function name(){
    console.log("S")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("J")
}
name()          // function call

function twoNumberAdd(num1,num2){
    console.log(num1+num2)
}
twoNumberAdd(3,5)

function twoNumAdd(number1,number2){
    let result = number1+number2
    return result
}
const result = twoNumAdd(3,5) //  function call and store value in a varieable
// console.log("result", result)

function UserInLoggedIn(username = "Sam"){      // default value set in parameter
     return `${username}, just Logged in`
}
// console.log(UserInLoggedIn("Suraj"))

// Multiple Arrgument pass in function
function calculateCardPrice(...product){
    return product
}
console.log(calculateCardPrice(200,400,100,30000))

// Object
let userTo = {
    username: "Suraj Singh",
    price: 199
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username}, and  price is ${anyobject.price}`)
}
// console.log(handelObject(userTo))

// direct object pass
 handelObject({
    username: "sam",
    price: 199
 })

 // Array
 const myArray = [100,200,300,400,500]
 function returnSecondValue(getArray){
    return getArray[2]
 }
//  console.log(returnSecondValue(myArray))

// direct pass array in fuction
let directArray = returnSecondValue([100,200,300,400,500])
console.log(directArray)