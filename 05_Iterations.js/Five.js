// for each 
const arr = ["js" , "ruby" , "java" , "python" , "cpp"];

arr.forEach( function (item) {
    console.log(item);
    
} )


//Arrow function 
arr.forEach( (item) => {
    console.log(item);
    
})

arr.forEach( (item , index , arr) => {
    console.log(item , index , arr);
    
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName :"js"
    },
    {
        languageName : "java",
        languageFileName :"java"
    },
    {
        languageName : "python",
        languageFileName :"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})



