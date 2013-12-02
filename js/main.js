$(function() {

	$("body").prepend('<p id="splash">Velkommen til <span>Sign.al</span>. Trykk på skjermen for å begynne.</p>');

	$("#splash").click(function() {
		launchFullScreen(document.documentElement);
		$(this).remove();
	});

  $("a").click(function (e){ e.preventDefault(); window.location = $(this).attr("href"); });
  var updateStatusBar = navigator.userAgent.match(/iphone|ipad|ipod/i) && parseInt(navigator.appVersion.match(/OS (\d)/)[1], 10) >= 7;
  if(updateStatusBar){
    document.body.style.webkitTransform = 'translate3d(0, 20px, 0)';
  }
});

function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}
