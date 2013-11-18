/* 2013 (c) Even Hotlhe <even.holthe@me.com>
 *
 * Til bruk i oblig3 i Menneske maskin interaksjon-faget, høsten 2013
 */

$(document).ready(function(){
	var messageHolder = $("#message");

	// Sjekk etter nye meldinger hvert halve sekund
	window.setInterval(function(){
		$.get("data.json", function(data){
			if(messageHolder.text() !== data.message){
				$("#message").text(data.message);
				console.log("Oppdaterte meldingen...");
			}
		});
	}, 500);
});
