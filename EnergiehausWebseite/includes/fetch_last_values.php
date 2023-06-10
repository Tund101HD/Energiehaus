<?php
include_once "dbh.inc.php";
$windspd = 0;
$temperature = 0;
$humidity = 0;

$sql = "SELECT * FROM weather_windspd ORDER BY ID DESC LIMIT 1;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $windspd= $row[1];
}

$sql = "SELECT * FROM weather_temperature ORDER BY ID DESC LIMIT 1;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $temperature= $row[1];
}

$sql = "SELECT * FROM weather_humidity ORDER BY ID DESC LIMIT 1;";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)){
    $humidity= $row[1];
}

