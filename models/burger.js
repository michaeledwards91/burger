var orm = require("../config/orm.js");

var burger = {
	all: function(callback) {
		orm.selectAll(function(res) {
			callback(res);
		}); 
	}
	//ORM METHODS GO HERE, refer to cat.js in 8_1 10-CatsAppProblem
};

module.exports = burger;