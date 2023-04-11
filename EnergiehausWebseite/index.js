function onHome(){
 window.location.href("index.html")
}

function onData(){
 window.location.replace("data.html")
}

function logoClick(){
  location.replace("http://gisny.eu");
}

let temperature=6;
let wind=6;
let humidity=60;
document.getElementById('temperature').innerHTML = temperature;
document.getElementById('humidity').innerHTML = humidity;
document.getElementById('wind').innerHTML = wind;
