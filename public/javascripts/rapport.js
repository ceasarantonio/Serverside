$(function () {
  var socket = io();
  $('form').submit(function(){
   let vote = {
      lokal: $('#vallokal').val(),
      parti: $('#parti').val(),
      roster: $('#antalroster').val()
    }
   socket.emit('message', vote);
  return false;
    /*$('#parti').val('');
    $('#roster').val('');
    $('#lokal').val('');*/
  });
});


