const http = require ('http')
const data = require('./10_data')

http.createServer((req,resp) => {
    resp.writeHead(200,{'content-Type':'applicaion.json'});
    resp.write(JSON.stringify(data))
    resp.end()
}).listen(3309)


