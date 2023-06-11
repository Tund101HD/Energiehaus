<!DOCTYPE html>
<html lang="de">
<?php
    include_once "includes/dbh.inc.php";
    include_once "includes/fetch_last_values.php";
    include_once "includes/backgrounds.php"
?>

<style type="text/css">
    .banner {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("imgs/Backgrounds/BG<?php echo $IMG?>.jpeg");
    }
</style>

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta http-equiv="refresh" content="60">

    <!--[if !IE]> -->
    <link href="stylesheets/index.css" media="only screen" rel="stylesheet" type="text/css"/>
    <link href="stylesheets/index.css" media="only screen and (max-device-width: 480px) , only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)" rel="stylesheet"
          type="text/css"/>
    <!-- <![endif]-->

    <!--[if IE]> -->
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <link href="stylesheets/index.css" rel="stylesheet"/>
    <!--[endif] -->

    <!--[if IEMobile]> -->
    <link href="stylesheets/index.css" rel="stylesheet"/>
    <!--[endif] -->

    <title>Energiehaus Isny</title>
    <script defer src="scripts/index.js" type="text/javascript"></script>

</head>
<body>

<div class="container">
    <div class="banner">
        <div class="navbar">
            <img class="logo" src='imgs/Logos/GISNY.png' alt='imgs/GISNY.png' onclick="logoClick()">
            <ul>
                <li onclick="onHome()"><a href="#">HOME</a></li>
                <li onclick="onData()"><a href="#">DATENBANK</a></li>
            </ul>
        </div>
    </div>

    <div class="content">
        <h1>Die Energiehaus Wetterstation</h1>
        <p>Zugriff auf unsere Daten. Sofort. Von Überall.</p>
        <div>
            <button type="button" onclick="onWetter()"><span></span>Wetterstation</button>
            <button type="button" onclick="onData()"><span></span>Sensorik</button>
        </div>
    </div>
    <?php

    ?>

    <div class="card1">
        <div class="weather">
            <h2 class="heading">Temperatur</h2>
            <div class="temperature">Temperatur: <strong id="temperature"><?php echo $temperature ?></strong>°C</div>
        </div>
    </div>

    <div class="card2">
        <div class="weather">
            <h2 class="heading">Windgeschw.</h2>
            <div class="wind">Windgeschwindigkeit: <strong id="wind"><?php echo $windspd ?></strong> m/s</div>
        </div>
    </div>

    <div class="card3">
        <div class="weather">
            <h2 class="heading">Feuchtigkeit</h2>
            <div class="humidity">Luftfeuchtigkeit: <strong id="humidity"><?php echo $humidity ?></strong>%</div>
        </div>
    </div>
</div>

</body>
</html>
