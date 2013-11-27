$(document).ready(function(){
	var personer;

	var personHolder = $("#personList");

	// Skru av caching
	$.ajaxSetup({ cache: false });

	// Sjekk etter nye meldinger hvert halve sekund
	window.setInterval(function(){
		// Hent persons.json med ajax
		$.get("persons.json", function(data){
			// Sammenlign som to JSON-strenger
			if(JSON.stringify(personer) !== JSON.stringify(data)){
				// Oppdater personer-objektet
				personer = data;
				
				// Rens listen
				personHolder.html('');

				// Loop gjennom tilgjengelige kontakter
				for(var i=0;i<data.available.length;i++){
					personHolder.append('<li class="available">'+data.available[i]+'</li>');
				}

				// Loop gjennom utilgjengelige kontakter
				for(var i=0;i<data.unavailable.length;i++){
					personHolder.append('<li class="unavailable">'+data.unavailable[i]+'</li>');
				}
			}
		});
	}, 500);
	
});
