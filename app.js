var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
var pug = require('pug');

var resultat = require('./routes/resultat');
var resultatrapportering = require('./routes/resultatrapportering');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use(express.static(__dirname + '/public'));
app.use('/', resultat);
app.use('/resultatrapportering', resultatrapportering);
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


io.on('connection', function(socket){
  socket.on('message', function(vote){
    io.emit('message', vote);
  });
});





http.listen(3000);

module.exports = app;