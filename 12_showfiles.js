const fs = require('fs')
const path = require('path')

// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`files/abc${i}.txt`,`I Am Omkar`)
// }

// const dirpath = __dirname+"/files"
const dirpath = path.join(__dirname,"files")

fs.readdir( dirpath, (erroe,f) =>{
    console.log(f)
    f.forEach( (items) =>{
        console.log(items)
    })
} )

console.log(dirpath)