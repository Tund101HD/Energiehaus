<?php
include_once "dbh.inc.php";
$temp_time = array();
$temperature_value = array();

$humidity_time = array();
$humidity_value = array();

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



