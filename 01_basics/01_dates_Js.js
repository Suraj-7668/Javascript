//Dates

let myDate = new Date()
console.log(typeof myDate)
console.log(myDate) 
console.log(myDate.toString()) 
console.log(myDate.toDateString()) 
console.log(myDate.toISOString()) 
console.log(myDate.toLocaleDateString()) 
console.log(myDate.toLocaleString()) 
console.log(myDate.toLocaleTimeString()) 
console.log(myDate.toTimeString()) 


let mycreatedDate = new Date(2026, 3 ,11, 5, 8, 2)
// console.log(mycreatedDate.toLocaleString())
// console.log(mycreatedDate.toLocaleDateString())
// console.log(mycreatedDate.toString())
// console.log(mycreatedDate.toLocaleTimeString())

// +++++++++++++ Time Stamp +++++++++++++++++

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getMonth()+1)
console.log(newDate.getTime())


// console.log(${newDate.getDay()} and time)

// newDate.toLocaleString('default',{
//     day: 'numeric',
//     weekday: 'long'
// })