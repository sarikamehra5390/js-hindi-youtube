const userEmail = "Sarika.ai";

if(userEmail){
    console.log("Got user email");
    
}else {
    console.log("Don't have user email ");
    
}

//Falsy values 
// false , 0 , -0 , bigInt 0n , "" , null , undefined , NaN (not a number)
//Apart from these all the values are true values
// truthly values --> "0" , 'false' , " " , [] , {} , function(){}

const userEmail1 = [];
if(userEmail1.length === 0){
    console.log("Array is empty");
    
}

const emptyObj = {};
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}
