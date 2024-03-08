const DBConnect = require('./30_connection')

// DBConnect().then( (resp) => {
//     resp.find().toArray().then( (data) => {
//         console.log(data)
//     })
// })

// DBConnect().then( (resp) => {
//     console.log(resp.find().toArray());
// })

const read = async () => {
    let data = await DBConnect();
    data = await data.find().toArray();
    console.log(data);
}

read();

