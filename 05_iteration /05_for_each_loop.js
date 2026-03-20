// for Each loop Syntax

// [" "," "," "]
// [{},{},{}]
const coding = ["js","ruby","java","python","cpp"]
coding.forEach( function (items){   
    // callback function main function name nhi diya jata
    //  (without function name declare kiya jata hai)
  
    // console.log(items)
})

// arrow function use
coding.forEach( (item) => {
    // console.log(item)
})

// functio
function myfunct(item){
        console.log(item)
}
// coding.forEach(myfunct)     // only given reference of function name without calling it


coding.forEach((item,index,array)=>{
    console.log(item,index,array)
})

// Object create in array and object value and key access by for each loop
  const myarr = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
  ]

  myarr.forEach((item) => {
    console.log(item.languageName)
    console.log(item.languageFileName)
  })