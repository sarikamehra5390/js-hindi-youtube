//if

//This will execute 
if(true){
    
}

//This will not execute 
if(false){

}

const temperature = 42;
if(temperature < 50){
    console.log("less than 50");
    
}else{
   console.log("temperature is greater than 50");
}

//Comparison operator 
// < , > , >= , <= , != , === , !==


const score = 200 ;
if(score > 100){ // Block scope 
    let power = "fly";
    console.log(`User power : ${power}`);
    
}

//console.log(`User power ${power}`); // This can't be exectuted becoz power is out of scope 

//Shorthand notataion
const balance = 1000;

 //if(balance > 500) console.log("test");

//Nesting 
if(balance < 500){
    console.log("Less than 500");
    
}else if(balance < 750){
    console.log("less than 750");
    
}
else if(balance < 900){
    console.log("less than 900");
    
}else {
    console.log("less than 1200");
    
}

const userLoggedIn = true;
const debitCard = true ;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){ // all the condition should be true
    console.log("Allow to buy courses");
    
}

if(loggedInFromEmail || loggedInFromGoogle){ // one of  the condition should be true
    console.log("user logged in ");
    
}

//&& and || are logical operator

//Nullish Coalescing operator(??) : null undefined
let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; //10
val1 = undefined ? 15: //15
val1 = null ?? 10 ?? 100; //10

//Sometimes when we call from database or firewall then we directly didn't get the response we get two values (and their are chances that we can get null response or undefined)
// so for this problem this (??) operator is used 

console.log(val1);

//Terniary Operator 
// condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than  80") : console.log("More than 80");
;



