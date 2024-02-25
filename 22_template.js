const express = require('express')
const path = require('path')

const filePath = path.join(__dirname,'files')
const App = express()

App.use(express.static(filePath))

App.set("view engine",'ejs');

App.get( '/' , (req,resp) => {
    resp.sendFile(`${filePath}/index.html`)
} )

App.get( '/profile' , (req,resp) => {
    const data = {name:'omkar',age:21,city:'pune',skills:['java','react','node','mongodb']}
    resp.render('profile',{data})
} )

App.get( '/about' , (req,resp) => {
    resp.sendFile(`${filePath}/about.html`)
} )

App.get( '/help' , (req,resp) => {
    resp.sendFile(`${filePath}/help.html`)
} )

App.get( '*' , (req,resp) => {
    resp.sendFile(`${filePath}/nopage.html`)
} )


App.listen(4506)