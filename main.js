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

  var windowWidth = $('window').width(),
      windowHeight = $('window').height(),
      oriImageWidths = [2048, 2828, 2048, 2953],  // for four images
      oriImageHeights = [1454, 1828, 1282, 2088], // for four images

      // oriWaldoWidths = [[1725, 1750, 1725, 1750],[1125, 1155, 1130, ],[], []],  //
      // oriWaldoHeights = [[410, 450, 410, 450], [1035, 1140, 1190, ],[], []];     // first Waldo image: leftTop, rightTop, leftBot, rightBot

      oriWaldoCoors = [
                       [1725,410],[1750,450],
                       [1125,1035],[1136,1216],
                       [980, 1130], [1030, 1190],
                       [285, 1690], [320, 1760]
      ];

      // calculate the ratios for four images
      for(var i = 0;i < 4; i++) {
        var heightRatios = [], widthRatios = [];
        heightRatios.push(oriWaldoCoors[i][0] / oriImageHeights[i]);
        widthRatios.push(oriWaldoCoors[i][1] / oriImageWidths[i]);
      }

      // detect if the mouse is within the Waldo_range: if found, change the background color and next level
      var j = level * 2;
      if(mouseX >= oriWaldoCoors[j][0] && mouseX <= oriWaldoCoors[j+1][0] && mouseY >= oriWaldoCoors[j][1] && mouseY <= oriWaldoCoors[j+1][1]) {
        $('body').css("background", "#FFEC8B");
        level += 1;
        level = level % backgrounds.length;
        $('html').css('background-image', backgrounds[level]);
        $('.main_div').css('background-image', backgrounds[level]);
        alert("You find the Waldo! You can now continue the level " + (level+1));
        $('body').css("background", "#000");
      }
      else{
        $('body').css("background", "#B0E2FF");
        alert("Really?! That's your Waldo!")
        $('body').css("background", "#000");
      }

});// double click funtion to find waldo

