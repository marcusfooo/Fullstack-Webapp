var mysql = require('mysql');

function connect_db () {
    const connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user : process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
      }) 
      connection.connect(function(err) {
        if (err) 
           throw err
        else {
            console.log('Connected to MySQL');
      }
      });

      return connection
}

module.exports = {
    connect_db
}
