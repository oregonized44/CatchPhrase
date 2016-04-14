var leaderboard = [
  {name: 'cats', value: 2}
];

function LeaderboardEntry(team) {
  this.name = team.teamName.toLowerCase();
  this.value = 1;
};


Object.prototype.addToLeaderboard = function () {
  var winningTeamName = this.teamName.toLowerCase();
  var inLeaderBoard = false;
  debugger;
  for (var i = 0; i < leaderboard.length; i++) {
    if (leaderboard[i].name === winningTeamName) {
      leaderboard[i].value++;
      inLeaderBoard = true;
    }
  }
  if (!inLeaderBoard) {
    var Object = new LeaderboardEntry(this)
    leaderboard.push(Object);
  }
};
