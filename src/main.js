$(document).ready(function() {
for (var i=0; i < 1239; i++) {
  $('.canvas').append("<div class='square-box'></div>");
}
var color;
$(".selection").click(function () {
    color = $(this).css("background-color");
    $('#currentColor').css("background-color", color);
  });
var isDown = false;
$('.square-box').mousedown(function() {
    isDown = true;
$('.square-box').mouseup(function() {
    isDown = false;
  });
$('.square-box').mouseover(function() {
    if(isDown) {
      $(this).css('background-color', color);
    }
  });
});
});
