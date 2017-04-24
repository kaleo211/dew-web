var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./routes');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);
app.use(express.static(__dirname + '/public'));


var server = app.listen(process.env.PORT, function () {
  console.log('Beulah is listening on port ', process.env.PORT);
});

module.exports = server;