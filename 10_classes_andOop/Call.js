function setUserName(username){
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username , email , password){
    //after writing call method it is now actually being called
    //call methid is used to hold the reference of the call
    setUserName.call(this , username);

    
    this.email = email;
    this.password = password;
}

const chai = new createUser("Chai" , "chai@facebook.com" , "123");
console.log(chai);