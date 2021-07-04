const http = require('http')
const fs = require('fs')
const port = 3000;
var loger= 0;

const server = http.createServer((req, res) =>{
    res.writeHead(200) 
    fs.readFile('index.html','utf8', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('not found 404')
        }else{
            res.write(data);
            loger = loger + 1
            console.warn(loger)
        }
        res.end()
    })
});

server.listen(port, err=>{
    err ? console.log('error' , err) : console.log('the server is up on port ', port)
})

