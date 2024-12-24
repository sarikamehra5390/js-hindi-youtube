// on the basis of accessing and how they are stored in memory datatypes are divided in two types
// primitive and non- primitive

//  #primitive
// 7 types : String , numbers ,boolean , null , undefined , symbol(used to make a value unique), BigInt(large values are handled)
// primitive datatypes are call by value (copy the value , changes are only applied in the copies )

const score = 100; 
const scoreValue = 100.8 ;

const isLoggedIn = false;
const outSideTemp = null ;
let userEmail; // undefined

// In js we does not define the language
// js is dynamically typed(This means that variable types are determined at runtime , we don't need to specify a variable's type when declaring it . The type of a variable can change during execution depending on the value it is assigned ) 

const id = Symbol('123'); 
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);

console.log(id === anotherId); // false

const bigNumber = 345636853798368736n;





// # non-primitive (Reference)
// Array , Objects , Functions

const heroes =  ["Shaktiman" , "naagraj" , "doga"]; //Arrays

//Objects
let myObj = {
    name:"hitesh",
    age : 22,
}

//Functions
 const myFunction = function(){
    console.log("Hello World");

}

console.log("Return type of all the dataTypes : ")
console.log(typeof scoreValue); //number 
console.log(typeof isLoggedIn); // boolean
console.log(typeof outSideTemp); // object
console.log(typeof id); // symbol
console.log(typeof heroes); // object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function