<<<<<<< HEAD

<<<<<<< HEAD
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  function updateClock() {
    var t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);

    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 120 * 1000);
initializeClock('clockdiv', deadline);
=======
$(document).ready(function() {
  $("button#rulesButton").click(function() {
    $("#how-to-play").toggle();
  });

});
>>>>>>> c264e6ddffbda517d565c681fa1aacf66060959d
=======
// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   return {
//     'total': t,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }
//
// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');
//   function updateClock() {
//     var t = getTimeRemaining(endtime);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//
//     }
//   }
//
//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }
//
// var deadline = new Date(Date.parse(new Date()) + 120 * 1000);
// initializeClock('clockdiv', deadline);
>>>>>>> de9d889fa2bd7426e43b03b3d8451371f46e5ddb
