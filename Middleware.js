module.exports = omkar = (req, resp, next) =>{
    if (!req.query.age) {
        resp.send('Provide Age')
    }else if (req.query.age < 18) {
        resp.send("You are not eligible")
    }else{
        next();
    }
}