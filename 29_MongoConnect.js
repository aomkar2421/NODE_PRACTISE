const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'dummy1';

const client = new MongoClient(url);

async function getData() {
    try {
        await client.connect();
        const db = client.db(database);
        const collection = db.collection('sample');
        const result = await collection.find({}).toArray();
        console.log(result);
    } finally {
        await client.close();
    }
}

getData();
