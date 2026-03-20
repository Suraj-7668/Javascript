// reduce method use
const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce(function (acc,curral) {
    // console.log(`ACC VALUE: ${acc} , currval ${curral}`)
    return acc + curral
}, 0)   // 0 is a initial value
// console.log(myTotal)

const mytotal1 = myNums.reduce((acc,curr) => ( acc+curr),0)
// console.log(mytotal1)

const mycourse = [
        {
            course: "javascript",
            price: 2999,
        },
        {
            course: "Java",
            price: 8999,
        },
        {
            course: "Python",
            price: 1999,
        },
        {
            course: "React",
            price: 7999,
        },
]

const netpay = mycourse.reduce((acc,item) => {return acc+item.price},0)
console.log("total pay bill: ",netpay)