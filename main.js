var $waldo = $('.main_div');
var title = $(document).title;

$(document).mousemove(function(e){
  var x = e.pageX;
  var y = e.pageY;
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
  var level = 0;
  var backgrounds = [
    'http://jokideo.com/wp-content/uploads/2013/05/Lets-play-a-game-Wheres-wally-waldo.jpg',
    'url(http://www.whereswaldo.com/m/images/maps_future.jpg)'
    , 'url(http://i.imgur.com/auEx3XS.jpg)'
    , 'url(http://img01.thedrum.com/s3fs-public/drum_basic_article/97639/main_images/WheresWallyAtWembley_6.jpg)'
  ];

  if(mouseX > 1650 && mouseX < 1690 && mouseY > 215 && mouseY < 290) {
    $('body').css("background", "#FFEC8B");
    level += 1;
    level = level % backgrounds.length;
    $('html').css('background-image', backgrounds[level]);
    $('.main_div').css('background-image', backgrounds[level]);
    alert("You find the Waldo! You can now continue the level " + (level+1));
  } else{
    $('body').css("background", "#B0E2FF");
    alert("Really?! That's your Waldo!");
  }
});

