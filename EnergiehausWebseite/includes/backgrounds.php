<?php
$directory = "imgs/Backgrounds/";
$filecount = 0;
$files = glob($directory . "*");
if ($files){
    $filecount = count($files);
}
$IMG = mt_rand(1, $filecount);