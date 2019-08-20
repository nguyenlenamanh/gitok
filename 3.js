var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    if(req.url != '/favicon.ico'){
        console.log(req.url);
    }
    fs.readFile(__dirname + "/singlepage.html","utf-8",function(err,content){
        if(err){
            console.log(err);
        }else{
            res.writeHead(200,{"content-type":"text/html"});
            res.write(content);
            res.end();
        }
    })
}).listen(3000);
