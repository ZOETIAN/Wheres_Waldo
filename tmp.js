
var $waldo = $('div');

$(document).mousemove(function(e){
  var x = e.pageX;
  var y = e.pageY;

  var path = 'circle(20% at ' + x + 'px ' + y + 'px)';

  window.pathpath = path;
  $waldo.css({
    '-webkit-clip-path' : path,
    'clip-path' : path
  });
});

var center;


