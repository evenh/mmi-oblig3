/* 2013 (c) Even Holthe <even.holthe@me.com>
 *
 * Til bruk i oblig3 i Menneske maskin interaksjon-faget, høsten 2013
 */

 $(document).ready(function(){
 	// Forhindrer lenkefeil ved webappmodus på iOS
 	$("a").click(function (e){ e.preventDefault(); window.location = $(this).attr("href"); });

 	window.scrollTo(0,1);

 	$("#application").append('<audio id="blip" nocontrols><source src="audio/blip.mp3" type="audio/mpeg" /><source src="audio/blip.ogg" type="audio/ogg" /></audio>');

	var audioHolder             = document.getElementById("blip");
	var messageHolder           = $("#message");
	var historikkHolder         = $("#historikk");
	var emptyConversationString = "Ingen meldinger enda";
	var firstLoad               = true;
	// Skru av caching
	$.ajaxSetup({ cache: false });

	// Metode for å rense text for @ (feilmelding)
	function cleanText(input){
		var tmp = "";
		var teller = (input.charAt(0) == "@" ? 1 : 0);
		for(var i=teller;i<=input.length;i++){
			tmp += input.charAt(i);
		}

		return tmp;
	}

	// Sjekk etter nye meldinger hvert halve sekund
	window.setInterval(function(){
		// Hent data.json med ajax
		$.get("data.json", function(data){
			// Hvis det er ny tekst i arrayet kontra tekstfeltets verdi
			if(cleanText(messageHolder.text()) != cleanText(data.messages[0])){
				// Oppdater tekstfeltets tekst
				if(data.messages[0].charAt(0) === "@"){
					var tmp = "";
					for(var j=1;j<data.messages[0].length;j++){
						tmp += data.messages[0].charAt(j);
					}
					messageHolder.text(tmp);
					messageHolder.addClass('error');
				} else {
					messageHolder.text(data.messages[0]);
					messageHolder.removeClass('error');
				}
				// Rens historikk, og loop gjennom resterende array
				historikkHolder.html('');
				for (var i=1;i<data.messages.length; i++){
					if(data.messages[i].charAt(0) === "@"){
						var tmp = "";
						for(var j=1;j<data.messages[i].length;j++){
							tmp += data.messages[i].charAt(j);
						}
						historikkHolder.prepend('<li class="error">'+$.trim(tmp)+'</li>');
					} else {
						historikkHolder.prepend('<li>'+data.messages[i]+'</li>');
					}
				}

				if (!firstLoad) { 

					if ($(messageHolder).hasClass("error")) {
						$(messageHolder).css({
							"animation": "error-message 1.2s",
							"-webkit-animation": "error-message 1.2s"
						});

						setTimeout(function() {
							$(messageHolder).css({
								"animation": "none",
								"-webkit-animation": "none"
							})
						}, 2000);
					}

					else {
						$(messageHolder).css({
							"animation": "new-message 1.2s",
							"-webkit-animation": "new-message 1.2s"
						});

						setTimeout(function() {
							$(messageHolder).css({
								"animation": "none",
								"-webkit-animation": "none"
							})
						}, 2000);
					}

					audioHolder.play();
				}

				firstLoad = false;

			}
		})
		// Hvis tom json-fil eller andre feil
		.fail(function(){
			if(messageHolder.text() != emptyConversationString){
				historikkHolder.html('');
				messageHolder.text(emptyConversationString);
				console.log("Ga brukeren beskjed om at det ikke er noen data enda...");
			}
		});
}, 500);
});
