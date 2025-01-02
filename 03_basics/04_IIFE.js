//IIFE (Immediately Invoked Function Expressions )
//Sometimes there is a problem from the global scope  so to remove the pollution caused by it if used IIFE

(function chai(){
    //chai is a named IIFE
    console.log(`DB CONNECTED`);
    
})(); // We shuld always put and semicolon after a function in IIFE
// This will work same as chai() calling the function 

(() => {
    //Simple IIFE
    console.log(`DB CONNNECTED TWO`);
    
})();

//We have to treat it as a normal function 
((name ) => {
    console.log(`DB CONNNECTED TWO ${name}`);
    
})("Sarika");

