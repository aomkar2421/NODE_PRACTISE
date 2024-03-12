const mongoose = require('mongoose')


const sample0Schema = new mongoose.Schema({
    name: String,
    age: Number,
    student: Boolean
})

const readDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/dummy1')
    let sample0Model = mongoose.model('sample0',sample0Schema);
    let data = await sample0Model.find();
    console.log(data)  
}


const insertDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/dummy1')
    let sample0Model = mongoose.model('sample0',sample0Schema);
    let data = new sample0Model({name:"ankita",age:25})
    let result = await data.save();
    console.log(result)  
}


const updatetDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/dummy1')
    let sample0Model = mongoose.model('sample0',sample0Schema);
    let data = await sample0Model.updateOne(
        {name:"ankita"},
        {$set:{age:99}}
    )
    console.log(data)  
}


const deleteDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/dummy1')
    let sample0Model = mongoose.model('sample0',sample0Schema);
    let data = await sample0Model.deleteOne(
        {age:99}
    )
    console.log(data)  
}



// insertDB();
// updatetDB();
deleteDB();
readDB();
