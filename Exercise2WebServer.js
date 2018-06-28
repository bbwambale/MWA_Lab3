const fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
        fs.readFile('elephant.png', function(err, data){
        res.writeHead(200, {'Content-Type':'image/png'});
                
        res.write(data);
        res.end();
        })
});
server.listen(7878);

