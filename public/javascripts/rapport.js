$(function () {
  var socket = io();
  $('form').submit(function(){
   let vote = {
      lokal: $('#vallokal').val(),
      parti: $('#parti').val(),
      roster: $('#antalroster').val()
    }
   votes = JSON.stringify(vote);
   socket.emit('message', votes);
  
    $('#parti').val('');
    $('#antalroster').val('');
    $('#vallokal').val('');
    return false;
  });
});


