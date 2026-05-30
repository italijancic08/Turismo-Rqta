const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1911',
    database: 'turismo'
});

module.exports = connection.promise();