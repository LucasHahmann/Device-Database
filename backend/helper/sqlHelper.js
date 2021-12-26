// Modules...
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "test",
    database: "test"
});

module.exports = connection;
