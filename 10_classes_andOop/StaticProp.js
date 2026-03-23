class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
      }
  // static is used to avoid the access 
    static createId(){
        return `123`;
    }
}

// const sarika = new User("Sarika");
// console.log(sarika.createId());

class Teacher extends User {
    constructor(username , email){
        super(username);
        this.email = email;

    }
}

const iphone = new Teacher("iphone" , "i@phone.com");
iphone.logMe();