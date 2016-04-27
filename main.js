
var $waldo = $('div');

$(document).mousemove(function(e){
  var x = e.pageX;
  var y = e.pageY;
  // console.error("x: " + x + " y: " + y);
  var path = 'circle(10% at ' + x + 'px ' + y + 'px)';

  window.pathpath = path;
  $waldo.css({
    '-webkit-clip-path': path,
    'clip-path': path
  });
});

$(document).dblclick(function(e){
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  if(mouseX > 1650 && mouseX < 1690 && mouseY > 215 && mouseY < 290) {
    $('body').css("background", "#FFEC8B");
    alert("You find the Waldo!!!");
  } else{
    $('body').css("background", "#B0E2FF");
    alert("Really?! That's your Waldo!!!!");
  }
});


