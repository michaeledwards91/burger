var connection = require("./connection.js");

var orm = {
	selectAll: function(callback) {
		console.log("select all");
		var queryString = "SELECT * FROM burgers";

		connection.query(queryString, function(err, result) {
			if (err) throw err;

			callback(result);
		});
	},
	insertOne: function(burgerName, callback) {
		console.log("insert one");
		var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (";
		queryString += "'"+burgerName+"'";
		queryString += ", " + false + ");";
		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) throw err;

			callback(result);
		});
	},
	updateOne: function(id, callback) {
		console.log("update one");
		var queryString = "UPDATE burgers";

	    queryString += " SET ";
	    queryString += "devoured = 1";
	    queryString += " WHERE ";
	    queryString += "id = " + id;

	    console.log(queryString);
	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      callback(result);
	    });
	}
};

module.exports = orm;