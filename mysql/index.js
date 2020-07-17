const mysql = require('mysql');

const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "12345678",
    database: "cc6_todo_list",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;