var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
   /* res.writeHead(200,{"content-type":"text/html; charset=utf-8"});
    fs.ReadStream("singlepage.html").pipe(res);*/
}).listen(1234);