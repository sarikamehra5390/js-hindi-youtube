const accountId = 144553;
let accountEmail = "sarika@5437.com";
var accountPassword = "12345";
accountCity = "Jaipur"; 
let accountState;

//  we don't use var in js because of the problem of scope in js earlier . 
//  let has no scope proalllowed beacause it is constant 

//  accountId = 2; not problem . so, nowdays we use let keyword in js .

accountEmail = "hc@hc.com";
accountPassword = "12656296";
accountCity = " Delhi";
console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);

/*
prefer not to use var 
bcoz of issues in block scope and functional scope 
*/