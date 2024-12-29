const tinderUser = new Object(); //Singelon object 
const tinderUser2 = {} // non singleton object
//we can declare object using above both syntax there is no internal difference in this two syntax
console.log(tinderUser); //{}
console.log(tinderUser2); // {}

tinderUser.id = "123@abd";
tinderUser.name = "Emma";
tinderUser.isLoggedIn = false;

console.log(tinderUser); //{ id: '123@abd', name: 'Emma', isLoggedIn: false }

const regularUser = {
    email : "Someone@gmail.com",
    fullName :{
        userFullName :{
            firstName :"Sarika",
            lastName : "Mehra"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName); //Sarika

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3: "a",
    4: "b"
}

//by using this we merge obj inside object 
const obj3 = {obj1 , obj2};
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


//The object.assign() is a static copies all the objects from one or more source object to a target object 
//It returns the modified target object 
const obj4 = Object.assign({} , obj1 , obj2); // {}--> basically the target and obj1 and obj2 are the source
// so we are putting all the sources to the target object
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//Spread operator is basically used to combine the objects 
const obj5 = {...obj1 , ...obj2}
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users  = [
    {
        id : 1,
        email:"s@gmail.com"
    },
    {
        id : 1,
        email:"s@gmail.com"
    },
    {
        id : 1,
        email:"s@gmail.com"
    }
] 

users[1].email;

console.log(tinderUser); // { id: '123@abd', name: 'Emma', isLoggedIn: false }

//We can return the keys nad values indiviually 
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //  [ '123@abd', 'Emma', false]


//It converts the objects to the array within the array with the key-value pair 
console.log(Object.entries(tinderUser));//[ [ 'id', '123@abd' ], [ 'name', 'Emma' ], [ 'isLoggedIn', false ] ]


//It returns that wheather the property exists in the object or not 
console.log(tinderUser.hasOwnProperty('id')); // true





 

