const express = require("express"),
	router = express.Router({ mergeParams: true }),
	ContentGuy = require("../lib/content/ContentGuy");

router.get("/news", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	console.log(cGuy);
	const response = await cGuy.getNews();
	/*response.items.forEach(element => {
		element.title;
	});*/
	res.json(response);
});

module.exports = router;
