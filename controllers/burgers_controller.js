var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//REFER TO catsController.js 8_1 10
router.get("/", function(req, res) {
	burger.all(function(data) {
		console.log(data);
		res.render("index", {burgers: data});
	});
});

router.post("/burgers/create", function(req, res) {
	console.log(req.body);
	console.log("req body name: " + req.body.name);

	burger.create(req.body.name, function(data) {
		console.log(data);
		res.redirect("/");
	});
});

router.put("/burgers/update/:id", function(req, res) {
	console.log("req params id: " + req.params.id);

	burger.devour(req.params.id, function(data) {
		console.log(data);
		res.redirect("/");
	});
});

module.exports = router;