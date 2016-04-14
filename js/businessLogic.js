var wordList = ['earth','eclipse','astronaut','black hole','galaxy','comet','binary','dwarf planet','mars','half moon','vacuum','hydrogen','eclpise','gravity','x-ray','rocket','spaceship','zodiac sign','milky way','organs','immune system','muscle','circulatory system','nipple','radius','uterus','clavicle','mandible','larynx','capillary','dark matter','alarm clock', 'money', 'sunburn', 'batteries', 'beer', 'headache', 'peanut butter', 'Internet', 'bicycle', 'YouTube', 'smog', 'baseball', 'Catch Phrase', 'mini golf', 'prize', 'smart phone', 'Google', 'GitHub', 'Neko Atsume', 'puppet', 'monster', 'Halloween', 'apple', 'Wi-Fi', 'peppers', 'tuna', 'aquarium', 'downtown', 'asteroid', 'Starbucks', 'movie', 'pet', 'popcorn', 'bus stop', 'toilet brush', 'breakfast burrito', 'maple syrup', 'Canadian dollar', 'Pokemon', 'blue', 'beach vollyball', 'zombie', 'wool hat', 'knitted mittens', 'love seat', 'pineapple', 'whale shark', 'ice cream', 'business suit', 'root beer', 'balcony', 'apple pie', 'hockey stick', 'Ireland', 'aloe plant', 'facebook', 'bluetooth', 'hot chocolate', 'potato chip', 'permanent marker', 'football', 'light bulb', 'Harry Potter', 'Spider-man', 'Berlin wall', 'sunglasses', 'cherry tree', 'roller skates', 'sweater', 'flip-flops', 'train station'];
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
  this.roundNumber = 1;
  this.roundDuration = roundDuration;
  this.timer = roundDuration;
}

//METHODS

Object.prototype.won = function () {
  this.score++;
}

Object.prototype.nextPlayer = function () {
  if (this.activePlayer === game.maxRounds) {
    this.activePlayer = 1;
  } else  {
    this.activePlayer ++;
  }
}

Storage.prototype.setObject = function (key, object) {
  this.setItem(key, JSON.stringify(object))
}

Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
}

//FUNCTINOS

function cacheData() {      //caches game object, team objects, and wordList in sessionStorage.
  sessionStorage.setObject('game', game);
  sessionStorage.setObject('team1', team1);
  sessionStorage.setObject('team2', team2);
  sessionStorage.setObject('wordList', wordList)
};

function getCachedData() {      // //retrieves game object, team objects, and wordList from sessionStorage.
  game = sessionStorage.getObject('game');
  team1 = sessionStorage.getObject('team1');
  team2 = sessionStorage.getObject('team2');
  wordList = sessionStorage.getObject('wordList');
};

function nextTurn(){      //Runs at the end of each turn. Switches activeTeam and iterates activePlayer.
  if (game.activeTeam === 1) {
    team1.nextPlayer();
    game.activeTeam = 2;
  } else if (game.activeTeam === 2) {
    team2.nextPlayer();
    game.activeTeam = 1;
  }
}

function newWord() {      //returns and removes word selected at random from wordList
  var i = Math.floor(Math.random() * wordList.length);
  var word = wordList[i];
  wordList.splice(i,1);
  return word;
}

function checkWinner() {
  if (game.activeTeam === 1) {                // if the active team is team 1 then the
    team2.won();
    nextTurn();
    console.log("team 2 won");                            // team 2 is awarded a point
  } else if (game.activeTeam === 2){          // else if the active team is 2 then the
    team1.won();
    nextTurn();
    console.log("team1 wins");                          // team 1 is awarded the point
  }
  team1.nextPlayer();
  console.log("team1nextplayer");                       //
  team2.nextPlayer();
  console.log("team2nextplayer");
}

function changeGameplayColors() {

};

function timerExpires () {
  if (game.roundNumber === game.maxRounds) {
    checkWinner();   // checks to see if the current round number is equal to the max number of rounds
    cacheData();                             // retrieves the game object, team objects, and wordList from sessionStorage
    window.location.href = 'end-game.html';     // sends you to the end game page
  } else {
    game.roundNumber++;
    console.log("game.roundNumber");
    checkWinner();                      // else game round number increments by 1
    cacheData();                                // // retrieves the game object, team objects, and wordList from sessionStorage
    window.location.href = 'round-over.html';   //navigate to reoundover page
  }
};

function gamePlayOnLoad() {
  getCachedData();
  //starttimer;
  //display(newWord);
}

function roundOverOnLoad() {
  getCachedData();
  var audio = new Audio('scream.mp3');
  audio.play();
}

function endGameOnLoad() {
  getCachedData();
  var audio = new Audio('scream.mp3');
  audio.play();
}

function nextWordButtonOnClick() {
  nextTurn();
}

function nextRoundButtonClick (){     //what happens when next round take place
  window.location.href = 'game-play.html';
}

function playButtonClick(){          // play button on click willlllll
  var maxPlayers;
  if (team1.numberOfPlayers > team2.numberOfPlayers) {
    maxPlayers = team1.numberOfPlayers;
  } else if (team2.numberOfPlayers > team1.numberOfPlayers) {
    maxPlayers = team2.numberOfPlayers;
  } else if (team1.numberOfPlayers === team2.numberOfPlayers) {
    maxPlayers = team1.numberOfPlayers;
  }
  game = new Game (maxPlayers, 120);
  cacheData();    //store objects in sessionStorage
  window.location.href = 'game-play.html';
}

function resetButtonClick(){
  window.location.href = 'index.html';
}

function replayButtonClick(){
  //reset scores, timer, and roundNumber
  team1.score = 0;
  team2.score = 0;
  game.timer = game.roundDuration;
  game.roundNumber = 1;
  cacheData();
  window.location.href = 'game-play.html';
}
