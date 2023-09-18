const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const MySql = require("./utils/MySql")

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
let mysql = new MySql();

app.get("/", (re, res) => {
    res.send("Hello world")
})
app.get("/values/all/temperature", async (re, res) => {
    let resp = await mysql.getAllTemperatureValues()
    console.log("Executed request getAllValue-Temperature")
    res.send(await mysql.getAllTemperatureValues())
})
app.get("/values/all/humidity", async (re, res) => {
    let resp = await mysql.getAllHumidityValues()
    console.log("Executed request getAllValue-Humidity")
    res.send(await mysql.getAllHumidityValues())
})
app.get("/values/all/windspd", async (re, res) => {
    let resp = await mysql.getAllWindspeedValues()
    console.log("Executed request getAllValue-Humidity")
    res.send(await mysql.getAllWindspeedValues())
})
app.get("/values/all/rain", async (re, res) => {
    let resp = await mysql.getAllRainValues()
    console.log("Executed request getAllValue-Humidity")
    res.send(await mysql.getAllRainValues())
})
app.get("/values/all/gustspd", async (re, res) => {
    let resp = await mysql.getAllGustspeedValues()
    console.log("Executed request getAllValue-Humidity")
    res.send(await mysql.getAllGustspeedValues())
})




app.get("/values/single/humidity", async (re, res) => {
    let resp = await mysql.getLastHumidityValue()
    console.log("Executed request getSingleValue-Humidity")
    res.send(await mysql.getLastHumidityValue())
})
app.get("/values/single/temperature", async (re, res) => {
    console.log("Executed request getSingleValue-Temperature")
    res.send(await mysql.getLastTemperatureValue())
})
app.get("/values/single/wspeed", async (re, res) => {
    console.log("Executed request getSingleValue-Windspeed")
    res.send(await mysql.getLastWindSpeedValue())
})


app.listen(3001,  ()=>{
    console.log("[Info] Server running on Port 3001.")
})