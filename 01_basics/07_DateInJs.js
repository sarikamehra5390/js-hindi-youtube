let myDate = new Date();

console.log(myDate.toString());//Wed Dec 25 2024 11:56:09 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); //2024-12-25T06:26:09.901Z
console.log(myDate.toJSON()); //2024-12-25T06:26:09.901Z
console.log(myDate.toLocaleDateString()); // 12/25/2024
console.log(myDate.toLocaleString()); // 12/25/2024, 11:56:09 AM
console.log(myDate.toLocaleTimeString());// 11:56:09 AM
console.log(myDate.toDateString()); //Wed Dec 25 2024
console.log(myDate.getTimezoneOffset()); // -330
console.log(myDate.toUTCString()); //Wed, 25 Dec 2024 06:26:09 GMT

console.log(typeof myDate); // Object 

let myCreateDate = new Date(2023 , 0 , 13);
let myCreateDate1 = new Date("2023-01-14");
console.log(myCreateDate.toDateString()); // Fri Jan 13 2023
console.log(myCreateDate1.toLocaleString()); //1/14/2023, 5:30:00 AM

let myTimeStamp = Date.now(); // it provides the date of now 

console.log(myTimeStamp);
console.log(myCreateDate.getTime()); // it povides the time of given date 

console.log(Math.floor(Date.now()/1000));// it make the time in millisec short 




