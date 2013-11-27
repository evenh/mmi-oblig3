$(document).ready(function(){
	var personer;
	var personHolder = $("#personList");

	// Hvis delta-knappen er trykket på
	$("#delta").click(function(e){
		e.preventDefault();
		personHolder.toggle();
	});

	// Hvis brukeren prøver å trykke på en tilgjengelig bruker
	// HVORFOR FUNKER IKKE DETTE?!?!?
	$("[id^='confirm-conversation']").click(function(e){
		e.preventDefault();
		console.log("Foo");
	});

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
					personHolder.append('<li class="available"><a id="confirm-conversation-'+i+'" data-name="'+data.available[i]+'" href="#">'+data.available[i]+'</a></li>');
				}

				// Loop gjennom utilgjengelige kontakter
				for(var i=0;i<data.unavailable.length;i++){
					personHolder.append('<li class="unavailable">'+data.unavailable[i]+'</li>');
				}
			}
		});
	}, 500);
});
