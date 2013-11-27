/* 2013 (c) Even Hotlhe <even.holthe@me.com>
 *
 * Til bruk i oblig3 i Menneske maskin interaksjon-faget, høsten 2013
 */

$(document).ready(function(){

	$("#application").append('<audio id="blip" nocontrols><source src="audio/blip.mp3" type="audio/mpeg" /><source src="audio/blip.ogg" type="audio/ogg" /></audio>');

	var audioHolder		= document.getElementById("blip");
	var messageHolder   = $("#message");
	var historikkHolder = $("#historikk");
	var firstLoad		= true;
	// Skru av caching
	$.ajaxSetup({ cache: false });

	// Sjekk etter nye meldinger hvert halve sekund
	window.setInterval(function(){
		// Hent data.json med ajax
		$.get("data.json", function(data){
			// Hvis det er ny tekst i arrayet kontra tekstfeltets verdi
			if(messageHolder.text() != data.messages[0]){
				// Oppdater tekstfeltets tekst
				messageHolder.text(data.messages[0]);
				// Rens historikk, og loop gjennom resterende array
				historikkHolder.html('');
				for (var i=1;i<data.messages.length; i++){
					historikkHolder.prepend('<li>'+data.messages[i]+'</li>');
				}

				if (!firstLoad) { 
					$(messageHolder).css({
						"animation": "new-message 2s",
						"-webkit-animation": "new-message 2s"
					});

					setTimeout(function() {
						$(messageHolder).css({
							"animation": "none",
							"-webkit-animation": "none"
						})
					}, 2000);

					audioHolder.play();
				}

				firstLoad = false;

			}
		});
	}, 500);
});
