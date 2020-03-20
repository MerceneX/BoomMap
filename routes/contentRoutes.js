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

module.exports = router;
