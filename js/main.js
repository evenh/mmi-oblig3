$(function() {

	$("body").prepend('<p id="splash">Velkommen til <span>Sign.al</span>. Trykk på skjermen for å begynne.</p>');

	$("#splash").click(function() {
		launchFullScreen(document.documentElement);
		$(this).remove();
	});

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