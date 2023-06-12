<!DOCTYPE html>

<?php
include_once "includes/dbh.inc.php";
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

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta http-equiv="refresh" content="300">

    <!--[if !IE]> -->
    <link href="stylesheets/wetterstation.css" media="only screen" rel="stylesheet" type="text/css"/>
    <link href="stylesheets/wetterstation.css"
          media="only screen and (max-device-width: 480px) , only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)"
          rel="stylesheet"
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
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


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
        <header style="color: aliceblue; font-size: 80px; line-height: 550px; text-align: center">Unsere Wetterstation.
            Erreichbar von überall.
        </header>
    </div>
    <div class="content">
        <header style="text-align: center; font-size: 80px; margin-top: 80px; border: 2px darkblue;" class="head-text">
            Unsere Wetterdaten
        </header>
        <div style="margin-left: 20%; margin-right: 20%">
            <p style="text-align: left; font-size: 30px; color: aliceblue;">
                Die Wetterstation, erbaut von Jella Metzger, liefert jede Minute genaue Daten über
                das Wetter in der Umgebung des Energiehauses. Die Daten werden gesammelt, in
                eine Datenbank geschrieben und hier, für jeden öffentlich Zugänglich,
                zur Schau gestellt.
                Das Ziel ist es, Schülerinnen und Schülern zu ermöglichen, diese Daten auszuwerten
                und in eigenen Projekten, z.B. einer GFS zu verwenden.
                <br>
                <br>
                <br>
                Da bis jetzt noch nicht genug Daten vorhanden sind, können wir leider keine akkuraten
                Diagramme bis jetzt zeigen. Daher stellen wir vorerst Diagramme mit unseren Test-Werten
                vor:
            </p>
        </div>
        <div class="chart-container">
            <div>
                <div class="temp-chart-holder">
                    <canvas id="temp-chart"></canvas>
                </div>
                <div class="humid-chart-holder">
                    <canvas id="humid-chart"></canvas>
                </div>
            </div>
            <div>
                <div class="airpr-chart-holder">
                    <canvas id="airpr-chart"></canvas>
                </div>
                <div class="windspd-chart-holder">
                    <canvas id="windspd-chart"></canvas>
                </div>
            </div>
            <div>
                <div class="gustspd-chart-holder">
                    <canvas id="gustspd-chart"></canvas>
                </div>
                <div class="rain-chart-holder">
                    <canvas id="rain-chart"></canvas>
                </div>
            </div>

        </div>

    </div>
    <script>
        const temp_time = <?php echo json_encode($weather_temp_time);?>;
        const temp = <?php echo json_encode($weather_temp_value);?>;
        const humid_time = <?php echo json_encode($weather_humid_time);?>;
        const humid = <?php echo json_encode($weather_humid_value);?>;
        const windspd_time = <?php echo json_encode($weather_windspd_time);?>;
        const windspd = <?php echo json_encode($weather_windspd_value);?>;
        const airpr_time = <?php echo json_encode($weather_airpr_time);?>;
        const airpr = <?php echo json_encode($weather_airpr_value);?>;
        const gustspd_time = <?php echo json_encode($weather_gustspd_time);?>;
        const gustspd = <?php echo json_encode($weather_gustspd_value);?>;
        const rain_time = <?php echo json_encode($weather_rain_time);?>;
        const rain = <?php echo json_encode($weather_rain_value);?>;




        data = {
            labels : temp_time,
            datasets : [
                {
                    data : temp,
                    label : "Temperatur in °C",
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
                    text: 'Temperatur-Diagramm'
                }
            }
        };

        const linechart = new Chart(document.getElementById("temp-chart").getContext("2d"), config)


        data= {
            labels : humid_time,
            datasets : [
                {
                    data : humid,
                    label : "Luftfeuchtigkeit in %",
                    borderColor : "#2156c2",
                    fill : false
                }]
        };

        const config2 = {
            type: 'line',
            data,
            options: {
                title: {
                    display: true,
                    text: 'Luftfeuchtigkeits-Diagramm'
                }
            }
        };
        const linechart2 = new Chart(document.getElementById("humid-chart").getContext("2d"), config2)


        data= {
            labels : windspd_time,
            datasets : [
                {
                    data : windspd,
                    label : "Windgeschwindigkeit in m/s",
                    borderColor : "#2156c2",
                    fill : false
                }]
        };

        const config3 = {
            type: 'line',
            data,
            options: {
                title: {
                    display: true,
                    text: 'Windgeschwindigkeits-Diagramm'
                }
            }
        };
        const linechart3 = new Chart(document.getElementById("windspd-chart").getContext("2d"), config3)

        data= {
            labels : airpr_time,
            datasets : [
                {
                    data : airpr,
                    label : "Luftdruck in hPa",
                    borderColor : "#2156c2",
                    fill : false
                }]
        };

        const config4 = {
            type: 'line',
            data,
            options: {
                title: {
                    display: true,
                    text: 'Luftdruck Diagramm'
                }
            }
        };
        const linechart4 = new Chart(document.getElementById("airpr-chart").getContext("2d"), config4)

        data= {
            labels : gustspd_time,
            datasets : [
                {
                    data : gustspd,
                    label : "Böengeschwindigkeit in m/s",
                    borderColor : "#2156c2",
                    fill : false
                }]
        };

        const config5 = {
            type: 'line',
            data,
            options: {
                title: {
                    display: true,
                    text: 'Böengeschw.-Diagramm'
                }
            }
        };
        const linechart5 = new Chart(document.getElementById("gustspd-chart").getContext("2d"), config5)

        data= {
            labels : rain_time,
            datasets : [
                {
                    data : rain,
                    label : "Regenmenge in mm",
                    borderColor : "#2156c2",
                    fill : false
                }]
        };

        const config6 = {
            type: 'line',
            data,
            options: {
                title: {
                    display: true,
                    text: 'Regendiagramm'
                }
            }
        };
        const linechart6 = new Chart(document.getElementById("rain-chart").getContext("2d"), config6)
    </script>
</div>


</body>
</html>