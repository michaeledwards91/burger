var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		console.log(data);
		res.render("index", {burgers: data});
	});
});

router.post("/burgers/create", function(req, res) {

	burger.create(req.body.name, function(data) {
		console.log(data);
		res.redirect("/");
	});
});

router.put("/burgers/update/:id", function(req, res) {

	burger.devour(req.params.id, function(data) {
		console.log(data);
		res.redirect("/");
	});
});

module.exports = router;