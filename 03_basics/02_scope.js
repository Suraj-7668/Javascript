var c = 300

let a = 10         // this varieable access in this scope and other..
if(true){
    let a = 10     // let and const varieable access only this Scope
    const b = 20
    var c = 30    // it's varieable access in global 
}
// console.log(a)
// console.log(b)
// console.log(c)


// Nested Function and Scope
function one(){
    const username = "Suraj"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //  console.log(website)       // it's given error because out of scope
    two()     
}   
// console.log(username)         // it's given error because out of scope
one()       

// it's called function
function addone(num1){
    return num1+1
}
console.log(addone(5))

// it's callled 'expression'

const addtwo = function(num2){
    return num2+1
}
addtwo(5)