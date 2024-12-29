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



