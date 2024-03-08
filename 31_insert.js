const DBConnect = require('./30_connection')

const insert = async () => {
    const db = await DBConnect();
    const result = db.insertMany(
        {vdno:"SOSP explained", views: 76000, creator:"anime addictive"},
        {vdno:"Six Paths explained", views: 96000, creator:"anime addictive"},
        {vdno:"Paths explained", views: 69000, creator:"anime addictive"},
        {vdno:"HAKI explained", views: 99999, creator:"anime addictive"}      
    )
    console.log(result)
    console.log("data inseted")
}

insert();
