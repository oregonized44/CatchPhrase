var wordList = ["dog", "cat", "Parot", "Horse","Song","Loud","Lazy"];

function Team(name,players){    // contstructs our team object
  this.teamName = name;
  this.players = players;
  this.score = 0;
  this.activePlayer = 1;
}

function Game(maxRounds){       // constructs our game object
  this.maxRounds = maxRounds;
  this.activeTeam = 1;
  this.roundNumber = 0;
}

Team.prototype.won = function () {
  this.score++;
}

Team.prototype.nextPlayer => function () {
  if (this.activePlayer === game.maxRounds) {
    this.activePlayer = 0;
  }
  this.activePlayer ++;
}

function nextTurn(){
  if (game.activeTeam === 1) {
    game.activeTeam = 2;
  } else if (game.activeTeam === 2) {
    game.activeTeam = 1;
  }
}

function play(){     // play button on click willlllll
  capture inputs
  var team1 = new Team (team1Name, team1Players);
  var team2 = new Team (team2Name, team2Players);
  var maxPlayers;
  if (team1.players > team2.players) {
    maxPlayers = team1.players;
  } else if (team2.players > team1.players) {
    maxPlayers = team2.players;
  } else if (team1.players === team2.players) {
    maxPlayers = team1.players;
  }
  var game = new Game (maxPlayers);
  loads following page
}

function newWord() {      //removes and displays word selected at random from wordList
  var i = Math.floor(Math.random() * wordList.length);
  var word = wordList[i];
  wordList.splice(i,1);
  return word;
}

function pass(){      //what happens when we click pass
  display(newWord());
  nextTurn();
}

function nextRound(){  //what happens when next round take place
  game.roundNumber++;
  reset timer function
  if (game.activeTeam == 1) {
    team2.won();
  } else if {
    team1.won();
  }
  team1.nextPlayer();
  team2.nextPlayer();
}
function over(){   //what happens when game is over
playerNumber === rounds ?   true (game is over) alert(winner) display last page    : false(nextRound());
is the numer of players.length array equal to the number of rounds?


}
function reset(){
 display main page

}
function replay(){
  send back to the ready page


}
