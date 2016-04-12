gamePlayOnLoad();
$('#phrase-display').text(newWord());
$('#round-num').text(game.roundNumber);
$('#timer-display').text("2:00")
$('#next-word').click(function(){
  nextTurn();
  $('#phrase-display').text(newWord());
});
