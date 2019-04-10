var http = require("http");

function handle(request, response) {
  response.end("Hello Node.js Server!");
}

http.createServer(handle).listen(process.env.PORT || 8081);
