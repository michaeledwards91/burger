//Connection to MySQL DB
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'burgers_db'
});
 
connection.connect(function(err) {
	if (err) {
		console.log("Error connecting: " + err.stack);
		return;
	}
	console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;