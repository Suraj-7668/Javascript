const user = {
    username: "Suraj",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website!`)     // 'this' keyword refer only current context
        // console.log(this)        // current context means like 'value' 
    }
}
console.log(this)          // {} empty object given
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

// function chai(){
//     // let username = "Suraj"
//     // console.log(this.username)
//     console.log(this)
// }
// chai()

// const chai = function(){
//     let username = "Suraj"
//     console.log(this.username)
// }
// chai()


// ++++++++++++++++++++ Arrow Function +++++++++++++++++++++++++++ 
// Basic Syntax
const one = (num1,num2) =>{
    return num1+num2
}
console.log(one(2,5))

const chai = () => {
    let username = "Suraj"
    console.log(this)
}
chai()

// Implicit type use function
const two = (num1,num2) => num1+num2
// const two = (num1,num2) => (num1+num2)
console.log(two(2,5))

// Object retun this methods
const two1 = (num1,num2) => ({username: "suraj"})   // object ko return karne ke liye parathensics ka use karna hi pdhe ga
console.log(two1(2,5))