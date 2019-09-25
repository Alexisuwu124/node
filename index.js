var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('OwO');
});

app.listen(3000, function () {
  console.log('El servidor esta corriendo...');
});