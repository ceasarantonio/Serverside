$(function () {
  var socket = io();
  socket.on('message', function(vote){
    console.log(vote);
    voteObject = JSON.parse(vote);
      $('#votes').append($('<li>').text( ` Vallokal: ${voteObject.lokal}, Parti: ${voteObject.parti},  Antalet röster: ${voteObject.roster}`));     
  });
});