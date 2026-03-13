// const googleUser = {}            // it's not  singleton Object  (Object literals)
        
const googleUser = new Object()  // it's singleton Object

googleUser.name = "Suraj"
googleUser.id = "2423fdh"
googleUser.inLoggedIn = false
// console.log(googleUser)

// Nested create object
const uber ={
    name: "Surya",
    details: {
        fullname: {
            username: {
                firstName: "Suraj singh",
                id: "2354sdfgn",
            }
        }
    }
}
// console.log(uber.details.fullname.username.firstName)

// how to marge two or more object 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const objt = {obj1,obj2,obj3}
// console.log(objt)

const objt1 = Object.assign(obj1,obj2,obj3)
// console.log(objt1)

const objt2 = Object.assign({}, obj1,obj2,obj3)  // it's good practice for marge two and more object
// console.log(objt2)

// Spread method marge
const objt3 = {...obj1, ...obj2, ...obj3,}
// console.log(objt3)

const User = [
    {
        name: "suraj",
        id: "23985zsdf"
    },
     {
        name: "suraj",
        id: "23985zsdf"
    },
     {
        name: "suraj",
        id: "23985zsdf"
    },
     {
        name: "suraj",
        id: "23985zsdf"
    }
]
console.log("create a object in array ",User[1])

// Only key and value access
const key_value ={
    name: "Suraj",
    id: "98dsrlg",
    email: "S@gmail.com"
}
console.log("All keys of object ", Object.keys(key_value))
console.log("All value of object ",Object.values(key_value))
console.log(Object.entries(key_value))

// check properties in object
console.log(key_value.hasOwnProperty('email'))
console.log(key_value.hasOwnProperty('inLogged'))