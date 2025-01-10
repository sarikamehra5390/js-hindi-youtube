const coding = ["js" , "ruby" , "java" ,"python" , "cpp" ];


//In for each the values are not returned 
const value = coding.forEach((item) => {
         return item ;
}
)
console.log(value); //Undefined


const myNums = [1 , 2, 3, 4 ,5 ,6 , 7,8 , 9,10];

//Returns the value 
const newNums = myNums.filter((num) => num > 4);
console.log(newNums);

// in this case we have to write return statement while using curly braces.
const newNums2 = myNums.filter((num) => {
    return num > 4;
})

console.log(newNums2);


// In for each we have to apply some logic 
const newNum = [];

myNums.forEach((num) => {
    if(num > 4){
        newNum.push(num);
    }
})
console.log(newNum);






 