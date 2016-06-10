var http=require('http')
var server=http.createServer(function(req,res)
{
res.writeHead(200,{"contentType":"text/html"})
res.write(
"<!DOCTYPE html>" +
" <html>" +
" <head>" +
'<meta charset="utf-8">' +
"<title> LOGIN </title>" +
"</head>" +
"<body>" +
'<h1>Node JS login form</h1>'+
 "User Name" +
'<input type="text"/>' +
"Password" +
'<input type="password"/>' +
"<button>" +
"Button" +
"</button>" +
"</body>"+
"</html>"
);
res.end()

})

server.listen(8080)


