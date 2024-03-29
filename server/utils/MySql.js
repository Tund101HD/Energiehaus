const msql = require("./mysql.connect")

class MySql {
    constructor() {
        this.db = msql;
    }
    getLastHumidityValue() {
        let query = "SELECT Value FROM prod.weather_humidity WHERE ID = 1"
        return this.doQuery(query)
    }
    getLastTemperatureValue() {
        let query = "SELECT Value FROM prod.weather_temperature WHERE ID = 1"
        return this.doQuery(query)
    }
    getLastWindSpeedValue() {
        let query = "SELECT Value FROM prod.weather_windspd WHERE ID = 1"
        return this.doQuery(query)
    }

    getAllTemperatureValues(){
        let query = "SELECT * FROM prod.weather_temperature"
        return this.doQuery(query)
    }
    getAllHumidityValues(){
        let query = "SELECT * FROM prod.weather_humidity"
        return this.doQuery(query)
    }
    getAllWindspeedValues(){
        let query = "SELECT * FROM prod.weather_windspd"
        return this.doQuery(query)
    }
    getAllRainValues(){
        let query = "SELECT * FROM prod.weather_rain"
        return this.doQuery(query)
    }
    getAllGustspeedValues(){
        let query = "SELECT * FROM prod.weather_gustspd"
        return this.doQuery(query)
    }





    //TODO: Do not touch working abomination
    async doQuery(queryToDo) {
        let pro = new Promise((resolve,reject) => {
            let query = queryToDo;
            this.db.query(query, function (err, result) {
                if (err) throw err; //No error handling because OASBDÜAOSBD
                resolve(result);
            });
        })
        return pro.then((val) => {
            return val;
        })
    }
    async doQueryParams(queryToDo, array) {
        let pro = new Promise((resolve,reject) => {
            let query = queryToDo;
            this.db.query(query, array, function (err, result) {
                if (err) throw err; //No error handling because FUCK IT :D
                resolve(result);
            });
        })
        return pro.then((val) => {
            return val;
        })
    }
}
module.exports=MySql;