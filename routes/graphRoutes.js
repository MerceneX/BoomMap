const express = require("express"),
	router = express.Router({ mergeParams: true }),
	QueryMan = require("../lib/queries"),
	valesAndCodes = require("../lib/values");

router.get("/23", async (req, res) => {
	// N/A
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph23.id);
	res.json(queryMan.data);
});

router.get("/24", async (req, res) => {
	// N/A
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph24.id);
	res.json(queryMan.data);
});

router.get("/25", async (req, res) => {
	//PRVR
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph25.id);
	res.json(queryMan.data);
});

router.get("/26", async (req, res) => {
	//PRVZ
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph26.id);
	res.json(queryMan.data);
});

router.get("/27", async (req, res) => {
	//LVVN
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph27.id);
	res.json(queryMan.data);
});

router.get("/28", async (req, res) => {
	//PRVU
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph28.id);
	res.json(queryMan.data);
});
router.get("/29", async (req, res) => {
	//N/A
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph29.id);
	res.json(queryMan.data);
});

router.get("/30", async (req, res) => {
	//PRTN
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph30.id);
	res.json(queryMan.data);
});

router.get("/31", async (req, res) => {
	//PRSP
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph31.id);
	res.json(queryMan.data);
});

router.get("/32", async (req, res) => {
	//LOVC
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph32.id);
	res.json(queryMan.data);
});

router.get("/33", async (req, res) => {
	//N/A
	const queryMan = await QueryMan.getQueryMan(valesAndCodes.graph33.id);
	res.json(queryMan.data);
});

module.exports = router;
