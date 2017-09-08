$( document ).ready(function() {
  $('.row, #logo').fadeIn().css("display","inline-block");;
});

var strVar="";
strVar += "<div class=\"result\">";
strVar += "  <img class=\"title\" src=\"images\/ricerca.png\">";
strVar += "  <div id=\"percent\"><\/div>";
strVar += "  <svg id=\"svg\"><\/svg>";
strVar += "<\/div>";
strVar += "<div class=\"result\">      ";
strVar += "  <img class=\"title\" src=\"images\/risultati.png\">";
strVar += "  <div id=\"percent2\"><\/div>";
strVar += "  <svg id=\"svg2\"><\/svg>";
strVar += "<\/div>";

var canvasSize = 200,
centre = canvasSize/2,
radius = canvasSize*0.8/2,
path = "",
startY = centre-radius;

function render(x,y){

  percDiv = document.getElementById('percent');
  percDiv2 = document.getElementById('percent2');
  s = Snap('#svg');
  s2 = Snap('#svg2');
  arc = s.path(path);  

  function run(percent,p,sv) {
    var endpoint = percent*360;
    Snap.animate(0, endpoint,   function (val) {
      var d = val,
      dr = d-90;
      radians = Math.PI*(dr)/180,
      endx = centre + radius*Math.cos(radians),
      endy = centre + radius * Math.sin(radians),
      largeArc = d>180 ? 1 : 0;  
      path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;

      arc = sv.path(path);
      arc.attr({
        stroke: '#84251F',
        fill: 'none',
        strokeWidth: 12
      });
      p.innerHTML =    Math.round(val/360*100) +'%';

    }, 2000, mina.easeinout);  
  }

  run(x/100,percDiv,s);
  run(y/100,percDiv2,s2);
}

function goTo(){
  $('form').html(strVar);
  render(42,93);
}
