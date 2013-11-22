/* 2013 (c) Even Hotlhe <even.holthe@me.com>
 *
 * Til bruk i oblig3 i Menneske maskin interaksjon-faget, høsten 2013
 */

$(document).ready(function(){
	var messageHolder   = $("#message");
	var historikkHolder = $("#historikk");
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
					historikkHolder.append('<li>'+data.messages[i]+'</li>');
				}
			}
		});
	}, 500);
});
