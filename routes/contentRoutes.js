const express = require("express"),
	router = express.Router({ mergeParams: true }),
	ContentGuy = require("../lib/content/ContentGuy");

router.get("/news", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	const response = await cGuy.getNews();
	res.json(response);
});

router.get("/road-conditions", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	const response = await cGuy.getRoadConditions();
	res.json(response);
});

router.get("/traffic-forecast", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	const response = await cGuy.getTrafficForecast();
	res.json(response);
});

router.get("/road-events", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	const response = await cGuy.getRoadEvents();
	res.json(response);
});

router.get("/borders", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	const response = await cGuy.getBordersStatus();
	res.json(response);
});

module.exports = router;
