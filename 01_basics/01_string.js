const name = "Suraj"
const repoCount = "delhi"

// Old method for add two and more String 
console.log(name + repoCount + "Value")

// New method for add two and more String (backticks methods)
console.log(`hello, How are you ${name} where are you living ${repoCount}`)

// another type declaire string

const gameName = new String(`Suraj_Rajput`) 
// console.log(gameName[2])
// console.log(gameName.__proto__)         // Prototype Access

// String Methods
let strMethod = new String("Suraj_Singh")
let strMethodd = new String("    Suraj_Singh    ")

console.log(strMethod.length)
console.log(strMethod.toUpperCase())
console.log(strMethod.toLowerCase())
console.log(strMethod.charAt(3))
console.log(strMethod.indexOf('j'))
console.log(strMethod.replace('-',','))
console.log(strMethod.slice(2,5))
console.log(strMethod.includes('Singh'))
console.log(strMethodd.trim())
console.log(strMethodd.trimEnd())
console.log(strMethodd.trimStart())

