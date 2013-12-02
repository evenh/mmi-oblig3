<!doctype html>
<html lang="no">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic" />
	<link rel="stylesheet" type="text/css" href="css/mmi.css" />


	<title>Signal</title>
</head>
<body>

	<div id="application" class="container">

		<header>
			<h1>Signal</h1>
		</header>

		<section>
			<nav>
				<a id="start" href="samtale.php">Oversett lokalt</a>
				<p class="nav-information">...Eller...</p>
				<a id="share" class="alt" href="samtale.php?mode=share">Del oversettelse med andre</a>
			</nav>
		</section>
	</div>

	<!-- Javascript -->

	<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
	<script src="js/main.js"></script>
	<script>
	$("a").click(function (event) {
		event.preventDefault();
		window.location = $(this).attr("href");
	});
	</script>
</body>
</html>
