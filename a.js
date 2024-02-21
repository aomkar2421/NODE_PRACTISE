const http = require('http')

http.createServer( (req,resp) =>{
    resp.write("omjnnkar");
    resp.end();
} ).listen(4500)