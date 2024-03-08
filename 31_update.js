const DBConnect = require('./29_connection')

const update = async () => {
    const data = await DBConnect();
    const result = await data.updateOne(
        {vdno:'naruto explained'},
        {$set : {vdno : 'explained naruto'} }
    )
    console.log(result)
}

update();
