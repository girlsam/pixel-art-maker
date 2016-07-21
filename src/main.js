$(document).ready(function() {
  console.log('sanity check');
  for (var i=0; i < 5000; i++) {
    $('body').append("<div class='square-box'></div>");
  }
  var color;
  $(".selection").click(function () {
      color = $(this).css("background-color");
      $('#currentColor').css("background-color", color);
  });
  // $('.square-box').hover(function() {
  //   $(this).css('background-color', color);
  // });
  var isDown = false;   // Tracks status of mouse button
  $('.square-box').mousedown(function() {
      isDown = true; // When mouse goes down, set isDown to true
    })
   $('.square-box').mouseup(function() {
      isDown = false;    // When mouse goes up, set isDown to false
    });

   $('.square-box').mouseover(function() {
     if(isDown) {        // Only change css if mouse is down
        $(this).css('background-color', color)
     }
    });

  // $('.square-box').on('mouseover', function(){
  //   $(this).css('background-color', 'red');
  // });
});
