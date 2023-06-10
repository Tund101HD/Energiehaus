<!DOCTYPE html>
<html lang="de">
<?php
    include_once 'includes/dbh.inc.php';
    include_once "includes/backgrounds.php";
    include_once "includes/fetch_all_values.php";

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

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <!--[if !IE]> -->
    <link href="stylesheets/data.css" media="only screen" rel="stylesheet" type="text/css"/>
    <link href="stylesheets/data.css" media="only screen and (max-device-width: 480px) , only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)" rel="stylesheet"
          type="text/css"/>
    <!-- <![endif]-->

    <!--[if IE]> -->
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <link href="stylesheets/data.css" rel="stylesheet"/>
    <!--[endif] -->

    <!--[if IEMobile]> -->
    <link href="stylesheets/data.css" rel="stylesheet"/>
    <!--[endif] -->
    <title>Energiehaus Isny</title>
    <script defer src="scripts/index.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>
<body>
<div class="container">
    <div class="banner">
        <img src="imgs/Logos/GISNY.png" alt="" class="logo">
        <div class="navbar">
            <ul>
                <li onclick="onHome()"><a href="index.php">HOME</a></li>
                <li onclick="onInfo()"><a href="#">DATENBANK</a></li>
            </ul>
        </div>
        <div class="title"> Unsere Datenbank </div>
        <div class="content"> Unsere gesammelten Daten </div>
    </div>
    <div class="site">

        <div class="chart-list-container">
            <ul class="chart-list">
                <li><div class="humidity"><canvas id="humidity-chart"></div></canvas> &nbsp <div class="temperature"><canvas id="temperature-chart"></canvas></div></li>
            </ul>

        </div>

    </div>
</div>

<script>
    const temp_time = <?php echo json_encode($temp_time);?>;
    const temp = <?php echo json_encode($temperature_value);?>;
    const humid_time = <?php echo json_encode($humidity_time);?>;
    const humid = <?php echo json_encode($humidity_value);?>;


    data = {
        labels : temp_time,
        datasets : [
            {
                data : temp,
                label : "Temperatur",
                borderColor : "#2156c2",
                fill : false
            }]
    };

    const config = {
        type: 'line',
        data,
        options: {
            title: {
                display: true,
                text: 'Chart JS Line Chart Example'
            }
        }
    };

    const linechart = new Chart(document.getElementById("temperature-chart").getContext("2d"), config)


    data= {
        labels : humid_time,
        datasets : [
            {
                data : humid,
                label : "Luftfeuchtigkeit",
                borderColor : "#2156c2",
                fill : false
            }]
    };

    const configline = {
        type: 'line',
        data,
        options: {
            title: {
                display: true,
                text: 'Chart JS Line Chart Example'
            }
        }
    };
    const linechart2 = new Chart(document.getElementById("humidity-chart").getContext("2d"), configline)
</script>

</body>
</html>
