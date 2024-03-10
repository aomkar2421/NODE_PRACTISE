const express = require('express')
const DBConnect = require('./29_connection')
const app = express()

app.get('/', async (req,resp) => {
    let data = await DBConnect();
    data = await data.find().toArray();

    resp.json(data);
    resp.end();
})

app.listen(3609)


