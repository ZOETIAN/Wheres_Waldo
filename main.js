/*var $$waldo = document.getElementsByClassName('main_div')[0];
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
			oriImageWidths = [2048, 2828, 2048, 2953],	// for four images
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
});*/// double click funtion to find waldo

class Level
{
	constructor(url,waldoX,waldoY,waldoR){
		this.url = url;
		this.image = new Image();
		this.image.src = url;
		this.x = 0;
		this.y = 0;
		this.width = this.image.width;
		this.height = this.image.height;
		this.aura = 0;
		this.waldoRPx = waldoR;
		this.waldoXPx = waldoX;
		this.waldoYPx = waldoY;
	}
}
function scale()
{
	if(window.level.image.width / self.innerWidth < window.level.image.height / self.innerHeight)
	{
		window.level.height = self.innerHeight;
		window.level.width = window.level.image.width / window.level.image.height * window.level.height;
		window.level.x = (self.innerWidth - window.level.width) / 2;
		window.level.y = 0;
	}
	else
	{
		window.level.width = self.innerWidth;
		window.level.height = window.level.image.height / window.level.image.width * window.level.width;
		window.level.x = 0;
		window.level.y = (self.innerHeight - window.level.height) / 2;
	}
	window.level.aura = window.level.width * window.level.height / 10000;

	window.level.waldoX = window.level.x + window.level.waldoXPx / window.level.image.width * window.level.width;
	window.level.waldoY = window.level.y + window.level.waldoYPx / window.level.image.height * window.level.height;
	window.level.waldoR = window.level.waldoRPx / window.level.image.width * self.innerWidth;

	window.main.width = self.innerWidth;
	window.main.height = self.innerHeight;
	window.drawable.fillStyle = "#000";
	window.drawable.fillRect(0,0,self.innerWidth,self.innerHeight);

	window.rgradient.width = window.level.aura * 2 + 2;
	window.rgradient.height = window.rgradient.width;
	let c = window.rgradient.getContext("2d");
	c.fillStyle = c.createRadialGradient(window.level.aura,window.level.aura,window.level.aura,window.level.aura,window.level.aura,window.level.aura / 2);
	c.fillStyle.addColorStop(1,'rgba(0,0,0,0)');
	c.fillStyle.addColorStop(0,'rgba(0,0,0,1)');
	c.fillRect(0,0,window.rgradient.width,window.rgradient.height);
}
function redraw(e)
{
	drawable.fillStyle = "#000";
	drawable.fillRect(0,0,self.innerWidth,self.innerHeight);
	drawable.save();
	drawable.beginPath();
	drawable.moveTo(e.clientX-window.level.aura,e.clientY);
	drawable.lineWidth = 1;
	drawable.arcTo(e.clientX,e.clientY + Math.PI * 21 * window.level.aura,e.clientX+window.level.aura,e.clientY,window.level.aura);
	drawable.arcTo(e.clientX,e.clientY - Math.PI * 21 * window.level.aura,e.clientX-window.level.aura,e.clientY,window.level.aura);
	drawable.closePath();
	drawable.clip();
	drawable.drawImage(window.level.image,window.level.x,window.level.y,window.level.width,window.level.height);
	drawable.restore();
	drawable.drawImage(window.rgradient,e.clientX - window.level.aura,e.clientY - window.level.aura);
	window.mouseX = e.clientX;
	window.mouseY = e.clientY;
}
window.addEventListener("load",
function () {
	window.levels = 
	[
		new Level("media/level0.jpg",1738,431,20),
		new Level("media/level1.jpg",1148,1152,20),
		new Level("media/level2.jpg",1015,1153,25),
		new Level("media/level3.jpg",314,1707,20)
	];
	window.levelI = 0;
	window.level = levels[levelI];
	window.rgradient = document.createElement("canvas");
	window.main = document.getElementById("main");
	main.height = self.innerHeight;
	main.width = self.innerWidth;
	window.drawable = main.getContext("2d");
	window.level.image.addEventListener("load",scale);
	level.image.width = level.width;
	level.image.height = level.height;
	drawable.fillStyle = "#000";
	window.addEventListener("resize",scale);
	window.addEventListener("mousemove",redraw);
});
window.addEventListener("contextmenu",function(e){e.preventDefault()});
window.addEventListener("dblclick",function(e)
{
	let diffX = e.clientX - window.level.waldoX;
	let diffY = e.clientY - window.level.waldoY;
	if(Math.sqrt(diffX * diffX + diffY * diffY) <= window.level.waldoR)
	{
		window.drawable.fillStyle = "#FFEC8B";
		window.drawable.fillRect(0,0,self.innerWidth,self.innerHeight);
		alert("You find the Waldo! You can now continue the level " + ((window.levelI+=1)+1));
		window.level = window.levels[levelI];
		scale();
		window.drawable.fillStyle = "#000";
		window.drawable.fillRect(0,0,self.innerWidth,self.innerHeight);
	}
	else
	{
		window.drawable.fillStyle = "#B0E2FF";
		window.drawable.fillRect(0,0,self.innerWidth,self.innerHeight);
		alert("Really?! That's your Waldo!");
		window.drawable.fillStyle = "#000";
		window.drawable.fillRect(0,0,self.innerWidth,self.innerHeight);
	}
});