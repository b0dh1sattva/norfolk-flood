var http=require("http"),port=process.env.PORT;http.createServer(function(e,t){t.writeHead(200,{"Content-Type":"text/plain"}),t.end("Hello World\n")}).listen(port),console.log("Server running on Heroku at port: "+port);