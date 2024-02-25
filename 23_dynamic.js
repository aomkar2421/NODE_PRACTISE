const express = require('express')
const App = express()

App.set("view engine",'ejs');

App.get( '/profile' , (req,resp) => {
    const data = {name:'omkar',age:21,city:'pune',skills:['java','react','node','mongodb']}
    resp.render('profile',{data})
} )

App.listen(4500)