class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
// we always have return statement in getters and there is no return statement in setters

  get email(){
    return this._email.toUpperCase();
  }

  set email(value){
     this._email = value
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const sarika = new User("sarika@sarika.ai", "abc");
console.log(sarika.password);
console.log(sarika.email);

