$(function () {
var socket = io();
socket.on('message', function(vote){
  console.log(vote);
      $('#votes').html("<p>" + vote.lokal);
      /*$('#antalroster').append($('<li>').text(vote.roster));
      $('#parti').append($('<li>').text(vote.parti));*/
  });
});