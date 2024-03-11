const mongoose = require('mongoose')

const main = async () =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/dummy1")
    const sample0Schema = new mongoose.Schema({
        name:String,
        age:Number
    })
    const sample0Model = mongoose.model('sample0',sample0Schema)
    let data = new sample0Model({name:"ankita",age:22})
    let result = await data.save();
    console.log(result)
}

main();





