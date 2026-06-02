const mysql = require('mysql2');

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'turismo',
    password: '1911',
    database: 'turismo'
});

module.exports = connection.promise();