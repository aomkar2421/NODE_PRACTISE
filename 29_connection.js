const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'

const client = new MongoClient(url);

async function DBConnect(){
    await client.connect();
    const database = client.db("dummy1")
    return database.collection("sample");
}

DBConnect().then( (resp) => {
    resp.find().toArray().then( (data) => {
        console.log(data)
    })
})

module.exports = DBConnect;