const myNums = [ 1 , 2, 3];


const myTotal = myNums.reduce(function (acc , currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    // acc: 0 and currVal: 1
    // acc: 1 and currVal: 2
    // acc: 3 and currVal: 3
    return acc + currVal;
    
} , 0);
console.log(myTotal); //6


//using arrow function
const MyTotal = myNums.reduce((acc , currVal) => acc + currVal , 0);
console.log(MyTotal); //6

const ShoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    
    },    
    {
        itemName : "ds course",
        price : 12999
    }

]

const priceToPay = ShoppingCart.reduce((acc , item) => (acc + item.price) , 0);
console.log(priceToPay); // 22996


