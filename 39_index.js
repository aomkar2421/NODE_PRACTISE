const express = require("express")
require('./39_config')
const product = require('./39_products')

const app = express();
app.use(express.json());

app.post("/create", async (req,resp)=>{
    const data = new product(req.body)
    const result = await data.save();
    console.log(req.body);
    resp.send(result);
});


app.get("/list", async (req,resp)=>{
    const data = await product.find();
    console.log(data);
    resp.send(data);
});


app.delete("/delete/:_id", async (req,resp)=>{
    const data = await product.deleteOne(req.params);
    console.log(data);
    resp.send(data);
});


app.put("/update/:_id", async (req,resp)=>{
    const data = await product.updateOne(
        req.params,
        {$set: req.body }
    )
    console.log(data);
    resp.send(data);
});





app.listen(5000);
