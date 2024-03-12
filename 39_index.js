const express = require('express')
// require('./39_config')
// const products = require('./39_products')

const app = express();
app.use(express.json())
app.post("/create", (req,resp)=>{
    resp.send("Done")
    console.log('hii');
});

app.listen(4500);

