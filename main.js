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

    $(this).append("<span>Mouse down.</span>")

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

  $(".box4").on("click", function() {

    $(this).fadeOut("2000");
    $(this).fadeIn("3000");

  });

  //End of box4 - 15 & 16

  $(".box5").on("click", function() {

    $(this).toggle();

  });

  //End of box5 - 17
});
