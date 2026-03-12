// Singleton =
// jo object constractor se define hote vo object Singleton hota hai
// Aur jo object literals se define hota hai vo object Singleton nhi hota hai

// Object literals

const mySymbol = Symbol("key1")

let myUser = {
    name: "Suraj Singh",
    "full name1": "Suraj Singh Rajput",
    age: 22,
    location: "Uttar Pradesh",
    email: "Suraj@microsoft.com",
    isLoggedIn: false,
    inLoggedday: ["MOnday","tuesday","wednesday"],
    [mySymbol]: "key1"         // Symbol use this Syntax
}

console.log(myUser.name)
console.log(myUser["location"])
console.log(myUser["full name1"])
console.log(typeof myUser.age)
console.log(typeof myUser.email)
console.log(myUser[mySymbol])    // Symbol print use this Syntax

// Change value in in object
myUser.email = "Rajput@google.com"  // value override

// Object fixed, not changeable value

// Object.freeze(myUser)    // fixed object

// create a function 
myUser.greeting  = function(){
    console.log(`hello js user, ${this.name}, and ${this.age}`)
}
console.log(myUser.greeting())