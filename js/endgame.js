endGameOnLoad();
if (team1.score > team2.score) {
  $('#winning-team').text(team1.teamName);
} else if (team2.score > team1.score) {
  $('#winning-team').text(team2.teamName);
} else {
  $('#winning-team').text("It's a tie!");
}
$('#replay-game').click(function(){
  replayButtonClick();
});
$('#reset-game').click(function(){
  resetButtonClick();
});
