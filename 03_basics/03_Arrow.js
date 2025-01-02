const user =  {
    userName :  "Sarika",
    price : 999,
    
    welcomeMessage : function() {
        console.log(`${this.userName} , welcome to website`);
        //(this) function represent the current context 
        console.log(this);
        
    }

}
// Window is the global object for window

user.welcomeMessage(); // Sarika , welcome to website
//{
//     userName: 'Sarika',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }
user.userName = "Sam";

user.welcomeMessage();
// Sam , welcome to website
// {
//     userName: 'Sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

console.log(this); //{}

//this is not used in functions it is ony applicable in objects 
function chai(){
    let userName  = "Sarika";
    console.log(this.userName);
    
}
chai(); // undefined

const chai1 = function () {
    let userName = "Sarika";
    console.log(this.userName);
    
}
chai1(); // Undefined 


//Arrow function 
const chai2 = () => {
    let userName = "Sarika";
    console.log(this.userName);
    
}

chai2() // undefined

//Basic Arrow function --> explicitily return 
const addTwo = (num1 , num2) => {
    return num1 + num2;
}
console.log(addTwo(3 , 4)); // 7


//Implicit return 
// if {} are used in a function then we have to write return statement but if () are used then we don't  have to use the return statement 
const addTwoNum = (num1 , num2) => (num1 + num2);
console.log(addTwo(3 , 4)); //7 


// To return objects we have to apply the paranthesis 
const addTwoNumbers = (num1 , num2) => ({userName :" Sarika"}) ; 
console.log(addTwoNumbers(3 , 4)); // { userName: ' Sarika' }







