var http = require("http");

function handle(req, res) {
  res.writeHead(200);
  res.end("Hello Node.js Server!");
}

http.createServer(handle).listen(process.env.PORT || 3000);

console.log("server is working");
