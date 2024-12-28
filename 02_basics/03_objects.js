//Singleton : if we declare objects as literals in that case no singleton is made
// if declared  with constructor so , singleton will always be made 


const mySym = Symbol("key1");
//objest literals
const JsUser = {
    name : "Sarika",
    "full name" : "Sarika Mehra",
    [mySym] : "mykey", // correct syntax to delare symbol
    age : 20,
    location : "Delhi",
    email : "sarika@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , 'Saturday']

}

console.log(JsUser.email);
console.log(JsUser["email"]);
// In this case we cannot access the object by using dot operator
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "Sarikachatgpt.com";
//Object.freeze(JsUser); // to lock the value so that it cannot be manipulated 
JsUser.email =  "Sarikamicrosoft.com"// this will not change the email becoz it is already freezed

console.log(JsUser);
// {
//     name: 'Sarika',
//     'full name': 'Sarika Mehra',
//     age: 20,
//     location: 'Delhi',
//     email: 'Sarikachatgpt.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey'
//   }
 
JsUser.greeting = function(){
    console.log("Hello js user ");
}


console.log(JsUser.greeting); // [Function (anonymous)] --> we get the reference of the value if we don't use parenthesis   

console.log(JsUser.greeting()); //Hello js user

JsUser.greetingTwo  = function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(JsUser.greetingTwo()); //Hello js user Sarika










