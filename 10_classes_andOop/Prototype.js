let myName = "Sarika";

console.log(myName.trim().length);
console.log(myName.trueLength);


let myHeroes = ["Thor" , "SpiderMan"];

let heroPower = {
    thor : "Hammer",
    spiderMan : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderMan}`);
    }
}

//Factory function
Object.prototype.Sarika = function(){
    console.log(`Sarika is present in all objects`);
}

Array.prototype.heySarika= function(){
    console.log(`Sariks says hello`);
}

heroPower.Sarika();

myHeroes.Sarika();

//Inheritance

const User = {
    name : "Sarika",
    email : "sarika5390@gmail.com"

}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeacherSupport , Teacher);

let anotherUsername = "ChaiAurCode        ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);

}

// this is used for current context

anotherUsername.trueLength();
"Sarika".trueLength(); //6
"IceTea".trueLength(); //6

//In browser {this = window}
// In node environment it is = {}