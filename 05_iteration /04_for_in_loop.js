// for in loop

const myObject = {
    js: "javascript",
    cpp: "C++",
    py: "python",
    ai: "Artifical Intelligence",
}
for (const language in myObject){
    // console.log(language)             // print of keys
    // console.log(myObject[language])   // print of Value
}

const arr = ["js","cpp","py","ai"]
for (const element in arr){
    console.log(element)      // print of keys
    console.log(arr[element])      // print of keys and value

}