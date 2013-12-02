$(function() {

	$("body").prepend('<p id="splash">Velkommen til <span>Sign.al</span>. Trykk på skjermen for å begynne.</p>');

	$("#splash").click(function() {
		launchFullScreen(document.documentElement);
		$(this).remove();
	});

  $("a").click(function (e){ e.preventDefault(); window.location = $(this).attr("href"); });
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
