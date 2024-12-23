// In js the comparison operators(>= , > ,< , <=) and equailty opertaor(==) works differently because of their different syntax
// the below type of conversion can confuse us . so , we need to avoid using them


//Comparison converts null to a number , treating it as 0
//That's why null >= 0 gives true 
console.log(null > 0); // false
console.log(null ==0); //false
console.log(null >= 0); //true

console.log(undefined == 0);//false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// (===) strictly check values i.e, checks its datatype also
//Datatypes of the number which are compared should be same 

console.log("2" == 2); // true
console.log("2" === 2); // false

