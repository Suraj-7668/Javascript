const marvel_heros = ["thor","Ironman","Spiderman"]

const dc_heros = ["Superman","Batman","Flash"]

// push method

marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// concat method

let new_heros = marvel_heros.concat[dc_heros]
// console.log(new_heros)

// Spread Operator
const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros)

const another_array = [1,2,3,[4,5,6],7,8,9,[3,5,3,[7,5,3]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// Asked , is it array and not array
// console.log(Array.isArray(another_array))

// Any value convert into a array
console.log(Array.from("SurajSingh"))

console.log(Array.from({name: "SurajSingh"}))  // very interesting
console.log(Array.of(1,2,3,4,5,6,7))