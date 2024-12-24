const name = "Sarika";
const repoCount = 50 ;

//console.log(name + repoCount + "value"); --> not used nowadays

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Sarika-sm-com");
const anotherGameName = new String("Sarika-sm-com"); //another way of declaring the string 

console.log(`Testing the methods of strings`);


console.log(gameName[0]); //S
console.log(gameName.length); //13
console.log(gameName.toLowerCase()); //sarika-sm-com
console.log(gameName.charAt(2)); //r
console.log(gameName.indexOf('k')); //4

const newString = gameName.substring(0 , 4); // --> substring does not take negative value 
console.log(newString); //Sari

const anotherString = gameName.slice(0, 2); // -->slice take the negative value 
console.log(anotherString); // Sa

const newStringOne = "    Sarika    ";
console.log(newStringOne.trim()); //Sarika

const url = "htps://sarika.com/sarika%20mehra";
url.replace('%20' , '-');

console.log(url.includes('sarika')); //true

console.log(gameName.split('-')); //['Sarika' , 'sm' , 'com']
console.log(gameName.at(4)); // gives the value present at the index (k)

//The method charCodeAt returns the unicode value of the element present at the index , it returns NaN in case of invalid index
console.log(gameName.charCodeAt(3)); // 105
console.log(gameName.charCodeAt(56)); //NaN


//This methods of the string object returns a non-negative integer that is the unicode code point value at the given position
console.log(gameName.codePointAt(7)); //115
console.log(gameName.codePointAt(44)); //Undefined

console.log(gameName.concat("-dotcom")); //append the string at the end 
console.log(gameName.endsWith('com')); // returns true if the strings ends with the passed parameter 
console.log(gameName.endsWith('com',12));
console.log(gameName.lastIndexOf('a')); //5 --> returns the last occurence


console.log(gameName.localeCompare(anotherGameName));

//This method of string values retrieves the result of matching this string against a regular expression
const regex = /[a-z]/g;
const regexTwo = /[a-z]/;
console.log(gameName.match(regex));
// [
//     'a', 'r', 'i', 'k',
//     'a', 's', 'm', 'c',
//     'o', 'm'
//   ]
console.log(gameName.match(regexTwo));
//[ 'a', index: 1, input: 'Sarika-sm-com', groups: undefined ]

console.log(gameName.matchAll()); // need to understand it in future 

console.log(gameName.normalize());

console.log(gameName.padEnd());





























