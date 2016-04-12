var word-bank: ["alarm clock", "money", "sunburn", "batteries", "beer", "headache", "peanut butter",
"Internet", "bicycle", "YouTube", "smog", "baseball", "Catch Phrase", "mini golf", "prize", "smart phone",
"Google", "GitHub", "Neko Atsume", "puppet", "monster", "Halloween", "apple", "Wi-Fi", "peppers", "tuna",
 "aquarium", "downtown", "asteroid", "Starbucks", "movie", "pet", "popcorn", "bus stop", "toilet brush",
"breakfast burrito", "mapel syrup", "Canadian dollar", "Pokemon", "blue", "beach vollyball", "zombie",
"wool hat", "knitted mittens"]
var team1 = {};
var team2 = {};
var game = {};

//CONSTRUCTORS

function Team(name, players){    // contstructs our team object
  this.teamName = name;
  this.numberOfPlayers = players;
  this.score = 0;
  this.activePlayer = 1;
}

function Game(maxRounds, roundDuration){       // constructs our game object
  this.maxRounds = maxRounds;
  this.activeTeam = 1;
  this.roundNumber = 0;
  this.roundDuration = roundDuration;
  this.timer = roundDuration;
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

Storage.prototype.setObject = function (key, object) {
  this.setItem(key, JSON.stringify(object))
}

Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
}

//FUNCTINOS

function cacheData() {      //caches game object, team objects, and wordList in sessionStorage.
  sessionStorage.setObject(game, game);
  sessionStorage.setObject(team1, team1);
  sessionStorage.setObject(team2, team2);
  sessionStorage.setObject(wordList, wordList)
};

function getCachedData() {      // //retrieves game object, team objects, and wordList from sessionStorage.
  game = sessionStorage.getObject(game);
  team1 = sessionStorage.getObject(team1);
  team2 = sessionStorage.getObject(team2);
  wordList = sessionStorage.getObject(wordList);
};

function nextTurn(){      //Runs at the end of each turn. Switches activeTeam and displays new word.
  if (game.activeTeam === 1) {
    game.activeTeam = 2;
  } else if (game.activeTeam === 2) {
    game.activeTeam = 1;
  }
  //display(newWord());
}

function newWord() {      //returns and removes word selected at random from wordList
  var i = Math.floor(Math.random() * wordList.length);
  var word = wordList[i];
  wordList.splice(i,1);
  return word;
}

function timerExpires () {
  if (game.roundNumber === game.maxRounds) {
    cacheData();
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
    cacheData();
    window.location.href = 'roundover.html';   //navigate to reoundover page
  }
};

function endGame(){   //what happens when game is over
  window.location.href = 'endgame.html';
}

function gamePlayOnLoad() {
  getCachedData();
  //starttimer;
  //display(newWord);
}

function roundoverOnLoad() {
  getCachedData();
}

function endgameOnLoad() {
  getCachedData();
}

function nextRoundButtonClick (){     //what happens when next round take place
  window.location.href = 'gameplay.html';
}

function playButtonClick(){          // play button on click willlllll
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

  cacheData();    //store objects in sessionStorage

  window.location.href = 'gameplay.html';

}

function resetButtonClick(){
  window.location.href = 'gameplay.html';
}

function replayButtonClick(){
  //reset scores, timer, and roundNumber
  team1.score = 0;
  team2.score = 0;
  game.timer = game.roundDuration;
  game.roundNumber
  cacheData();
  window.location.href = 'gameplay.html';
  getCachedData();
}
