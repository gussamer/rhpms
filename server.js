var express = require('express');
var app = express();
var lp = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.json(req.headers);
});

app.listen(lp, function () {
    console.log('Example app listening on port '+lp+'!');
});