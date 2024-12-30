//Function defination
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("K");
    console.log("A");
    
}
//sayMyName --> reference
//sayMyName(); // this is called the execution

function addTwoNumbers(num1 , num2 ){
    console.log(num1 + num2) ;
}

const result = addTwoNumbers( 3 , 4); //7
console.log("Result : " , result); // Result :  undefined


// num1 and num2 used in function defination as inputs are known as parameters
// num1 and num2 used in calling the function are known as arguments 


function addTwoNumbers(num1 , num2 ){
    let result = num1 + num2;
    return result;
 // after return statement nothing get print    
}

const result2 = addTwoNumbers(3 , 5 );

console.log("Result : " , result2); // Result :  8


function loginUserMessage(userName){
    if(userName === undefined){
         console.log(`please enter a user name `);
         return;
         
    }
    return `${userName} just logged in `;
}

loginUserMessage("Sarika"); // This will only return the value 
console.log(loginUserMessage("Sarika")); //It will return and print the value 

// this will not take multiple values as an argument 
function calculateCarPrice1(num1){
     return num1;
}

console.log(calculateCarPrice1(2)); //2

//Rest operator is used in case of not knowing how many arguments are going to be there 
//rest and spread operator syntax is same  but it depends on its use case that when we have to call it spred or rest 

function calculateCarPrice2(...num1){ // Rest is used here 
    return num1;
}

// It will return the output in the form of array of all the arguments given 
console.log(calculateCarPrice2(200 , 300 , 400 , 2000)); // [ 200, 300, 400, 2000 ]


function calculateCarPrice3( val1 , val2 , ...num1){ // Rest is used here 
    return num1;
}

console.log(calculateCarPrice3(200 , 300 , 500 , 2000)); // [ 500, 2000 ]

const user = {
    userName : "Sarika ",
    prices : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and the price is ${anyObject.prices}`); 
    
}

handleObject(user); // Username is Sarika  and the price is 199

const myNewArray = [200 , 300 , 400 , 100];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); 











