function onHome(){
 window.location.href("index.html")
}

function onReturn(){
    window.location.replace("index.html")
}

function onData(){
 window.location.replace("data.html")
}

function onWetter(){
    window.location.replace("wetterstation.html")
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


function loadBG(){
    let rnd = Math.floor(Math.random()*10)+1;
    document.getElementById("banner").style.backgroundImage = "url(imgs/Backgrounds/BG2.jpeg)";

}



