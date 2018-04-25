const config = require('config');
const mysql = require('mysql');
const con = mysql.createConnection({
    host : config.get('mysql.host'),
    user : config.get('mysql.user'),
    password : config.get('mysql.password'),
    database : config.get('mysql.database')
});

con.connect();

module.exports = con;