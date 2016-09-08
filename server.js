var express = require('express');
var app = express();
var lp = process.env.PORT || 8080;

app.get('/', function (req, res) {
  var reg = /[^\(]*(\([^\)*]\))[.*]/;
  var os= reg.exec(req.headers["user-agent"])[1];
  var retobj = {
    "ipaddress":req.headers['x-forwarded-for'] || req.connection.remoteAddress
    ,"langage":req.headers["accept-language"]
    ,"software":os
  };
  res.json(req.headers["user-agent"]);
});

app.listen(lp, function () {
    console.log('Example app listening on port '+lp+'!');
});