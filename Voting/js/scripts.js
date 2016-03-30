

$(document).ready(function() {
  var over18 = parseInt(prompt("How old are you?"));

  if (over18 >= 18) {
    $('#voter').show();

  } else if (over18 === 17) {
    var justInTime = prompt('Will you be 18 in time for polling day? Yes or No');

    if (justInTime === "yes" || justInTime === "Yes" || justInTime === "YES") {
      $('#voter').show();

    } else {
      $('#minor').show();
    }
  } else {
      $('#minor').show();
  }
});
