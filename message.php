<?php
$dataFile = json_decode(file_get_contents("data.json"), true);

if(!empty($_POST)){
	// Hvis 0 oppføringer i arrayet
	if(count($dataFile['messages']) == 0){
		// Sett første oppføring til postet melding
		$messages['messages'][] = $_POST['message'];
	// Hvis vi har data i filen fra før
	} else {
		// Les inn meldingene fra filen inn i et lokalt array
		$messages = array("messages" => $dataFile['messages']);
		// Legg til den nye meldingen som oppføring 0
		array_unshift($messages['messages'], $_POST['message']);
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
	<h2>Oppdater melding</h2>
	<form action="message.php" method="post">
		<input type="text" id="melding" name="message" size="100">
		<input type="submit" value="Lagre">
	</form>
</body>
</html>
