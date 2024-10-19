// In js the comparison operators(>= , > ,< , <=) and equailty opertaor(==) works differently because of their different syntax
// the below type of conversion can confuse us . so , we need to avoid using them 
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strictly check values i.e, checks its datatype also

console.log("2" == 2); // true
console.log("2" === 2); // false

