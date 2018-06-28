/*var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('Hello World!');
        res.end();
});
server.listen(4000);
*/
var http = require('http'),
    fs = require('fs'),
    url = require('url');

    http.createServer(function(req, res){
            var query = url.parse(req.url, true).query;
            pic = query.image;

            fs.readFile('/couple.jpg', + pic, function(err,content ){
                    if(err){
                        res.writeHead(400, {'Content-Type':'text/html'})
                        console.log(err);
                        res.end("No such Image");
                    }else{
                            res.writeHead(200, {'Content-Type':'image/jpg'});
                            res.end(content);
                    }
            });
    }).listen(5000);
    console.log("Server running at http://localhost:5000");
