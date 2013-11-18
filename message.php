<?php
if(!empty($_POST)){
	file_put_contents("data.json", json_encode($_POST)."\n");
}

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
	<p><strong>Nåværende melding:</strong> <?php echo $dataFile->message; ?></p>
	<h2>Oppdater melding</h2>
	<form action="message.php" method="post">
		<input type="text" id="melding" name="message" size="100">
		<input type="submit" value="Lagre">
	</form>
</body>
</html>
