const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
       
}

//In arrays in case of arrays we get keys instead of values using for in 

const programming = ["js" , "rb" , "py" , "java" , "cpp"];

for(const key in programming){
    console.log(programming[key]);
}

//We cannot use for in loop in maps
const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United States of America");
map.set('Fr' , "France");
map.set('IN' , "India");

for(const key in map){
    console.log(key);
    
}