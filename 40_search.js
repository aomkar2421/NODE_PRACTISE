const express = require("express")
require('./39_config')
const product = require('./39_products')

const app = express();
app.use(express.json());

app.get("/search/:key", async (req,resp)=>{
    const data = await product.find(
        {
            $or:[
                {"name": {$regex : req.params.key} },
            ]
        }
    );
    console.log(data);
    resp.send(data);
});


app.listen(5000);
