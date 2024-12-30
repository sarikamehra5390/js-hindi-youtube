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
   console.log("INNER : " ,a);
   
}

console.log(a);
