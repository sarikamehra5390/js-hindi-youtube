function multipleByFive(num){
    return num * 5 ;
}

//function is also an object
multipleByFive.power = 2;

console.log(multipleByFive(5));
console.log(multiplyBy5.power);
console.log(multipleByFive.prototype);

// In javascript mostly everthing is an object 
//object's prtotype is null

function createUser(username , score){
    this.username = username ;
    this.score = score ;
}

createUser.prototype.increment = function(){
    this.score++; //increase the score of the current context 
}

createUser.prototype.printMe = function(){
    //this is used --> jisne bhi score pucha hai uska score badha do 
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai" , 25);
const tea = new createUser("tea" , 230);

//new keyword knows what to do

chai.printMe()

// Here what's happen behind the scenes when the new keyword is used:

// A new object is created : The new Keyword initiates the creation of a new javascript object .

// A prototype is linked : The newly created object gets linked to the prototype property of a constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called : The constructor function is called with the specified arguments and this is bound to newly created onject. If no explicit return value is specified from the constructor , Javascript assumes this , the newly created object , to be the intended return value .

// The new object is returned : After the constructor function has been called, if it doesn't return a non-primitive value(object , array , function , etc), the newly created object is returned.

