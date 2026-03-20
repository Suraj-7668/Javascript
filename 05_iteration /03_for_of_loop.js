// for of loop 

let arr = [1,2,3,4,5,6,7,8,9]
for (const num of arr) {
    // console.log("Print number: "+ num)
}

let greeting = "Hello World"
for (const greet of greeting){
    console.log("Each World: "+greet)
}

// Map
const map = new Map()
map.set('IN', "India")
map.set('USA',"Unite State of America")
map.set('fr',"france")

// console.log(map)

for (const keys of map){
    console.log(keys)
}

for (const [keys,value] of map){
    console.log(keys,":-", value)
}

// for of loop use in object
// object iterable nhi hote hai

let myObj = {
    'player1': "Virat kohli",
    'player2': "Rohit Sharma",
    'player3': "Hardik pandya"
}
for (const player of myObj){
    console.log(player)
}