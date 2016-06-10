var http=require('http')
var server=http.createServer(function(req,res)
                            {
    res.writeHead(200,{"contentType":"text/html"})
    res.end("<h1>heading code of HTML</h1>"+"<br>"+"<p>second line</p>")
    
})

server.listen(8080)