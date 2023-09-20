<?php
include_once "dbh.inc.php";
$temp_time = array();
$temperature_value = array();

$humidity_time = array();
$humidity_value = array();




$weather_temp_time = array();
$weather_temp_value = array();

$weather_humid_time = array();
$weather_humid_value = array();

$weather_airpr_time = array();
$weather_airpr_value = array();

$weather_windspd_time = array();
$weather_windspd_value = array();

$weather_rain_time = array();
$weather_rain_value = array();

$weather_gustspd_time = array();
$weather_gustspd_value = array();


$sql = "SELECT Time FROM temperature;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $temp_time[] = $row["Time"];
}

$sql = "SELECT Value FROM temperature;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $temperature_value[] = $row["Value"];
}

$sql = "SELECT Time FROM humidity;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $humidity_time[] = $row["Time"];
}

$sql = "SELECT Value FROM humidity;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $humidity_value[] = $row["Value"];
}








$sql = "SELECT Time FROM weather_temperature;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_temp_time[] = $row["Time"];
}

$sql = "SELECT Value FROM weather_temperature;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_temp_value[] = $row["Value"];
}


$sql = "SELECT Time FROM weather_humidity;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_humid_time[] = $row["Time"];
}

$sql = "SELECT Value FROM weather_humidity;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_humid_value[] = $row["Value"];
}

$sql = "SELECT Time FROM weather_windspd;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_windspd_time[] = $row["Time"];
}

$sql = "SELECT Value FROM weather_windspd;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_windspd_value[] = $row["Value"];
}

$sql = "SELECT Time FROM airpressure;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_airpr_time[] = $row["Time"];
}
$sql = "SELECT Value FROM airpressure;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_airpr_value[] = $row["Value"];
}

$sql = "SELECT Time FROM weather_gustspd;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_gustspd_time[] = $row["Time"];
}
$sql = "SELECT Value FROM weather_gustspd;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_gustspd_value[] = $row["Value"];
}

$sql = "SELECT Time FROM weather_rain;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_rain_time[] = $row["Time"];
}
$sql = "SELECT Value FROM weather_rain;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $weather_rain_value[] = $row["Value"];
}


