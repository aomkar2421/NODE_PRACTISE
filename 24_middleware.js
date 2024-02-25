const express = require('express')
const App = express();

const abc = (req, resp, next) =>{
    if (!req.query.age) {
        resp.send('Provide Age')
    }else if (req.query.age < 18) {
        resp.send("You are not eligible")
    }else{
        next();
    }
}

App.use(abc);

App.get('' , (req,resp) => {
    resp.send("Home Page")
})

App.get('/about' , (req,resp) => {
    resp.send("About Page")
})


App.listen(4500)
