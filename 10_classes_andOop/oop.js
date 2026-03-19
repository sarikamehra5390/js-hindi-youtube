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

const promiseOne = new Promise()
const date = new Date()

function User(username , loginCount ,isLoggedIn){
    this.username = username ;
    this.loginCount = loginCount;
    this.isLoggedIn  = isLoggedIn;

    return this;
}

const userOne = User("Sarika" , 12 , true);

console.log(userOne);

