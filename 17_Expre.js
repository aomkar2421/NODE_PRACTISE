const express = require('express')
const App = express();

App.get('' , (req,resp) => {
    resp.send("Home Page")
})

App.get('/about' , (req,resp) => {
    resp.send("About Page")
})

App.get('/products' , (req,resp) => {
    resp.send("Products Page")
})

App.listen(4500)
