const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dummy'
})


con.connect((err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Done")
    }
})