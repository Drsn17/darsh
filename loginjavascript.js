var http=require('http')
var server=http.createServer(function(req,res)
                            {
    res.writeHead(200,{"contentType":"text/html"})
   res.write(
       <form method="post">
   "User Name<input type="text">"+
       "Password<input type="password">"+
       "<button>Button</button>"
       </form>
   )
   res.end()
    
})

server.listen(8080)