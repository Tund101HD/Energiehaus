<!DOCTYPE html>

<?php
    include_once "includes/dbh.inc.php";
    include_once "includes/backgrounds.php";
?>
<style type="text/css">
    .banner {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        text-align: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("imgs/Backgrounds/BG<?php echo $IMG?>.jpeg");
    }
</style>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <!--[if !IE]> -->
  <link href="stylesheets/wetterstation.css" media="only screen" rel="stylesheet" type="text/css"/>
  <link href="stylesheets/wetterstation.css" media="only screen and (max-device-width: 480px) , only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)" rel="stylesheet"
        type="text/css"/>
  <!-- <![endif]-->

  <!--[if IE]> -->
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <link href="stylesheets/wetterstation.css" rel="stylesheet"/>
  <!--[endif] -->

  <!--[if IEMobile]> -->
  <link href="stylesheets/wetterstation.css" rel="stylesheet"/>
  <!--[endif] -->

  <title>Unsere Wetterdaten</title>
  <script defer src="scripts/index.js" type="text/javascript"></script>
</head>
<body>
<div class="container">
  <div class="banner">
    <div class="navbar">
      <img class="logo" src='imgs/Logos/GISNY.png' alt='imgs/GISNY.png' onclick="logoClick()">
      <ul>
        <li onclick="onReturn()"><a href="#">HOME</a></li>
        <li onclick="onData()"><a href="#">DATENBANK</a></li>
      </ul>
    </div>
    <header style="color: aliceblue; font-size: 80px; line-height: 550px; text-align: center">Unsere Wetterstation. Erreichbar von überall.</header>
  </div>
  <div class="content">
    <header style="text-align: center; font-size: 80px; color: aliceblue; margin-top: 80px">Unsere Wetterdaten</header>
  </div>
</div>


</body>
</html>