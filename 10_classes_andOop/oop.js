//Object Literal
const user = {
    username : "Sarika",
    loginCount : 7,
    signedIn : true, 

    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
    }

    
}

console.log(user.username);
console.log(user.getUserDetails());

//this keyword is used to describe the current context 

//Constructor function

const promiseOne = new Promise();
const date = new Date();

function User(username , loginCount ,isLoggedIn){
    this.username = username ;
    this.loginCount = loginCount;
    this.isLoggedIn  = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Sarika" , 12 , true);

const userTwo = new User("Chai aur code " , 11 , false);

//userTwo will override the value of userOne

console.log(userOne.constructor);

//new is the comstructor function
//new keyword - whenever we use new keyword an empty object is created which ic called an instance 
// 1. A new object has been created
//2. constructor function is called using new 
// 3. all the arguments written are injected in this keyword


