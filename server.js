var express = require('express'), useragent = require('express-useragent');
var app = express();
var lp = process.env.PORT || 8080;

app.get('/', function (req, res) {
  var ua = useragent.parse(req.headers["user-agent"]);
  var retobj = {
    "ipaddress":""
    ,"langage":req.headers["accept-language"]
    ,"software":req.headers['x-forwarded-for'] || req.connection.remoteAddress
  };
  res.json(ua);
});

app.listen(lp, function () {
    console.log('Example app listening on port '+lp+'!');
});