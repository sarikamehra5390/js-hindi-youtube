const promiseOne = new Promise(function(resolve , reject){
    //Do an async task
    //Database call
    //Cryptography 
    //network call
    setTimeout(function(){
        console.log('Async task is complete')
        resolve();
    },1000)
});

//then is the straight connection with resolve
promiseOne.then(function(){
    console.log("Promised consumed");
})

//this is done in 1 part only 
new Promise(function(resolve , reject){
    setTimeout(function(){
      console.log("Async task 2");
    }, 1000);
    resolve();
}).then(function(){
    console.log("Async 2 resolve");
});

//3rd promise

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "Chai , emial: chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Sarika", password : "123"})
        }else{
            reject('ERROR: Something went wrong');
        }
    }, 1000);
})


// useful for database connection
promiseFour
.then((user) => {
   console.log(user);
   return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = 

