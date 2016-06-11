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
"<!-- Latest compiled and minified CSS -->" +
'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">' +

   " <!-- Optional theme -->" +
'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">'+

  "  <!-- Latest compiled and minified JavaScript -->" +
'<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>' +
"</head>" +
"<body>" +
    '<div class="container">' +
    '<div class="row">' +
    '<div class="col-md-offset-4 col-md-4">' +
'<h1>Node JS login form</h1>'+
'<div class="col-md-4">' +
 "User Name" +
     '</div>' +
'<div class="col-md-offset-2 col-md-4">' +
'<input type="text"/>' +
'</div>' +
    "<br>" +
'<div class="col-md-4">' +
"Password" +
'</div>' +
'<div class="col-md-offset-2 col-md-4">' +
'<input type="password"/>' +
'</div>' +
    "<br>" +
'<div class="col-md-offset-1 col-md-2">' +
"<button>" +
"login" +
"</button>" +
'</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
"</body>"+
"</html>"
);
res.end()

})

server.listen(8080)


