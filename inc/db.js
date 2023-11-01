const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Jaqueta',
  database: 'saboroso',
  password: 'B13lc@m@rg02508'
});

module.exports = connection;