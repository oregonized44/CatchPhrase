$('#play-button').click(function(event){
  event.preventDefault();
  team1 = new Team ($('#team1-input').val(), parseInt($('#team1-num').val()));
  team2 = new Team ($('#team2-input').val(), parseInt($('#team2-num').val()));
  playButtonClick();
});

$('#how-to-play').hide();

$("button#rulesButton").click(function() {
  $("#how-to-play").toggle();
});
