$('#play-button').click(function(event){
  event.preventDefault();
  team1 = new Team ($('#team1-input').val(), parseInt($('#team1-num').val()));
  team2 = new Team ($('#team2-input').val(), parseInt($('#team2-num').val()));
  alert($("#personOne").val());
  alert($("#personTwo").val());
  alert($("#personThree").val());
  alert($("#personFour").val());
  alert($("#personFive").val());

  playButtonClick();
});

$("#unhide-players-one").click(function(event){ //
  event.preventDefault();
  var teamOneInputFeilds = ["<input id='personOne' placeholder='Your Name'>","<input id='personTwo' placeholder='Your Name'>","<input id='personThree' placeholder='Your Name'>","<input id='personFour' placeholder='Your Name'>","<input id='personFive' placeholder='Your Name'>"]
    for(var i = 0, playerNumbers = $('#team1-num').val() - 1;  i <= playerNumbers; i++){
      $("ul#team1-num").append(teamOneInputFeilds[i]);
    }
  $("#unhide-players-one").hide();
});
$("#unhide-players-two").click(function(event){
  event.preventDefault();
  var teamTwoInputFeilds = ["<input id='personOne' placeholder='Your Name'>","<input id='personTwo' placeholder='Your Name'>","<input id='personThree' placeholder='Your Name'>","<input id='personFour' placeholder='Your Name'>","<input id='personFive' placeholder='Your Name'>"]
    for(var i = 0, playerNumbers = $('#team2-num').val() - 1;  i <= playerNumbers; i++){
      $("ul#team2-num").append(teamTwoInputFeilds[i]);
    }
    $("#unhide-players-two").hide();
});
$('#how-to-play').hide();

$("button#rulesButton").click(function() {
  $("#how-to-play").toggle();
});
