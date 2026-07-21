# JavaScript part - 1 Notes (Sheriyans Coding school ytb Channel)

var let const 

Temporal dead zone --> utna area jitne mai js ko pta toh hai ki variable exist karta hai par wo value nhi de sakta 

Hoisting impact per type 
hoisting -> ek variable ko jab js mai banate hai to wo variable do hisso mai toot jaata hai and uska declare part upar chale jaata hai and intialize part neeche reh jaata hai 

data types --> primitives and reference types

primitives --> number, string, boolean, undefined, null, symbol, bigint
primitive values are copied by value and stored in stack memory

reference types --> object {}, array[], function()
 reference values are copied by reference and stored in heap memory

symbol -> unique and immutable data type that can be used as an identifier for object properties. Each time you create a new symbol, it is guaranteed to be unique, even if you create multiple symbols with the same description. Symbols are often used to avoid property name collisions in objects.

bigint -> this type is used to avoid precision in the maximum safe number 

Dynamic Typing -> js mai static typing nhi hai and yaha par hai dynamic typing which means we can change the data because there are dynamic data types
let a = 18
a = true 
a = "harsh"

typeof quirks (eg : typeof null === 'object')

type coercion (== vs ===) -> concept that in which one type is automatically convert to another type in javascript 

truthy and falsy values:
truthy values --> all other values are truthy values
falsy values --> 0 false "" null undefined NaN document.all

!! is used to expose or find the truthy and falsy nature of the value 

Early return pattern --> 
1.Early Return Pattern is a programming technique in which a function returns immediately when a specific condition is met, instead of executing the remaining code. It is commonly used to handle edge cases, invalid inputs, or situations where the result is already known, making the code simpler and easier to read.
2.The Early Return Pattern is a coding practice where a function exits as soon as a condition is satisfied, avoiding unnecessary execution and reducing nested if-else statements.

 






