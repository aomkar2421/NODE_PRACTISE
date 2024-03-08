const DBConnect = require('./29_connection')

const deleteData = async () => {
    const data = await DBConnect();
    const result = await data.deleteOne(
        {vdno:'naruto explained'}
    )
    console.log(result)
}

deleteData();
