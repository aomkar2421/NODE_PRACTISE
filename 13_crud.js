const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,"files")
const filePath = dirPath+"/omkar.txt"
// console.log(filePath)

// fs.writeFileSync(filePath,"omkar jagtap")

// fs.readFile(filePath, 'utf8', (error,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath, "New Text Is This", (err)=>{
    // if(err){
    //     console.log(err)
    // }else{
    //     console.log("File Is Updated")
    // }
// })

// fs.rename(filePath,dirPath+"/avi.txt", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File Is Renamed")
//     }
// })

// fs.unlinkSync(dirPath+"/avi.txt")
