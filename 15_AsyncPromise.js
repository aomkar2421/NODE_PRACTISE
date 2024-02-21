const { rejects } = require("assert");
const { resolve } = require("path");

let a = 10;
let b = 0;

// setTimeout(() => {
//     b=20;
// }, 1000);

const data = new Promise( (resolve,reject) =>{
    setTimeout(() => {
        resolve(20)
    }, 1000);
} )

data.then( (x)=>{
    b=x;
    console.log(a+b)
})
// console.log(a+b)






