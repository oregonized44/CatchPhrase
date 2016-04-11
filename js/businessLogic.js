var wordList = ["dog", "cat", "Parot", "Horse","Song","Loud","Lazy"];




function Team(name,playerNumbers){    // contstructs our team object
this.teamName = name;
this.players = playerNumbers;
this.score = 0;
this.activePlayer = 1;
}

function Game(){       // constructs our game object
this.activeTeam = 1;
}

Team.prototype.won = function(){
  this.score++;
}

function nextTurn(){
  if (game.activeTeam === 1) {
    game.activeTeam = 2;
  } else if (game.activeTeam === 2) {
    game.activeTeam = 1;
  }
}

function play(){     // play button on click willlllll
  set team name value to our name val in our constructor
  sets amount of players in our constructor
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
  if(game.activeTeam == 1){
    team2.score++;
  }else{
    team1.score++;

  }
team1.activePlayer++;
team2.activePlayer++;
}
function over(){   //what happens when game is over
playerNumber === rounds ?   true (game is over) alert(winner) display last page    : false(nextRound());
is the numer of players.length array equal to the number of rounds?


}
function reset(){
 reloads page or sends you back to the main page

}
function replay(){
  send back to the second page


}
