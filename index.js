console.log("Hassan");
add(4,5);

function add(x,y){
    return x+y
}
//
console.log("Ali")
setTimeout(() => console.log("I am web developer"), 1000);
console.log(add(4,5));

function add(x,y){
    return x+y;
}
//
console.log("BSCS Student");
setTimeout(() => console.log("I am a student"), 0);
console.log(add(4,5));

function add(x,y){
    return x+y;
}
//
const allowedPassword=["secret123","password123","admin"];

function login(password){
    return allowedPassword.includes(password);
}

function checkPassword(password){
    return new Promise((resolve,reject) =>{
        if(login(password)){
            resolve({ status: true, message: "Password is valid!"});
        }else{
            reject({ status: false, message: "Password is rejected!"});
        }
    });
}

checkPassword("password123")
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

checkPassword("hassan123")
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

checkPassword("admin")
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error)
});