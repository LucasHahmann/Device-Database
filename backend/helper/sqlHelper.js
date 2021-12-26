// Modules...
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "backend",
    password: "backend",
    database: "device-database"
});

module.exports = connection;
