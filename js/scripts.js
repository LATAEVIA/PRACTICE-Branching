$(document).ready(function() {
  $("form").submit(function(event){
    var coffeeInput = $("input:radio[name=coffee]:checked").val();
    var zombieInput = $("input:radio[name=zombie]:checked").val();
    var annoyInput = $("input:radio[name=annoy]:checked").val();
    var lrcInput = $("input:radio[name=lrc]:checked").val();
    var collabInput = $("input:radio[name=collab]:checked").val();
    // coffee
    if (coffeeInput==="blackcoffee"){
      $(".cold-hide").fadeIn();
      $(".machu-hide").hide();
      $(".warm-hide").hide();
    };
    if (coffeeInput==="cream"){
      $(".warm-hide").fadeIn();
      $(".cold-hide").hide();
      $(".machu-hide").hide();
    };
    if (coffeeInput==="sugar"){
      $(".machu-hide").fadeIn();
      $(".cold-hide").hide();
      $(".warm-hide").hide();
    };
    // // zombie
    // if (zombieInput==="food"){
    //   $(".cold-hide").fadeIn();
    //   $(".machu-hide").hide();
    //   $(".warm-hide").hide();
    // };
    // if (zombieInput==="water"){
    //   $(".machu-hide").fadeIn();
    //   $(".cold-hide").hide();
    //   $(".warm-hide").hide();
    // };
    // if (zombieInput==="katana"){
    //   $(".warm-hide").fadeIn();
    //   $(".cold-hide").hide();
    //   $(".machu-hide").hide();
    // };
    // annoy
//     if (annoyInput==="hipsters"){
//       $(".warm-hide").fadeIn();
//       $(".cold-hide").hide();
//       $(".machu-hide").hide();
//     };
//     if (annoyInput==="nails"){
//       $(".cold-hide").fadeIn();
//       $(".machu-hide").hide();
//       $(".warm-hide").hide();
//     };
//     if (annoyInput==="heat"){
//       $(".machu-hide").fadeIn();
//       $(".cold-hide").hide();
//       $(".warm-hide").hide();
//     };
//     // lrc
//     if (lrcInput==="left"){
//       $(".warm-hide").fadeIn();
//       $(".cold-hide").hide();
//       $(".machu-hide").hide();
//     };
//     if (lrcInput==="right"){
//       $(".cold-hide").fadeIn();
//       $(".machu-hide").hide();
//       $(".warm-hide").hide();
//     };
//     if (lrcInput==="ambi"){
//       $(".machu-hide").fadeIn();
//       $(".cold-hide").hide();
//       $(".warm-hide").hide();
//     };
//     // collab
//     if (collabInput==="elton"){
//       $(".machu-hide").fadeIn();
//       $(".cold-hide").hide();
//       $(".warm-hide").hide();
//     };
//     if (collabInput==="nas"){
//       $(".warm-hide").fadeIn();
//       $(".cold-hide").hide();
//       $(".machu-hide").hide();
//     };
//     if (collabInput==="lotus"){
//       $(".cold-hide").fadeIn();
//       $(".machu-hide").hide();
//       $(".warm-hide").hide();
//     };
//     $("html, body").animate({ scrollTop: $(document).height() }, "slow");
//     return false;
//     });
//     event.preventDefault();
//   });
//
//
//     // } else if (coffeeInput==="cream" && zombieInput==="water" && annoyInput==="hipsters" && lrcInput==="ambi" && collabInput==="elton"){
//     //   $(".warm-hide").show();
//
//
//     // if (coffeeInput==="cream" && zombieInput==="water"){
//     //   $(".machu-hide").show();
//     // };
//     // if (coffeeInput==="cream" && zombieInput==="water"){
//     //   $(".machu-hide").show();
//     // };
//     // if (coffeeInput==="cream" && zombieInput==="water"){
//     //   $(".machu-hide").show();
//     // };
//     // if (coffeeInput==="cream" && zombieInput==="water"){
//     //   $(".machu-hide").show();
//     // };
//     // if (coffeeInput==="cream" && zombieInput==="water"){
//     //   $(".machu-hide").show();
//     // };
//     // if (coffeeInput==="cream" && zombieInput==="water"){
//     //   $(".machu-hide").show();
//     // };
//     // if (coffeeInput==="cream" && zombieInput==="water"){
//     //   $(".machu-hide").show();
//     // };
//
// // if (coffeeInput==="Cream"){
// //   alert(coffeeInput);
// // } else{
// //   alert(zombieInput);
// // };
// // $this = $(this);
// // var value = $this.find('input:radio[name=zombie]:checked').val();
// // alert(value);
