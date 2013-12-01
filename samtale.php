<!doctype html>
<html lang="no">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic" />
	<link rel="stylesheet" type="text/css" href="css/mmi.css" />

	<title>Applikasjonstittel 1.0</title>
</head>
<body>

	<?php
		if (isset($_GET["name"])) {
			$title = "Samtale med " . $_GET["name"];
		}

		else {
			$title = "Åpen samtale";
		}
	?>

	<div id="application" class="container">

	
		<header>
				<a href="#" class="left-button-holder">Rensk</a>
				<h1 class="title-holder"><?php echo $title; ?></h1>

			<span class="right-button-holder">
				
			</span>
		</header>
	

		<section>

			<ol id="historikk">
			</ol>

			<p id="message">Laster inn applikasjonen...</p>

		</section>

	</div>

<!-- Javascript -->

<script src="js/jquery-1.10.2.min.js"></script>
<script src="js/app.js"></script>

</body>
</html>
