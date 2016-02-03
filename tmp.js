var svg = document.getElementById('svg');
var hole = document.getElementById('#hole');
var rect = document.getElementById('#rect');
var rectTop = document.getElementById('#rect-top');
var path = document.getElementById('#path');
var gradInvert = document.getElementById('#rad-grad-invert');

var holeR = 100;

var svg.clientWidth = 0;
var svg.clientHeight = 0;

var svgW = svg.clientWidth;
var svgH = svg.clientHeight;

var svgHorcenter = svgW / 2;

setCoords();

function setCoords(event) {

  var cx = hole.cx.baseVal.value;
  var cy = hole.cy.baseVal.value;

  if (event) {
    cx = event.offsetX;
    cy = event.offsetY;
  }

  hole.setAttr({
    'cx': cx,
    'cy': cy
  });

  gradInvert.setAttr({
    'cx': cx,
    'cy': cy
  });

  var pathCoordsList = [
    cx - holeR, cy,
    cx + holeR, cy,
    svgHorcenter, svgH
  ];

  var pathCoords = pathCoordsList.join(' ');

  path.setAttr({
    'd': 'M' + pathCoords
  });
}

rectTop.onmousemove = function(event) {
  setCoords(event);
}

window.onresize = function() {
  svgW = svg.clientWidth;
  svgH = svg.clientHeight;

  svgHorcenter = svgW / 2;

  setCoords();
}

