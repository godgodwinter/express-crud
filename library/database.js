let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'babeng',
    password: '123',
    database: 'express'
});

connection.connect(function(error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Koneksi Berhasil!');
    }
})

module.exports = connection;