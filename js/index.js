//Click listener for the play button
$('#play-button').click(function(event){
  teamPlayersOne =  [$("input#teamOnePersonOne").val(),$("input#teamOnePersonTwo").val(),$("input#teamOnePersonThree").val(),$("input#teamOnePersonFour").val(),$("input#teamOnePersonFive").val()]; //capture player names for team1
  teamPlayersTwo = [$("input#teamTwoPersonOne").val(),$("input#teamTwoPersonTwo").val(),$("input#teamTwoPersonThree").val(),$("input#teamTwoPersonFour").val(),$("input#teamTwoPersonFive").val()]; //capture player names for team2
  team1 = new Team ($('#team1-input').val(), parseInt($('#team1-num').val()),teamPlayersOne); //Capture input and call Team constructor for team1
  team2 = new Team ($('#team2-input').val(), parseInt($('#team2-num').val()),teamPlayersTwo); //Catpture input and call Team constructor for team2
  playButtonClick(); //Function to run on play button click; definted in businesslogic.js
});

$("#unhide-players-one").click(function(event){ //Click listener for team1 player names button
  event.preventDefault();
  var teamOneInputFeilds = ["<input id='teamOnePersonOne' type='text' placeholder='Player One'>","<input id='teamOnePersonTwo' placeholder='Player Two'>","<input id='teamOnePersonThree' placeholder='Player Three'>","<input id='teamOnePersonFour' placeholder='Player Four'>","<input id='teamOnePersonFive' placeholder='Player Five'>"]
    for(var i = 0, playerNumbers = $('#team1-num').val() - 1;  i <= playerNumbers; i++){
      $("ul#team1-num").append(teamOneInputFeilds[i]);
    }
  $("#unhide-players-one").hide(); //Hide clicked button
});
$("#unhide-players-two").click(function(event){ //Click listener for team2 player names button
  event.preventDefault();
  var teamTwoInputFeilds = ["<input id='teamTwoPersonOne' placeholder='Player One'>","<input id='teamTwoPersonTwo' placeholder='Player Two'>","<input id='teamTwoPersonThree' placeholder='Player Three'>","<input id='teamTwoPersonFour' placeholder='Player Four'>","<input id='teamTwoPersonFive' placeholder='Player Five'>"]
    for(var i = 0, playerNumbers = $('#team2-num').val() - 1;  i <= playerNumbers; i++){
      $("ul#team2-num").append(teamTwoInputFeilds[i]);
    }
    $("#unhide-players-two").hide(); //Hide click button
});
