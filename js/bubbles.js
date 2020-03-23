// hover on bubbles
$("#bubbles img").mouseover(function(){
  // flouter et désaturer les bulles qui ne sont pas survolées
  $("#bubbles img").not(this).css("filter","saturate(.1) blur(2px)");
});

$("#bubbles img").mouseleave(function(){
  // n'appliquer aucun filtre lorsqu'on ne survole plus les bulles
  $("#bubbles img").css("filter","none");
});



// fond animé
var lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.content--bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();
