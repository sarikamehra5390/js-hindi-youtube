// on the basis of accessing and how they are stored in memory datatypes are divided in two types
// primitive and non- primitive

//  #primitive
// 7 types : String , numbers ,boolean , null , undefined , symbol, BigInt

const score = 100; // In js we does not define the language 

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);

console.log(id === anotherId);

const bigNumber = 345636853798368736n;





// # non-primitive (Reference)
// Array , Objects , Functions

const heroes =  ["Shaktiman" , "naagraj" , "doga"];

let myObj = {
    name:"hitesh",
    age : 22,
}

 const myFunction = function(){
    console.log("Hello World");

}