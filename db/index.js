const mysql = require('mysql')


//connect to database 

const client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'climber'
});
client.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});



module.exports = client