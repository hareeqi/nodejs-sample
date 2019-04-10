var app = require("express")();

app.get("/", function(req, res) {
  res.send("Sample Node.js App");
});

app.listen(process.env.PORT || 3000);
