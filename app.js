var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var server = http.Server(app);
var io = require('socket.io')(server);

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





server.listen(3000);

module.exports = app;