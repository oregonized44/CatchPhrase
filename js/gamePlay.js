function updateActiveTeamAndPlayerDisplay () {
  if (game.activeTeam === 1) {
    $('#change-color').removeClass('team2');
    $('#change-color').addClass('team1');
  } else if (game.activeTeam === 2) {
    $('#change-color').removeClass('team1');
    $('#change-color').addClass('team2');
  }
  $('#team1-name').text(team1.teamName);
  $('#team2-name').text(team2.teamName);
  $('#team1-active-player').text(team1.activePlayer);
  $('#team2-active-player').text(team2.activePlayer);
};



//countdown timer
gamePlayOnLoad();
updateActiveTeamAndPlayerDisplay();
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

var deadline = new Date(Date.parse(new Date()) + 1500 * 1000);
initializeClock('clockdiv', deadline);
//end countdown timer
