gamePlayOnLoad();
$('#phrase-display').text(newWord());

$('#next-word').click(function(){
  nextTurn();
  $('#phrase-display').text(newWord());
});
