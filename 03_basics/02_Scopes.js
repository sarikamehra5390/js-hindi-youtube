let a = 300 ;
const b = 20 ;
var c = 30 ;
// var is not used in js becoz it creates problem in scope 
console.log(a);
console.log(b);
console.log(c);

if(true){
    let a = 10 ;
    const b = 20 ;
   // var c = 30 ; // this will create problem 
   console.log("INNER : " ,a); // 10 (local scope)
   
}

console.log(a); // 300 (global scope)

//Scope is different in case of console in browser and console in node environment(vs code)


//child function can use the variable from parent function
function one(){
    const userName = "Sarika ";

    function two(){
        const website = "Youtube";
        console.log(userName);
        
    }

   // console.log(website); --> this is out of the scope 
    two();
    
}

one();


if(true){
    const userName = "Sarika";
    if(userName === "Sarika"){
        const website = " Youtube";
        console.log(userName + website);
        
    }
   // console.log(website); --> This is out of scope
}

//console.log(userName); // --> This is out of scope

//******************************Interesting******************************** */
 

// We can call the function before the function defination 

console.log(addOne(5));
function addOne(num){
       return num + 1;
}


// But in case of assigning the variable to a function we can,t call the function before declaration 
const addtwo = function(num){
    return num + 2;
}

addtwo(5);