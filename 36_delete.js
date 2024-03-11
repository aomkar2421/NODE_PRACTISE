const express = require('express')
const DBConnect = require('./29_connection')
const app = express()
const mongodb = require('mongodb')

app.use(express.json());



app.delete('/:id', async (req,resp) => {
    resp.send("omkar")
    console.log(req.params.id)
    let data = await DBConnect();
    let result = data.deleteOne(
        {_id :new mongodb.ObjectId (req.params.id)},
    )
})


app.listen(3609)


