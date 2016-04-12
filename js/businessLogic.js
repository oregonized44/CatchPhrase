var wordList = ["dog", "cat", "Parot", "Horse","Song","Loud","Lazy"];

//CONSTRUCTORS

function Team(name, players){    // contstructs our team object
  this.teamName = name;
  this.numberOfPlayers = players;
  this.score = 0;
  this.activePlayer = 1;
}

function Game(maxRounds, roundLength){       // constructs our game object
  this.maxRounds = maxRounds;
  this.activeTeam = 1;
  this.roundNumber = 0;
  this.timer = roundLength;
}

//METHODS

Team.prototype.won = function () {
  this.score++;
}

Team.prototype.nextPlayer = function () {
  if (this.activePlayer === game.maxRounds) {
    this.activePlayer = 0;
  }
  this.activePlayer ++;
}

//FUNCTINOS

function nextTurn(){
  if (game.activeTeam === 1) {
    game.activeTeam = 2;
  } else if (game.activeTeam === 2) {
    game.activeTeam = 1;
  }
  //display(newWord());
}

function play(){     // play button on click willlllll
  //capture inputs
  var team1 = new Team (team1Name, team1Players);
  var team2 = new Team (team2Name, team2Players);
  var maxPlayers;
  if (team1.numberOfPlayers > team2.numberOfPlayers) {
    maxPlayers = team1.numberOfPlayers;
  } else if (team2.numberOfPlayers > team1.numberOfPlayers) {
    maxPlayers = team2.numberOfPlayers;
  } else if (team1.numberOfPlayers === team2.numberOfPlayers) {
    maxPlayers = team1.numberOfPlayers;
  }
  var game = new Game (maxPlayers, 120);

  //data storage

  //display(gamePlay);
}

function newWord() {      //removes and displays word selected at random from wordList
  var i = Math.floor(Math.random() * wordList.length);
  var word = wordList[i];
  wordList.splice(i,1);
  return word;
}

function nextRound(){  //what happens when next round take place
  if (game.roundNumber === game.maxRounds) {
    endGame();
  } else {
    game.roundNumber++;
    //reset timer function
    if (game.activeTeam === 1) {
      team2.won();
    } else if (game.activeTeam === 2){
      team1.won();
    }
    team1.nextPlayer();
    team2.nextPlayer();
  }
}

function endGame(){   //what happens when game is over
  display(endGamePage);
}

function reset(){
 //display(titlePage);
}

function replay(){
  //display(gamePlayPage);
}
