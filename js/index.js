$('#play-button').click(function(event){
  event.preventDefault();
  teamPlayersOne = [$("input#teamOnePersonOne").val(),$("input#teamOnePersonTwo").val(),$("input#teamOnePersonThree").val(),$("input#teamOnePersonFour").val(),$("input#teamOnePersonFive").val()];
  teamPlayersTwo = [$("input#teamTwoPersonOne").val(),$("input#teamTwoPersonTwo").val(),$("input#teamTwoPersonThree").val(),$("input#teamTwoPersonFour").val(),$("input#teamTwoPersonFive").val()];
  console.log(teamPlayersOne);
  team1 = new Team ($('#team1-input').val(), parseInt($('#team1-num').val()),teamPlayersOne);
  team2 = new Team ($('#team2-input').val(), parseInt($('#team2-num').val()),teamPlayersTwo);
  console.log(team1);
  console.log(team2);
  alert($("input#teamOnePersonOne").val());
  alert($("input#teamTwoPersonTwo").val());
  alert($("input#teamOnePersonTwo").val());
  alert($("input#teamTwoPersonTwo").val());


  playButtonClick();
});

$("#unhide-players-one").click(function(event){ //
  event.preventDefault();
  var teamOneInputFeilds = ["<input id='teamOnePersonOne' type='text' placeholder='Player One'>","<input id='teamOnePersonTwo' placeholder='Player Two'>","<input id='teamOnePersonThree' placeholder='Player Three'>","<input id='teamOnePersonFour' placeholder='Player Four'>","<input id='teamOnePersonFive' placeholder='Player Five'>"]
    for(var i = 0, playerNumbers = $('#team1-num').val() - 1;  i <= playerNumbers; i++){
      $("ul#team1-num").append(teamOneInputFeilds[i]);
    }
  $("#unhide-players-one").hide();
});
$("#unhide-players-two").click(function(event){
  event.preventDefault();
  var teamTwoInputFeilds = ["<input id='teamTwoPersonOne' placeholder='Player One'>","<input id='teamTwoPersonTwo' placeholder='Player Two'>","<input id='teamTwoPersonThree' placeholder='Player Three'>","<input id='teamTwoPersonFour' placeholder='Player Four'>","<input id='teamTwoPersonFive' placeholder='Player Five'>"]
    for(var i = 0, playerNumbers = $('#team2-num').val() - 1;  i <= playerNumbers; i++){
      $("ul#team2-num").append(teamTwoInputFeilds[i]);
    }
    $("#unhide-players-two").hide();
});
$('#how-to-play').hide();

$("button#rulesButton").click(function() {
  $("#how-to-play").toggle();
});
