//Unlike java , c++ and most of the programming languages we can store different data types(mix of different data types) in js  
//Array is an object 
//Arrays are resizable
//Declarind an array :
const myArr= [0 , 1 , 3 , 4 , 5, 6 , true , "sarika" ];
const myHeroes = ["Shaktiman" ,"Naagraj" ];
const myArr2 = new Array(1 , 2, 3, 4);


// arrays are accessed using index
console.log(myArr[3]); //4

//Shallow copy --> A Shallow copy is an object is  a copy whose properties share the same reference as those of the source object (it is like heap memory or call by reference )
//Deep copy --> A deep copy of an object is a copy whose properties do not share the same reference as those of the source object (call by value or stack memory)

//Array methods :
myArr.push(9); // [ 0, 1, 3, 4, 5, 6, true, 'sarika', 9 ]
myArr.pop(); // [ 0, 1, 3, 4, 5, 6, true, 'sarika' ]

myArr.unshift(8); // [ 8, 0, 1, 3, 4, 5, 6, true, 'sarika' ]
myArr.shift();// [ 0, 1, 3, 4, 5, 6, true, 'sarika' ]


console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(5)); // 4

const newArr = myArr.join(); // convert the array into a string 
console.log(myArr); // [ 0, 1, 3, 4, 5, 6, true, 'sarika' ]
console.log(typeof newArr); // String 


//Slice and splice --> in slice the last index is not included and it does not change or manipulate the original array but splice includes the last index in print range and manipulates and changes the original array 

console.log("A : " , myArr); // A :  [ 0, 1, 3, 4, 5, 6, true, 'sarika' ]
const myn1 = myArr.slice(1, 4);
console.log(myn1); // [ 1, 3, 4 ]

console.log("B: " , myArr); // B:  [ 0, 1, 3, 4, 5, 6, true, 'sarika' ]

const myn2 = myArr.splice(1 , 4); // It manipulates the original array and does changes in it 
console.log("C : " , myArr); // C :  [ 0, 6, true, 'sarika' ]
console.log(myn2); // [ 1, 3, 4, 5 ]
 




















