var fs = require('fs');

function renderPage(res,filename){
    res.writeHead(200,{"content-type":"text/html;charset:utf-8"});
    fs.ReadStream(filename).pipe(res);
}

var start = function(req,res){
    var path = req.url;

    switch(path){
        case '/':
            renderPage(res,'mainpage.html');
            break;
        case '/page2':
            renderPage(res,'second-page.html');
            break;
        default:
            renderPage(res,'error.html');
    }
}

module.exports.start = start;