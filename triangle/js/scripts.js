$(document).ready(function() {
  $("form#date").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var phone = $("select#phone").val();

    if (age >= 1 && age <=40 && gender === 'female' && phone === "apple") {
      $("#celeb").empty().append("Ben Affleck");
      $("#bae").show();
    } else if (age >= 40 && gender === 'female' && phone === "apple") {
      $("#celeb").empty().append("John Legend");
      $("#bae").show();
    } else if (age >= 1 && age <=40 && gender === 'female' && phone === "android") {
      $("#celeb").empty().append("Sting");
      $("#bae").show();
    } else if (age >= 40 && gender === 'female' && phone === "android") {
      $("#celeb").empty().append("Denzel Washington");
      $("#bae").show();
    } else if (age >= 1 && age <=40 && gender === 'male' && phone === "apple") {
      $("#celeb").empty().append("Taylor Swift");
      $("#bae").show();
    } else if (age >= 40 && gender === 'male' && phone === "apple") {
      $("#celeb").empty().append("Madonna");
      $("#bae").show();
    } else if (age >= 1 && age <=40 && gender === 'male' && phone === "android") {
      $("#celeb").empty().append("Rihanna");
      $("#bae").show();
    } else if (age >= 40 && gender === 'male' && phone === "android") {
      $("#celeb").empty().append("Jennifer Lopez");
      $("#bae").show();
    }
    event.preventDefault();
  });
});
