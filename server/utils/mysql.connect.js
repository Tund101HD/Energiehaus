const mysql = require('mysql2');



const conn = mysql.createConnection({
    host: "localhost",
    user: "admin",
    database: "users",
    password: "8cK2DB(-H2JYdx;M-s",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

/*
async function tt(name, callback){
    let sqlparams = [name]
    let sql = `SELECT * FROM users.users WHERE Username= ? ;`;
    const result = await pool.execute(sql,sqlparams, function (err, result, fields){
        if(err) return null
        return callback(result[0]['Password']);
    });
}
var stuff_i_want = '';
tt('Hello', function(result){
    stuff_i_want = result;
    console.log(result);
});
*/
module.exports=conn;
