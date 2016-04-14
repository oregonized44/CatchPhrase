function Leaderboard() {
  this.cats = 2;
};

leaderboard = new Leaderboard;

Object.prototype.addToLeaderboard = function () {
  var winningTeamName = this.teamName.toLowerCase();
  var inLeaderBoard = false;
  for (var key in leaderboard) {
    if (winningTeamName === key) {
      leaderboard[key]++;
      inLeaderBoard = true;
    }
    if (!inLeaderBoard) {
      leaderboard[winningTeamName] = 1;
    }
  }
};
