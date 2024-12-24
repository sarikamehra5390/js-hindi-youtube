//***********************Nums*************************
const score = 300;
console.log(score); //300

const balance = new Number(100);
console.log(balance); // [Number: 100]


console.log(balance.toString().length); //--> Convert the number into the string and then we can apply string mehods into it 
console.log(balance.toFixed(2)); // 100.00 --> fixed the value upto 2 after decimal to avoid undesirable precision value 

const otherNumber = 23.89908;
console.log(otherNumber.toPrecision(4)) //23.90

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); //10,000,000 --> not as indian number system
console.log(hundreds.toLocaleString('en-IN'));1//1,00,00,000



//************************Maths****************************

console.log(Math); //Object [Math] {}

console.log(Math.abs(-4)); //4
console.log(Math.round(4.3));//4 --> round off the value 
console.log(Math.ceil(4.3)); // 5 takes the upper value 
console.log(Math.floor(4.9)); // 4 takes the lower value
console.log(Math.min(4 , 6, 2 , 9 ));
console.log(Math.max(4 , 6, 2 , 9 ));

console.log(Math.random()); //--> generates random value between (0 and 1) 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);




const min = 10;
const max = 20 ;
// This is the formula for generating random number if the min and max value is given 
console.log(Math.floor(Math.random()* (max - min + 1)) + min);












