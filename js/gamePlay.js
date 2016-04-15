function updateActiveTeamAndPlayerDisplay () {
  if (game.activeTeam === 1) {
    $('#change-color').removeClass('team2');
    $('#change-color').addClass('team1');
    if (team1.teamMates[0] === null) {
      $('#active-team').text(team1.teamName)
      $('#active-player').text('Player ' + team1.activePlayer);
    } else {
      $('#active-team').empty()
      var activePlayerIndex = team1.activePlayer - 1;
      console.log(activePlayerIndex);
      $('#active-player').text(team1.teamMates[activePlayerIndex]);
    }
  } else if (game.activeTeam === 2) {
    $('#change-color').removeClass('team1');
    $('#change-color').addClass('team2');
    if (team2.teamMates[0] === null) {
      $('#active-team').text(team2.teamName)
      $('#active-player').text('Player ' + team2.activePlayer);
    } else {
      $('#active-team').empty()
      var activePlayerIndex = team2.activePlayer - 1;
      console.log(activePlayerIndex);
      $('#active-player').text(team2.teamMates[activePlayerIndex]);
    }
  }
  $('#team1-name').text(team1.teamName);
  $('#team2-name').text(team2.teamName);
};

function calculateScorePercentage(team){
  var scorePercentage = (team.score / game.maxRounds) * 100;
  console.log(scorePercentage);
  return 'width: ' + scorePercentage + '%';
};



//countdown timer
gamePlayOnLoad();
updateActiveTeamAndPlayerDisplay();
$('#team1-progress-bar').attr('style', calculateScorePercentage(team1));
$('#team2-progress-bar').attr('style', calculateScorePercentage(team2));
$('#team1-score').text(team1.score);
$('#team2-score').text(team2.score);
$('#phrase-display').text(newWord());
$('#round-num').text(game.roundNumber);
$('#timer-display').text("2:00");
$('#next-word').click(function(){
  nextWordButtonOnClick();
  $('#phrase-display').text(newWord());
  updateActiveTeamAndPlayerDisplay();
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  function updateClock() {
    var t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
      timerExpires();

    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 100 * 1000);
initializeClock('clockdiv', deadline);
//end countdown timer
