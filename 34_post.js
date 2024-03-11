const express = require('express')
const DBConnect = require('./29_connection')
const app = express()
app.use(express.json());

app.get('/', async (req,resp) => {
    let data = await DBConnect();
    data = await data.find().toArray();
    resp.json(data);
})


app.post('/', async (req,resp) => {
    let data = await DBConnect();
    let result = data.insertOne(req.body) 
})


app.listen(3609)


