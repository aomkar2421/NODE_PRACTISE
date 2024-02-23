const express = require('express')
const path = require('path')

const filePath = path.join(__dirname,'files')
const App = express()

//App.use(express.static(filePath))

App.get( '/' , (req,resp) => {
    resp.sendFile(`${filePath}/index.html`)
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



App.listen(4505)






