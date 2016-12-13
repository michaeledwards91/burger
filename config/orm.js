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
	insertOne: function() {
		console.log("insert one");
	},
	updateOne: function() {
		console.log("update one");
	}
};

module.exports = orm;