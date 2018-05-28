var path = require('path');
var express = require('express');
var compression = require('compression');

var app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 8080);

app.get('*', function(req, res) {
  res.redirect('/');
});
var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
