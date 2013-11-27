<?php
$personer = array("Arne Johan Bitter", "Erik Tabulator", "Jostein Mengele", "Sigurd Snurpe");

if(!empty($_POST)){
	$data['available'] = $_POST['available'];
	
	foreach($personer as $person){
		if(!in_array($person, $data['available'])){
			$data['unavailable'][] = $person;
		}
	}

	file_put_contents("persons.json", json_encode($data)."\n");
}

$data = json_decode(file_get_contents("persons.json"), true);
?>
<!doctype html>
<html lang="no">
<head>
	<meta charset="utf-8">
	<title>Velg tilgjengelige personer</title>
</head>
<body>
	<h1>Personer tilgjengelige for en prat</h1>
	<?php
	if(!empty($_POST)){
		echo "<p><strong>Lagret!</strong></p>";
	}
	?>
	<form action="persons.php" method="post">
		<?php
		foreach($personer as $navn){
			if(in_array($navn, $data['available'])){
				echo '<input type="checkbox" name="available[]" checked="checked" value="'.$navn.'">'.$navn.'<br>';
			} else {
				echo '<input type="checkbox" name="available[]" value="'.$navn.'">'.$navn.'<br>';
			}
		}
		?>
		<input type="submit" value="Lagre">
	</form>
</body>
</html>
