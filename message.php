<?php
$slettet = false;

if(isset($_GET['slett'])){
	file_put_contents("data.json", "");
} elseif(!empty($_GET)){
	$dataFile = json_decode(file_get_contents("data.json"), true);

	// Hvis 0 oppføringer i arrayet
	if(count($dataFile['messages']) == 0){
		// Sett første oppføring til postet melding
		$messages['messages'][] = $_GET['message'];
	// Hvis vi har data i filen fra før
	} else {
		// Les inn meldingene fra filen inn i et lokalt array
		$messages = array("messages" => $dataFile['messages']);
		// Legg til den nye meldingen som oppføring 0
		array_unshift($messages['messages'], $_GET['message']);
		// Historikken skal være 4 elementer (1 gjeldende + 3 i historikk)
		$messages['messages'] = array_slice($messages['messages'], 0, 4);
	}

	// Skriv tilbake til fil
	file_put_contents("data.json", json_encode($messages)."\n");
}

// Les inn på nytt
$dataFile = json_decode(file_get_contents("data.json"));
?>
<!doctype html>
<html lang="no">
<head>
	<meta charset="UTF-8">
	<title>Bakrommet</title>
</head>
<body>
	<h1>Velkommen til Bakrommet&trade;</h1>
	<p><strong>Nåværende melding:</strong>
		<?php
			if(!empty($dataFile->messages[0])){
				echo $dataFile->messages[0];
			} else {
				echo "Ingen melding lagret enda…";
			}
		?></p>
	<h2>Slett innhold</h2>
	<p>Trykk <a href="message.php?slett">her</a> for å slette alt samtaleinnhold. Du får ikke spørsmål om bekreftelse, og det er ingen vei tilbake :)</p>
	<h2>Oppdater melding</h2>
	<form action="message.php" method="get">
		<input type="text" id="melding" name="message" size="100">
		<input type="submit" value="Lagre">
	</form>
	<ol id="manus">
		<li><a href="#">Hei</li>
		<li><a href="#">Jeg heter Sindre</a></li>
		<li><a href="#">Hyggelig å møte deg</a></li>
		<li><a href="#">Kan du hjelpe meg med en ting</a></li>
		<li><a href="#">Jeg trenger hjelp til å handle på butikken</a></li>
		<li><a href="#">Flott, la oss gå</a></li>
	</ol>
	<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
	<script>
	$(document).ready(function(){
		$("#manus li a").click(function(e){
			e.preventDefault();
			location.href = "message.php?message="+$(this).text();
		});
	});
	</script>
</body>
</html>
