for(let i = 0; i <= 10; i++){
    let element = i
    // if(i == 5){
        // console.log("it's a 5 number")
    // }
    // console.log(element)
}

for (let i = 1; i <= 10; i++) {           // Outer Loop
    // console.log(`Table of number: ${i}`)
    for(let j = 1; j<=10; j++){            // Inner Loop
        // console.log(`${i} x ${j} = ${i*j}`)
    }
    
}

let myArray  = ["Virat kohli","Rohit Sharma","M.S Dhoni","Hardik pandya"]
for(let i = 0; i < myArray.length; i++){
    const result = myArray[i]
    console.log(result)
}

// break and continue keywaord
// for (let index = 0; index < 10; index++) {
//     if (index == 5) {
//         console.log("Detected 5")
//         break
//     }
//     console.log(`the value of is ${index}`)
    
// }

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        continue
    }
    console.log(`the value of is ${index}`)
    
}
