let coding = ["Virat","Rohit","Sanju","shubman","Abhishek"]

const value = coding.forEach((item)=>{
    // console.log(item)    // print coding array value
})
// console.log(value)     // return undefined 

// filter method

const num = [1,2,3,4,5,6,7,8,9,10]

let newNums = num.filter((item) => item > 4)
// () => self return karta hai
// console.log(newNums)

let newNum = num.filter((item) => {
    return item > 4 
     //if you are not use return keyword than you see empty array 
    // because {} it's not self return, in this case use return keyword

})
console.log(newNum)