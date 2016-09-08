var express = require('express');
var app = express();
var lp = process.env.PORT || 8080;

app.get('/', function (req, res) {
  var osreg = /[^\(]*\(([^\)]*)\)?/;
  var langreg = /([^,]*)/;
  var retobj = {
    "ipaddress":req.headers['x-forwarded-for'] || req.connection.remoteAddress
    ,"language":langreg.exec(req.headers["accept-language"])[1]
    ,"software":osreg.exec(req.headers["user-agent"])[1]
  };
  res.json(retobj);
});

app.listen(lp, function () {
    console.log('Example app listening on port '+lp+'!');
});