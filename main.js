var $$waldo = document.getElementsByClassName('main_div')[0];
var $waldo = $(".main_div");

window.onmousemove = (function(e){
  var x = e.pageX;
  var y = e.pageY;
  var path = 'circle(10% at ' + x + 'px ' + y + 'px)';

  $waldo.style['-webkit-clip-path'] = path;
  $waldo.style['clip-path'] = path;
});

window.ondblclick = (function(e){
  var mouseX = e.pageX;
  var mouseY = e.pageY;
  var level = 0;

  var backgrounds = [
    'url(http://jokideo.com/wp-content/uploads/2013/05/Lets-play-a-game-Wheres-wally-waldo.jpg)',
    'url(http://www.whereswaldo.com/m/images/maps_future.jpg)'
    , 'url(http://i.imgur.com/auEx3XS.jpg)'
    , 'url(http://img01.thedrum.com/s3fs-public/drum_basic_article/97639/main_images/WheresWallyAtWembley_6.jpg)'
  ];

  var windowWidth = $('window').width(),
      windowHeight = $('window').height(),
      oriImageWidths = [2048, 2828, 2048, 2953],  // for four images
      oriImageHeights = [1454, 1828, 1282, 2088], // for four images

      oriWaldoCoors = [
                       [1725,410],[1750,450],
                       [1125,1035],[1136,1216],
                       [980, 1130], [1030, 1190],
                       [285, 1690], [320, 1760]
      ]
      ;

      // calculate the ratios for four images
      for(var i = 0;i <oriImageWidths.length; i++) {
          for(var j = 0; j < oriWaldoCoors.length; j++) {
              var widthRatios = [], heightRatios = [];
              widthRatios.push(oriWaldoCoors[j][0] / oriImageWidths[i]);
              heightRatios.push(oriWaldoCoors[j][1] / oriImageHeights[i]);
          }
      }

      // calculate the new coordinates for waldo for each image: take out those values in pairs
      for(var i = 0; i < oriWaldoCoors.length; i++) {
          var newLeft = widthRatios[i] * windowWidth;
          var newRight = heightRatios[i] * windowHeight;
          var newTop = widthRatios[i] * windowWidth;
          var newBot = heightRatios[i] * windowHeight;
      }


      // detect if the mouse is within the Waldo_range: if found, change the background color and next level
      if(mouseX >= newLeft && mouseX <= newRight && mouseY >= newBot && mouseY <= newTop) {
        document.body.style["background"] = "#FFEC8B";
        level += 1;
        level = level % backgrounds.length;
        $$waldo.style['background-image'] = backgrounds[level];
        alert("You find the Waldo! You can now continue the level " + (level+1));
        document.body.style["background"] = "#000";
      }
      else{
        document.body.style["background"] = "#B0E2FF";
        alert("Really?! That's your Waldo!")
        document.body.style["background"] = "#000";
      }
});// double click funtion to find waldo

