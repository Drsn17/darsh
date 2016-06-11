var http = require('http');
var url = require('url');
var server = http.createServer(function(req,res)
{
    var page = url.parse(req.url).pathname;
    res.writeHead(200,{"contentType":"text/html"})
        if(page=='/login')
        {
        res.write("login succesfull")

        }
        else if(page=='/signup')
        {
            res.write("create an account")
        }
    else
        {
            res.write("not connceted")
        }
    res.end();

})

server.listen(8080)
