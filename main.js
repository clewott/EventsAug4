$(document).ready(function() {

  $(window).load(function() {

    console.log("This is my first event!");

  });

  //1

  $("h1").on("click", function(){

    $(this).css("font-size", "6em");
    $(this).css("background-color", "grey")

    console.log("Changing the h1");

  });

  //End of h1 - 2 & 3

  $(".square").on("mouseover", function() {

    $(this).css("background-color", "red")

    console.log("Mouseover square.");

  })
  .on("mouseout", function() {

    $(this).css("background-color", "blue")

    console.log("Mouseout of the square.");

  });

  //End of square - 4 & 5

  $(".circle").on("dblclick", function() {

    $(this).css("border-radius", "0%")

    console.log("Double clicking on the circle.");

  });

  //End of circle - 6

  $(".box1").on("mousedown", function() {

    $(this).prepend("<span>Mouse down.</span>")

    console.log("Mousedown");

  })
  $(".box1").on("mouseup", function() {

    $(this).after("<span>Mouse Up!</span>")

    console.log("Mouseup")

  });

  //End of box1 - 7, 8, 9 & 10

  $(".box2").on("mouseenter", function() {

    $(this).slideToggle();
    $(this).slideToggle();

  });

  //End of box2 - 11 & 12

  $(".box3").on("mousemove", function() {

    $(this).text("You are moving the mouse!");

  });

  //End of box3 - 13 & 14

  $(".box4").hide().fadeIn(2000);
  $(".box4").on("click", function() {

    $(this).fadeOut("2000");

  });


  //End of box4 - 15, 16, & 17

  $(".box5").on("click", function() {

    $(this).toggle();

  });

  //End of box5 - 18

  $(".box6").on("click", function() {

    $(this).slideUp("10000");
    $(this).slideDown("10000");

  });

  //End of box6 - 19 & 20

  $( document ).on("mousemove", function(event) {

    $(".box7").text( "pageX: " + event.pageX + ", pageY: " + event.pageY );

  });

  //End of box7 - 21 & 22

  $( "button" ).click(function( event ) {
    return "This is a button!";
  });
  $( "button" ).click(function( event ) {
  $( "p" ).html( event.result );
  });

  //End of box8 - 23, 24 & 25

  var last = "";
  var diff = "";

  $(".box9").click(function( event ) {
  if ( last ) {
    diff = event.timeStamp - last;
    $(".box9").append( "time since last event: " + diff + "<br>" );
    } else {
    $(".box9").append( "" );
  }
  last = event.timeStamp;
  });

  //End of box9 - 26, 27, 28 & 29

  $(".box10").on('click', function() {
    $(this).animate({
      opacity: 0.5,
    }, 200
    );
  });

  //End og box10 - 30

});
