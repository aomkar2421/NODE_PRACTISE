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
    let data = new sample0Model({name:"ankita",age:22})
    console.log(data)  
}


const updatetDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/dummy1')
    let sample0Model = mongoose.model('sample0',sample0Schema);
    let data = new sample0Model({name:"ankita",age:22})
    console.log(data)  
}


const deleteDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/dummy1')
    let sample0Model = mongoose.model('sample0',sample0Schema);
    let data = new sample0Model({name:"ankita",age:22})
    console.log(data)  
}



// readDB();

