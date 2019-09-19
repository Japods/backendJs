const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'bun1ndjxtuacgzctyaox-mysql.services.clever-cloud.com',
    user: 'uys8ndjmpjqjuerp',
    password: 'E2leRX7qGibtl8y1xSFz',
    database: 'bun1ndjxtuacgzctyaox',
    port: 3306,
    URI: "mysql://uys8ndjmpjqjuerp:E2leRX7qGibtl8y1xSFz@bun1ndjxtuacgzctyaox-mysql.services.clever-cloud.com:3306/bun1ndjxtuacgzctyaox"
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;