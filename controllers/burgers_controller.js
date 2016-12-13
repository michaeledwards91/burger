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

module.exports = router;