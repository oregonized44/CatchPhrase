gamePlayOnLoad();

$('#next-word').click(function(){
  nextTurn();
  $('#phrase-display').text(newWord());
});
