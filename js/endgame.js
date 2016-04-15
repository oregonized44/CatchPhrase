//Function to calculate current score as a percentage of total possible points
function calculateScorePercentage(team){
  var scorePercentage = (team.score / game.maxRounds) * 100;
  return 'width: ' + scorePercentage + '%';
};

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

$('#team1-progress-bar').attr('style', calculateScorePercentage(team1));
$('#team2-progress-bar').attr('style', calculateScorePercentage(team2));
$('#team1-score').text(team1.score);
$('#team2-score').text(team2.score);
$('#team1-name').text(team1.teamName);
$('#team2-name').text(team2.teamName);
