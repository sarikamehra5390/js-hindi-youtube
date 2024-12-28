const marvel_heroes = ["thor" , "Ironman" , "spiderman"];
const dc_heroes = ["superman" , "flash" , "batman"];

//This will merge an array into an array : which is not used
// push does changes in the existing array 
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// //concat return a new array 
// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);// [ 'thor', 'Ironman', 'spiderman',  'superman', 'flash', 'batman'  ]

//Spread operator : we genrally use spread operator in js to merge two arrays.
const all_new_heroes = [...marvel_heroes , ...dc_heroes];
console.log(all_new_heroes); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [1 ,2 ,3 ,[4, 5 , 6 ], 7 , [6 , 7 ,[4 , 5]]];
 //[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);

//Checks the give param is an array or not 
console.log(Array.isArray("Sarika"));//false

//Converts any datatype into array 
console.log(Array.from("Sarika"));// [ 'S', 'a', 'r', 'i', 'k', 'a' ]

//In this case we have to tell the method to convert it in the baisic of either key or value
console.log(Array.from({name: "Sarika"})); // []

let score_1 = 100;
let score_2 = 200;
let score_3 = 300;
console.log(Array.of(score_1,score_2,score_3)); // [ 100, 200, 300 ]







