// const fs = require('fs')
// const path = require('path')

// // for (let i = 0; i < 5; i++) {
// //     fs.writeFileSync(`files/abc${i}.txt`,`I Am Omkar`)
// // }

// // const dirpath = __dirname+"/files"
// const dirpath = path.join(__dirname,"files")
// console.log(dirpath)

// fs.readdir( dirpath, (erroe,f) =>{
//     console.log(f)
//     f.forEach( (items) =>{
//         console.log(items)
//     })
// } )

// console.log(dirpath)




const fs=require('fs');
const path=require('path');

const dirPath =path.join(__dirname,'files');
console.warn(dirPath);

// for (let i = 0; i <2; i++) {
//     fs.writeFileSync(dirPath + "hello" +i+ ".txt","Hello Everyone");
// }


fs.readdir(dirPath,(err,files)=>{
    files.forEach((item) => {
        console.log("The file name is ",item)
    });

})