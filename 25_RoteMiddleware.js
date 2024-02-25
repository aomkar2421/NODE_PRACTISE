// 



const express = require('express')
const App = express();
const omkar = require('./Middleware')
const route = express.Router()

route.use(omkar);
App.use(route)

App.get('' , (req,resp) => {
    resp.send("Home Page")
})

App.get('/product' , (req,resp) => {
    resp.send("Product Page")
})

route.get('/contact' , (req,resp) => {
    resp.send("Contact Page")
})

route.get('/about' , (req,resp) => {
    resp.send("About Page")
})

App.listen(4500)
